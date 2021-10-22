const express = require('express')
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./config/db')


app.use(express.json())
app.use(bodyParser.urlencoded(bodyParser.json))

const port = 3001;

app.use(morgan("dev"))

//app.get('/', (req, res) =>{
    //res.json({status: 200});
//})

app.use('/productos', routes.productsRoutes);
//app.use('/ventas', routes.salesRoutes);

app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
});



