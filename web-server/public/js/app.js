console.log("Client side JavaScript file is loaded!");

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch("http://localhost:3000/weather?address")
//   .then((response) => response.json())
//   .then(({ error, forecast, location }) => {
//     if (error) {
//       console.log("Error:", error);
//     } else {fcc
//       console.log("Forecast:", forecast);
//       console.log("Location:", location);
//     }
//   })
//   .catch((err) => {
//     console.log("Fetch error:", err);
//   });

// fetch("http://localhost:3000/weather?address=!").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = 'From JavaScript';

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        // console.log(data.error);
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        const description = data.forecast.description;
        const temperature = data.forecast.temperature;
        const feelslike = data.forecast.feelslike;
        const humidity = data.forecast.humidity;
        messageTwo.textContent = `${description}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out. The humidity is ${humidity} %.`;
        // console.log(data.location);
        // console.log(data.forecast);
      }
    });
  });

  // console.log(location);
  // console.log("testing");
});
