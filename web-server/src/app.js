const express = require("express");
const app = express();
const PORT = 3000;

app.get("", (req, res) => {
  res.send("Hello from Exspress");
});

app.get("/help", (req, res) => {
  res.send("Help Page!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/weather", (req, res) => {
  res.send("Weather Page");
});

// app.com
// app.com/help
// app.com/about

app.listen(PORT, () => {
  console.log("Server is up on PORT:", PORT);
});
