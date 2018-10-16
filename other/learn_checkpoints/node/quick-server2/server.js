/* eslint-disable */

const express = require('express');
const logger = require('morgan');

const port = process.env.PORT || 3000;
const app = express();

app.disable('x-powered-by');

app.use(logger('dev'));

app.get('/:name', (req, res) => {
  res.json({message: `hello ${req.params.name}!`});
});

app.use((err, req, res, next) => {
  res.status(err.status).send(err);
});

app.use((req, res) => {
  res.status(400).send('Not Found');
});

app.listen(port, () => console.log(`listening on port ${port}`));
