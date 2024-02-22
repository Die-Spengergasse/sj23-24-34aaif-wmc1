// http://localhost/ .... kommt nichts

const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('Hallo 4AAIF');
  res.end();
}).listen(3000);
