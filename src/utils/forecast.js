const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service.');
    } else if (body.error) {
      callback('Unable to find location.');
    } else {
      const currentData = body.current;
      console.log(body);
      callback(undefined, currentData.weather_descriptions[0] + '. It is currently ' + currentData.temperature + ' degrees out. It feels like ' + currentData.feelslike + ' degrees out. There is a ' + currentData.precip + '% chance of rain. The humidity is ' + currentData.humidity + '%.');
    }
  });
};

module.exports = forecast;
