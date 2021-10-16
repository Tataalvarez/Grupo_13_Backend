const express = require('express')
const conectarDB = require('./config/db')

// Inicia express
const app = express();

// Conectar a la base de datos
conectarDB();

// habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la app
const PORT = process.env.PORT || 3001;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));

// Arrancar la app
app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});



