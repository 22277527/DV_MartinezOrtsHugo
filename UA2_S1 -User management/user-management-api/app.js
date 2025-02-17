const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Crear una instancia de express
const app = express();

// Middleware para analizar el cuerpo de las solicitudes (JSON)
app.use(bodyParser.json());

// Conexión con la base de datos de MongoDB
mongoose.connect('mongodb://localhost:27017/userdb')
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar con MongoDB:', error));

// Importar y usar las rutas de usuario
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

// Exportar la app para usarla en otros archivos
module.exports = app;
