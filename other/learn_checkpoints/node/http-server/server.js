const http = require('http');
const fs = require('fs');

function handleRequest(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  switch (req.url) {
    case '/': {
      const homePage = fs.readFileSync('./index.html');
      res.write(homePage);
      break;
    }
    case '/about.html': {
      const aboutPage = fs.readFileSync('./pages/about.html');
      res.write(aboutPage);
      break;
    }
    case '/FAQ.html': {
      const faqPage = fs.readFileSync('./pages/FAQ.html');
      res.write(faqPage);
      break;
    }
    default: {
      const notFoundPage = fs.readFileSync('./pages/404.html');
      res.write(notFoundPage);
      res.statusCode = 404;
    }
  }
  const links = fs.readFileSync('./pages/links.html');
  res.write(links);
  res.end();
}

const server = http.createServer(handleRequest);
server.listen(8000);
