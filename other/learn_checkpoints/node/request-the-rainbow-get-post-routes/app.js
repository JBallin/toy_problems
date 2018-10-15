const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/red', (req, res) => res.send({ color: 'red' }));
app.get('/yellow', (req, res) => res.send({ color: 'yellow' }));
app.get('/blue', (req, res) => res.send({ color: 'blue' }));
app.get('/violet', (req, res) => res.send({ color: 'violet' }));
app.post('/orange', (req, res) => res.send({ color: 'orange' }));
app.post('/green', (req, res) => res.send({ color: 'green' }));
app.post('/indigo', (req, res) => res.send({ color: 'indigo' }));
app.post('/red', (req, res) => res.send({ color: 'red' }));

app.use((err, req, res) => {
  const status = err.status || 500;
  res.status(status).json({ error: err });
});

app.use((req, res) => {
  res.status(404).json({ error: { message: 'Not found' } });
});

const listener = () => `Listening on port ${port}!`;
app.listen(port, listener);

module.exports = app;
