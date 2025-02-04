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

    // Lee el archivo CSV y lo imprime en la terminal
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => {
        console.log(data); // Imprime cada fila del CSV en la terminal
        results.push(data);
      })
      .on('end', () => {
        console.log('CSV Parsing Finished!');
      })
      .on('error', (err) => {
        // Si hay un error al leer el archivo
        console.error('Error reading CSV file:', err);
      });
    
    // Enviar una respuesta vacía por ahora
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('CSV Data is being logged in the terminal');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
