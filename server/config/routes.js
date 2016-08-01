const helpers = require('./helpers');

module.exports = function(app, express) {

  app.post('/api/flights', function(req,res){
    //take in params fromt he body
    const params = req.body;

    //throw them in and use the callback function to return data after it's ready
    helpers.flightsAndHotels(params.origin, params.dest, params.depart, params.returned, params.priceLimit, params.adults, params.kids, params.city , params.cityLink , function(data){
      res.send(200, data);
    });

  })

  app.post('/api/wiki', function(req,res){
    //take in params fromt he body
    const params = req.body.titles;

    //throw them in and use the callback function to return data after it's ready
    helpers.queryWiki(params, function(data){
      res.send(200, data);
    });

  })

  // This route is used for Yelp queries
  app.post('/api/yelp', function(req,res){

    // This helper function gets an access token back from Yelp
    // to be used in the authorization header
    helpers.getYelpToken(function(token){

      // Parse the token before adding it to the query
      const parsedToken = JSON.parse(token);

      // The query built using the request params
      const query = {
        token: parsedToken,
        term: req.body.term,
        location: req.body.location,
        limit: req.body.limit,
      }

      // This is a generic helper that can used for
      // any Yelp query
      helpers.queryYelp(query, function(data){
        res.send(200, data);
      });
    });

  });

}