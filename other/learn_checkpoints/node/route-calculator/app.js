const express = require('express');
const logic = require('./logic');

const app = express();
const port = process.env.PORT || 3000;

app.get('/:num1/:operator/:num2', (req, res, next) => {
  try {
    const { num1, operator, num2 } = req.params;
    const operators = {
      'plus': '+',
      'minus': '-',
      'times': 'x',
      'over': '/',
    }
    const result = logic(req.params);
    res.send(`<h1>${num1} ${operators[operator]} ${num2} = ${result}</h2>`); }
  catch (err) { next(err); }
});

app.use((req, res) => {
  res.status(400).send('<h1>Incorrect Path</h1><p>ex: <strong>/1/plus/1</strong></p>');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status).send(`<h1>${err.message}</h1>`);
});

app.listen(port, () => console.log('listening on port', port));
