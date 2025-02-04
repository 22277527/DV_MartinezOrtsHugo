const http = require('http');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser'); // Paquete csv-parser para leer CSV

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'main.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(filePath));
  } else if (req.url === '/data') {
    // Ruta del nuevo archivo CSV
    const csvPath = path.join(__dirname, 'billing_investment_table1.csv');
    console.log('CSV Path:', csvPath); // Verifica la ruta en la consola

    const results = [];

    // Lee el archivo CSV y almacena los datos
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data); // Almacena los datos de cada fila
      })
      .on('end', () => {
        // Enviar los datos como JSON al navegador
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results)); // Envia los datos como JSON
      })
      .on('error', (err) => {
        // Si hay un error al leer el archivo
        console.error('Error reading CSV file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading CSV file');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
