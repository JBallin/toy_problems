const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Write your routes here!

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
