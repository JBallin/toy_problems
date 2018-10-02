const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./index.html');
const aboutPage = fs.readFileSync('./pages/about.html');
const faqPage = fs.readFileSync('./pages/FAQ.html');
const notFoundPage = fs.readFileSync('./pages/404.html');

function handleRequest(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  switch (req.url) {
    case '/':
      res.write(homePage);
      break;
    case '/about.html':
      res.write(aboutPage);
      break;
    case '/FAQ.html':
      res.write(faqPage);
      break;
    default:
      res.write(notFoundPage);
      res.statusCode = 404;
  }
  const links = fs.readFileSync('./pages/links.html');
  res.write(links);
  res.end();
}

const server = http.createServer(handleRequest);
server.listen(8000);

function handleRequest2(req, res) {
  res.write('You found the easter egg!');
  res.end();
}

const server2 = http.createServer(handleRequest2);
server2.listen(1337);
