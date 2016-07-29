var request = require('request');
var apikey = process.env.API_KEY || require('../key').api_key;

exports.getFlights = function(origin, dest, depart, returned, priceLimit, adults, kids, city, cityLink , cb ){

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
        console.log(results);
        cb(results);

      })
    } else{
      console.log('err',err);
    }
  });

}

// exports.getHotels = function(origin, dest, depart, returned, adults, kids, city, cityLink , cb ){

//   let hotelSuggest = `http://partners.api.skyscanner.net/apiservices/hotels/autosuggest/v2/US/USD/en-US/${query}?apikey=${apikey}`

//   let hotelPrice = `http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/US/USD/en-US/${entityid}/${depart}/${returned}/${guests}/${rooms}?apiKey=${apiKey}`

//   //do a post on the query
//   request.get(hotelSuggest, {},
//   function(err, res, body){
//     if(!err){
//       //filters from body and returns 5 lowest prices
//       request.get(res.headers.location+'?apiKey='+apikey+'&pageindex=0&pagesize=5&sortorder=asc&sorttype=price' ,function(err, res, body){

//           body = JSON.parse(body);


//         cb(results);

//       })
//     } else{
//       console.log('err',err);
//     }
//   });

// }