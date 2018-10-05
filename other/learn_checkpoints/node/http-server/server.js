const http = require('http');
const router = require('./routes.js');

const server = http.createServer(router);
server.listen(8000);

function handleRequest2(req, res) {
  res.write('You found the easter egg!');
  res.end();
}

const server2 = http.createServer(handleRequest2);
server2.listen(1337);
