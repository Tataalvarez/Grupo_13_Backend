const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.user}:${process.env.pass}@${process.env.host}`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB conectada"))
  .catch((e) => console.log("error de conexión", e));

module.exports = mongoose;
