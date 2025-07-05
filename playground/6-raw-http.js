// const raw = '{"name":"Mirnes","age":27}'; // not object yet
// const obj = JSON.parse(raw);
// console.log(obj)

const { error } = require("console");
const https = require("https");

const url =
  "https://api.weatherstack.com/current?access_key=4b1d701043c1f0bf0563a51beb793984&query=45,-75";

const request = https.request(url, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  res.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error: ", error);
});

request.end();
