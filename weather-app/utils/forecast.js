require("dotenv").config();
const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const baseUrl = process.env.WEATHERSTACK_BASE_URL;
  const apiKey = process.env.WEATHERSTACK_API_KEY;

  const coordinates = `${latitude},${longitude}`;

  const url = `${baseUrl}?access_key=${apiKey}&query=${coordinates}`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location!");
    } else {
      callback(undefined, {
        description: body.current.weather_descriptions,
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
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
