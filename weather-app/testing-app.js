// console.log("Starting");

// setTimeout(() => {
//   console.log("2 Second Timer");
// }, 2000);

// setTimeout(() => {
//   console.log("0 Second Timer");
// }, 0);

// console.log("Stopping");

require("dotenv").config();

const request = require("postman-request");

// const url = process.env.ACCESS_KEY;

// request({ url: url, json: true }, (error, res) => {
//   const data = JSON.parse(res.body);
//   console.log(data.current);
// console.log(res.body.current);

//   console.log(error);

//   console.log(
//     `${res.body.current.weather_descriptions[0]}. It's currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} degrees out.`
//   );
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (res.body.error) {
//     console.log("Unable to find right query!");
//   } else {
//     console.log(
//       `${res.body.current.weather_descriptions}. It's currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} degrees out.`
//     );
//   }
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// const forecast = (x, y, callback) => {
//   const baseUrl = process.env.WEATHERSTACK_BASE_URL;
//   const apiKey = process.env.WEATHERSTACK_API_KEY;

//   const coordinates = `${x},${y}`;

//   const url = `${baseUrl}?access_key=${apiKey}&query=${coordinates}`;

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather service!");
//     } else if (response.body.error) {
//       callback("Unable to find right query!");
//     } else {
//       callback(undefined, {
//         description: response.body.current.weather_descriptions,
//         temperature: response.body.current.temperature,
//         feelslike: response.body.current.feelslike,
//       });
//     }
//   });
// };

// forecast(43.8563, 18.4131, (error, data) => {
//   console.log("Data", data);
//   console.log("Error", error);
// });

// Geocoding
// Adress => Lat/Long -> Weather

// const mapUrl = process.env.ACCESS_KEY_MAP;

// request({url: mapUrl}, (error, res) => {
//     const data = JSON.parse(res.body);
//     console.log(data.features[0].center)
// })

// request({ url: mapUrl, json: true }, (error, res) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (res.body.features.length === 0) {
//     console.log("Unable to find location! Try another search");
//   } else {
//     console.log(
//       "latitude:",
//       res.body.features[0].center[1],
//       "longitude:",
//       res.body.features[0].center[0]
//     );
//   }
// });

// const geoCode = (address, callback) => {
//   const baseUrl = process.env.MAPBOX_BASE_URL;
//   const token = process.env.MAPBOX_TOKEN;

//   const url = `${baseUrl}${encodeURIComponent(
//     address
//   )}.json?access_token=${token}&limit=1`;

//   request({ url: url, json: true }, (error, res) => {
//     if (error) {
//       callback("Unable to connect to location service!");
//     } else if (res.body.features.length === 0) {
//       callback("Unable to find location! Try another search");
//     } else {
//       callback(undefined, {
//         location: res.body.features[0].place_name,
//         longitude: res.body.features[0].center[0],
//         latitude: res.body.features[0].center[1],
//       });
//     }
//   });
// };

// geoCode("Sarajevo", (error, data) => {
//   console.log("Data:", data);
//   console.log("Error:", error);
// });
