const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("server is listening");
});

app.get("/", (req, res) => {
  res.send("Thank you for your request");
});
