const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server init");
});

app.get('/', (req, res) => {
  res.send('Saludos desde express');
});