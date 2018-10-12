/* eslint-disable no-console */

const express = require('express');

const app = express();
const port = process.env.PORT || 8000;
app.use((req, res) => res.send('Hello World'));
app.listen(port, () => console.log('listening on', port));


const http = require('http');

const port2 = 3000;
const server = http.createServer((req, res) => res.end('Hello World'));
server.listen(port2, () => console.log('listening on', port2));
