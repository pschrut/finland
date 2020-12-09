const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db");
const Outcome = require("./models/outcome");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(3000, () => {
  console.log("Server init");
});

app.get('/api/outcomes', (req, res) => {
  Outcome.find({}, (error, outcome) => {
    if (error) {
      return res.status(500).json({
        ok: false,
        err: error
      })
    }

    res.json(outcome);
  });
});