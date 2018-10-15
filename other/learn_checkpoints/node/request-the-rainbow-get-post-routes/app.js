const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const gets = ['red', 'yellow', 'blue', 'violet'];
gets.forEach((color) => {
  app.get(`/${color}`, (req, res) => {
    res.send({ color });
  });
});

const posts = ['orange', 'green', 'indigo', 'red'];
posts.forEach((color) => {
  app.post(`/${color}`, (req, res) => {
    res.send({ color });
  });
});

app.use((req, res, err) => {
  const status = err.status || 500;
  res.status(status).json({ error: err });
});

app.use((req, res) => {
  res.status(404).json({ error: { message: 'Not found' } });
});

const listener = () => `Listening on port ${port}!`;
app.listen(port, listener);

module.exports = app;
