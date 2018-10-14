/* eslint-disable no-console */

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const signupRouter = require('./routes/signup');

app.get('/', (req, res) => {
  res.render('index', { header: 'Best Site Ever', text: 'Welcome!' });
});

app.use('/signup', signupRouter);

app.get('/:name', (req, res) => {
  const { name } = req.params;
  const { msg1, msg2 } = req.query;
  res.send(`Hello ${name}! ${msg1 || ''} ${msg2 || ''}`);
});

app.listen(port, () => console.log('listening on port', port));
