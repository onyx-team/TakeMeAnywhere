const helpers = require('./helpers');

module.exports = function(app, express) {

  app.post('/api/flights', function(req,res){
    //take in params fromt he body
    const params = req.body;

    //throw them in and use the callback function to return data after it's ready
    helpers.hotelDetails(params.origin, params.dest, params.depart, params.returned, params.priceLimit, params.adults, params.kids, params.city , params.cityLink , function(data){
      res.send(200, data);
    });

  })

}