const mongoose = require("mongoose");
require("dotenv").config();

const mongoAtlasUri = `mongodb://${process.env.admin}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`;

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

module.exports = mongoose;
