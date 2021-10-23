const express = require("express");
const cors = require('cors');

// Inicia express
const app = express();

// Puerto de la app
const port = process.env.port || 3001;

// Conectando a la base de datos
require("./config/db");


// Middlewares
app.use(cors());
app.use(express.json()); // habilitar express.json

// Importar rutas
app.use('/api/productos', require('./routes/productos'));
app.use('/api/ventas', require('./routes/ventas'));
// app.use('/api/usuarios', require('./routes/usuarios'));

// Arrancar la app
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
