require("dotenv").config();
const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const baseUrl = process.env.WEATHERSTACK_BASE_URL;
  const apiKey = process.env.WEATHERSTACK_API_KEY;

  const coordinates = `${latitude},${longitude}`;

  const url = `${baseUrl}?access_key=${apiKey}&query=${coordinates}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (response.body.error) {
      callback("Unable to find location!");
    } else {
      callback(undefined, {
        description: response.body.current.weather_descriptions,
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
      });
    }
  });
};

// forecast(43.8563, 18.4131, (error, data) => {
//   console.log("Data", data);
//   console.log("Error", error);
// });

module.exports = {
  forecast: forecast,
};
