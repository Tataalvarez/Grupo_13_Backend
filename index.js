const express = require('express')
const mongoose = require('mongoose');

// Inicia express
const app = express();

// Conectando a la base de datos
require('./config/db');

// habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la app
const port = process.env.port || 3001;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));

// Arrancar la app
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});



