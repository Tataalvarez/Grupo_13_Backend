const mongoose = require("mongoose");
require('dotenv').config();


const mongoAtlasUri =
"mongodb+srv://grupo13:GcdYhVCTeLxVwNR3@cluster0.tuzmh.mongodb.net/appventas?retryWrites=true&w=majority";

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

module.exports = mongoose;