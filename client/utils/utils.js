export function searchFlights(options, callback) {
  // TODO
  $.get(url, {})
    .done(({flights}) => {
      if(callback) {
        callback(flights);
      }
    })
    .fail(({responseJSON}) => {
      console.log('error happened did not retrieve flights');
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};