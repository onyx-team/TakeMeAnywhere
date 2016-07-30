var request = require('request');
var apikey = process.env.API_KEY || require('../key').api_key;

// This function queries wikipedia for brief excerpts
// that will be used instead of the static links
exports.queryWiki = function(query, cb){

  var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + encodeURIComponent(query);

  request.post(url, function(err, res, body){
    cb(body);
  });
};

exports.getFlights = function(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink , cb ){

//iata is necessary to specify type
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

var getLocation = function(depart, returned, adults, kids, city, cb){
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

var priceHotels = function(depart, returned, adults, kids, city, cb){
  getLocation(depart, returned, adults, kids, city, function(id){
    var guests = adults + kids;
    var rooms = Math.ceil(guests/4);
    var priceHotel = `http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/US/USD/en-US/${id}/${depart}/${returned}/${guests}/${rooms}?apiKey=prtl6749387986743898559646983194`

    request.get(priceHotel, function(err, res, body){
      if(!err){
        var hotelStore = {};
        body = JSON.parse(body);
        hotelStore.main = body;
        hotelStore.id = `${body.hotels[0].hotel_id},${body.hotels[1].hotel_id},${body.hotels[2].hotel_id},${body.hotels[3].hotel_id},${body.hotels[4].hotel_id}`;
        hotelStore.request = body.urls.hotel_details;
        cb(hotelStore);
      } else {
        console.log('err', err);
      }
    })
  });
}

var hotelDetails = function(depart, returned, adults, kids, city, cb){
  priceHotels(depart, returned, adults, kids, city, function(store){
    request.get('http://partners.api.skyscanner.net' + store.request + '&hotelids=' + store.id, function(err, res, body){
      if(!err){
        var hotelList = [];
        body = JSON.parse(body);

        for(var i = 0; i < 6; i++){
          var hotelDeets = {};
          if(body.hotels[i] && body.hotels_prices[i].agent_prices[0]){
            hotelDeets.name = store.main.hotels[i].name;
            hotelDeets.image = 'http://' + store.main.hotels[i].image_urls[0].replace(/{/g, '').replace(/:/g, '').replace('rmt.jpg[200,200],', '').split('[')[0];
            hotelDeets.stars = store.main.hotels[i].star_rating;
            hotelDeets.description = body.hotels[i].description;
            hotelDeets.link = body.hotels_prices[i].agent_prices[0].booking_deeplink;
            hotelDeets.pricePerNight = body.hotels_prices[i].agent_prices[0].price_per_room_night;
            hotelDeets.total = body.hotels_prices[i].agent_prices[0].price_total;
            hotelList.push(hotelDeets);
          }
        }

        cb(hotelList);
      } else {
        console.log('err',err);
      }
    });
  });
}

exports.flightsAndHotels = function(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink , cb){
  getFlights(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink , function(results){
    if(results.length > 0){
      hotelDetails(depart, returned, adults, kids, results[0].city, function(hotels){
        results[0].hotelList = hotels;
        cb(results);
      })
    }
  });
}