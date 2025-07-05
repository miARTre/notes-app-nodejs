const express = require("express");
const path = require("path");
const { title } = require("process");

// console.log(__dirname)
// console.log(path.join(__dirname, '../public/index.html'))
// console.log(__filename)

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

const PORT = 3000;

app.set("view engine", "hbs");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "miARTre",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "miARTre",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "This is message for help",
  });
});

// app.get("", (req, res) => {
//   res.send("<h1>Weather</h1>");
// });

// app.get("/help", (req, res) => {
//   //   res.send({
//   //     name: 'Mire',
//   //     age: 27,
//   //   });
//   res.send([
//     {
//       name: "Mire",
//       age: 27,
//     },
//     {
//       name: "Biska",
//       age: 60,
//     },
//   ]);
// });

// app.get("/about", (req, res) => {
//   //   res.send("<head><title>About Page</title></head><body><h1>About Page</h1></body></html>");
//   res.send("<h1>About Page</h1>");
// });

app.get("/weather", (req, res) => {
  //   res.send("Weather Page");
  res.send({
    forecast: "It's sunny",
    location: "Sarajevo",
  });
});

// app.com
// app.com/help
// app.com/about

app.listen(PORT, () => {
  console.log("Server is up on PORT:", PORT);
});
