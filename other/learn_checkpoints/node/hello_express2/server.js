/* eslint-disable no-console */

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port', port));

app.get('/:name', (req, res) => {
  const { name } = req.params;
  const { msg1, msg2 } = req.query;
  res.send(`Hello ${name}! ${msg1 || ''} ${msg2 || ''}`);
});
