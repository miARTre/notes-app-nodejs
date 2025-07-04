require("dotenv").config();

const request = require("postman-request");

const geoCode = (address, callback) => {
  const baseUrl = process.env.MAPBOX_BASE_URL;
  const token = process.env.MAPBOX_TOKEN;

  const url = `${baseUrl}${encodeURIComponent(
    address
  )}.json?access_token=${token}&limit=1`;

  request({ url, json: true }, (error, {body} = {}) => {
    if (error) {
      callback("Unable to connect to location service!");
    } else if (body.features.length === 0) {
      callback("Unable to find location! Try another search");
    } else {
      callback(undefined, {
        location: body.features[0].place_name,
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
      });
    }
  });
};

// geoCode("Sarajevo", (error, data) => {
//   console.log("Data:", data);
//   console.log("Error:", error);
// });

module.exports = {
    geoCode: geoCode
}