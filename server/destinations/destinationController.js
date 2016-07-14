var Destination = require('./destination.js');
var Q = require('q');

//promisify helpers
var findDestinations = Q.nbind(Destination.find, Destination);
var findOneDestination = Q.nbind(Destination.findOne, Destination);

module.exports = (function() {

})();