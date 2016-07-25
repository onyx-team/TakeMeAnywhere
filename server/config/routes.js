var helpers = require('./helpers');

module.exports = function(app, express) {

  app.post('/api/flights', function(req,res){
    var params = req.body;
    console.log('PARAMS', params);
    helpers.getFlights(params.origin, params.dest, params.depart, params.returned, params.priceLimit, params.adults, params.kids, params.city , params.cityLink , function(data){
      console.log("RESDATA", data)
      res.send(200, data);
    });

  })

}