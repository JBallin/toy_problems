const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const port = 8080;
const helloPath = path.resolve('hello.html');

const handleRequest = (req, res) => {
	const {pathname} = url.parse(req.url);
	res.setHeader('Content-Type', 'text/html');
	if (pathname === '/hello') {
		const helloPage = fs.readFileSync(helloPath, 'utf-8');
		res.end(helloPage);
	} else {
		res.end(`<p>${pathname}</p>`);
	}
};
const listener = () => {
	console.log('listening on port', port);
}

const server = http.createServer(handleRequest);
server.listen(port, listener);
