var request = require('request');
var apikey = process.env.API_KEY || require('../key').api_key;

exports.getFlights = function(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink , cb){

//iata is necessary to specifiy type
  if(origin) origin+='-iata';
  if(dest) dest+='-iata';
  if(!priceLimit) priceLimit = 1500;

  //do a post on the query
 request.post('http://partners.api.skyscanner.net/apiservices/pricing/v1.0/',{
  form:{
      apiKey: apikey,
      country: 'US',
      currency: 'USD',
      locale : 'en-US',
      originplace: origin ||'SFO-iata',
      destinationplace: dest || 'LAX-iata',
      outbounddate : depart || '2016-08-24',
      inbounddate: returned || '2016-08-30',
      adults: adults || 1,
      children: kids || 0
    }
// and then do a get on the location provided by the header location
  }, function(err, res, body){
    if(!err){
      //filters from body and returns 5 lowest prices
      request.get(res.headers.location+'?apiKey='+apikey+'&pageindex=0&pagesize=5&sortorder=asc&sorttype=price' ,function(err, res, body){

        body = JSON.parse(body);
        var agents = body.Agents;
        var carriers = body.Carriers;
        var places = body.Places;
        var results = [];
        var current = 0;

        body.Itineraries.forEach(function(flight){
          //only push items within price limit
          if(flight.PricingOptions[0].Price <= priceLimit){
            //create temp storage to push into results
            var storage = {};

            //grabs airline code from ID
            var airline = flight.OutboundLegId[17]+flight.OutboundLegId[18];

            //get price and booking link
            storage.price = flight.PricingOptions[0].Price;
            storage.url = flight.PricingOptions[0].DeeplinkUrl;
            //storage.url = flight.BookingDetailsLink.Uri;
            //get agency id
            var agentID =  flight.PricingOptions[0].Agents[0];

            //grab agency name and logo
            //break, and save time if possible
            for(var i=0;i<agents.length;i++){
              if(agentID === agents[i].Id){

                storage.agent = agents[i].Name
                storage.agentImg = agents[i].ImageUrl;
                break;
              }
            }

            //get carrier info
            for(var i=0;i<carriers.length;i++){
              if(airline === carriers[i].Code){
                storage.airline = carriers[i].Name;
                storage.airlineImg = carriers[i].ImageUrl;
                break;
              }
            }

            //get origin and destination ids
            var originId = body.Legs[current].OriginStation;
            var destinationId = body.Legs[current].DestinationStation;

            //get origin and destination codes
            for(var i = 0; i < places.length; i++){
              if (originId === places[i].Id){
                storage.originCode = places[i].Code;
              }
              if (destinationId === places[i].Id){
                storage.destinationCode = places[i].Code;
              }
            }

            //add departure times, arrival times, flight number
            storage.departureTime = body.Legs[current].Departure;
            storage.arrivalTime = body.Legs[current].Arrival;
            storage.flightNumber = body.Segments[current].FlightNumber;
            storage.cityLink = cityLink;
            storage.city = city;
            results.push(storage);
            current++
          }

       });
        cb(results);

      })
    } else{
      console.log('err',err);
    }
  });

}

var getHotels = function(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink, cb){
  var query = city.replace(/\s/g, '%20');
  var getHotel = `http://partners.api.skyscanner.net/apiservices/hotels/autosuggest/v2/US/USD/en-US/${query}?apikey=${apikey}`;
  request.get(getHotel, function(err, res, body){
    if(!err){
      body = JSON.parse(body);
      cb(body.results[0].individual_id)
    } else {
      console.log('err',err);
    }
  });
}

var priceHotels = function(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink, cb){
  getHotels(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink, function(id){
    var guests = adults + kids;
    var rooms = Math.ceil(guests/4);
    var count = 0;
    var priceHotel = `http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/US/USD/en-US/${id}/${depart}/${returned}/${guests}/${rooms}?apiKey=prtl6749387986743898559646983194`

    request.get(priceHotel, function(err, res, body){
      if(!err){
        var hotelStore = {};
        body = JSON.parse(body);
        if(body.hotels[count]){
          hotelStore.name = body.hotels[count].name;
          hotelStore.image = body.hotels[count].image_urls[0].replace(/{/g, '').replace(/:/g, '').replace('rmt.jpg[200,200],', '').split('[')[0];
          hotelStore.stars = body.hotels[count].star_rating;
          hotelStore.id = body.hotels[count].hotel_id;
          hotelStore.request = body.urls.hotel_details;
          cb(hotelStore);
        }
      } else {
        console.log('err', err);
      }
    })
  });
}

exports.hotelDetails = function(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink, cb){
  priceHotels(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink, function(store){
    request.get('http://partners.api.skyscanner.net' + store.request + '&hotelids=' + store.id, function(err, res, body){
      if(!err){
        body = JSON.parse(body);
        store.description = body.hotels[0].description;
        store.link = body.hotels_prices[0].agent_prices[0].booking_deeplink;
        store.pricePerNight = body.hotels_prices[0].agent_prices[0].price_per_room_night;
        store.total = body.hotels_prices[0].agent_prices[0].price_total
        console.log(store);
        cb(store);
      } else {
        console.log('err',err);
      }
    });
  });
}