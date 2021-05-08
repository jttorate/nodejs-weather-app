const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoianR0b3JhdGUiLCJhIjoiY2tvM3loemZpMDVvNzJ2bjBua2RwYXQ5dyJ9.UGKb2Pr6C97Y2v8X0JLY-Q&limit=1';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location service');
    } else if (typeof body.message !== 'undefined' && response.body.message) {
      callback(body.message);
    } else {
      if (typeof body.features !== 'undefined' && body.features.length > 0) {
        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name
        });
      } else {
        callback('Unable to find location. Try another search.');
      }
    }
  });
};

module.exports = geocode;
