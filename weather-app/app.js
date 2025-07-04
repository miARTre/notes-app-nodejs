const { geoCode } = require("./utils/geocode");
const {forecast} = require("./utils/forecast")

geoCode("Sarajevo", (error, data) => {
  console.log("Data:", data);
  console.log("Error:", error);
});


forecast(43.8563, 18.4131, (error, data) => {
  console.log("Data", data);
  console.log("Error", error);
});

// const url = process.env.ACCESS_KEY;

// request({ url: url, json: true }, (error, res) => {
//   setTimeout(() => {
//     if (error) {
//       console.log("Unable to connect to weather service!");
//     } else if (res.body.error) {
//       console.log("Unable to find right query!");
//     } else {
//       console.log(
//         `${res.body.current.weather_descriptions}. It's currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} degrees out.`
//       );
//     }
//   }, 0);
// });

// const mapUrl = process.env.ACCESS_KEY_MAP;

// request({ url: mapUrl, json: true }, (error, res) => {
//   setTimeout(() => {
//     if (error) {
//       console.log("Unable to connect to weather service!");
//     } else if (res.body.features.length === 0) {
//       console.log("Unable to find location! Try another search");
//     } else {
//       console.log(
//         "latitude:",
//         res.body.features[0].center[1],
//         "longitude:",
//         res.body.features[0].center[0]
//       );
//     }
//   }, 2000);
// });
