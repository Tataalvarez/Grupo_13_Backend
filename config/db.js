const mongoose = require("mongoose");
require('dotenv').config();

const uri = `mongodb+srv://${process.env.user}:${process.env.pass}@cluster0.a4mr0.mongodb.net/${process.env.database}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB conectada"))
  .catch((e) => console.log("error de conexión", e));

module.exports = mongoose;