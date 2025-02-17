const app = require('./app'); // Importar la configuración de la app

// Iniciar el servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
