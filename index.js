const express = require('express')
const app = express();
const moongose = require('moongose');

// Conectando a la base de datos
require('./config/db');

const port = 3001;

app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
});



