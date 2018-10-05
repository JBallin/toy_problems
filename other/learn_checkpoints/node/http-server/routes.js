const fs = require('fs');
const path = require('path');

const handleRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  const file = renderFile(req, res);
  res.write(file);

  if (path.extname(req.url) !== '.css') {
    const links = fs.readFileSync('./pages/links.html');
    res.write(links);
  }

  res.end();
};

function renderFile(req, res) {
  let file;
  const pagePath = `./pages/${req.url}`;

  if (fs.existsSync(pagePath) && req.url !== '/') {
    file = fs.readFileSync(pagePath);
  } else {
    switch (req.url) {
      case '/':
        file = fs.readFileSync('./index.html');
        break;
      case '/style.css':
        res.setHeader('Content-Type', 'text/css');
        file = fs.readFileSync('./style.css');
        break;
      default:
        file = fs.readFileSync('./pages/404.html');
        res.statusCode = 404;
    }
  }

  return file;
}

module.exports = handleRequest;
