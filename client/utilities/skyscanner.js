var session;
var apikey = 'ta293846389262362620117729258148';

function getSession(cb){
  $.ajax({
    url: 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0',
    header:{
      'HTTP Content-Type header': ‘application/x-www-form-urlencoded’,
      'HTTP Accept header': ‘application/json’
    }
    type: 'POST',
    data:{
      apiKey: apikey,
      country: 'US',
      currency: 'USD',
      locale : 'en-US',
      originplace: 'SFO',
      destinationplace: 'LAX',
      outbounddate : '2016-08-24'
    },
    success: function(data){
      console.log(data);
    },
    error: function(err){
      console.log(err);
    }
  })
}

function requestBookings(){
  $.ajax({
    url: 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0/'+session+'?apiKey='+apikey,
    dataType: 'jsonp',
    success: function(data){
      console.log(data);
    },
    error: function(error){
      console.log(error);
    }
  })
}

function getBookings(){
    if(!session){
    getSession(requestBookings);
  }else{
    requestBookings();
  }
}

http://api.skyscanner.net/apiservices/pricing/v1.0/_2-0e0yQo0H78JPiJ33CNhz0gyilxX0oUtJB4uc9oAD_WSFow7msw7o_dUJv0mMuqIr93QM-gC9d6l9wx8KNSFw==?apikey=ta293846389262362620117729258148