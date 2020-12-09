const mongoose = require("mongoose");

const db_path = "mongodb://localhost/finland";
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(db_path, config, error => {
  if (!error) {
    console.log("yes");
  } else {
    console.log("error");
  }
});