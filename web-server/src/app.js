const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { error } = require("console");

// console.log(__dirname)
// console.log(path.join(__dirname, '../public/index.html'))
// console.log(__filename)

const app = express();
const PORT = 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
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
    title: "Help",
    name: "miARTre",
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
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  res.send({
    forecast: "It's sunny",
    location: "Sarajevo",
    address: req.query.address,
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  // console.log(req.query.search);
  res.send({
    products: [],
  });
});

// app.get(/^\/help\/.*/, (req, res) => {
//   res.send('Help article not found');
// });

app.get(/^\/help\/.*/, (req, res) => {
  res.render("404", {
    errorMessage: "Help article not found",
    title: "404",
    name: "miARTre",
  });
});

// app.get(/.*/, (req, res) => {
//   res.send("My 404 Page");
// });

app.get(/.*/, (req, res) => {
  res.render("404", {
    errorMessage: "Page not found",
    title: "404",
    name: "miARTre",
  });
});

// app.com
// app.com/help
// app.com/about

app.listen(PORT, () => {
  console.log("Server is up on PORT:", PORT);
});
