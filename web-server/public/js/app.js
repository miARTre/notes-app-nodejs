console.log("Client side JavaScript file is loaded!");

fetch("http://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

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


fetch('http://localhost:3000/weather?address=sarajevo').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})