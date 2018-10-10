const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const port = 8080;
const helloPath = path.resolve('hello.html');

const handleRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const newUrl = url.parse(req.url);
  const { query, pathname } = newUrl;

  res.write(`<p>Pathname: ${pathname}</p>`);
  if (query) res.write(`<p>Query: ${query}</p>`);
  if (pathname === '/hello') {
    const helloPage = fs.readFileSync(helloPath, 'utf-8');
    res.write(helloPage);
  }

  res.end('<a href="/">Home</a>');
};
const listener = () => {
  console.log('listening on port', port);
};

const server = http.createServer(handleRequest);
server.listen(port, listener);
