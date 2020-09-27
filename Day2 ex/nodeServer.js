const http = require('http');
const DOSDetector = require('./dosDetector');
const osInfo = require('./osInfo'); 

const dosDetector = new DOSDetector(10000);

const server = http.createServer((req, res) => {
    dosDetector.addUrl(req.url);
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(osInfo));
    //Return a response with OS-info, using the code implemented in part-a
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
    console.log(sock.remoteAddress)
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');
dosDetector.on('DOSDetected', (arg) => {
    console.log('Dos Detector called', arg)
});
//Register for the "DosDetected" event and console.log the url and time info.

