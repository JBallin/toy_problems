const express = require('express');
const logger = require('morgan');

const app = express();

app.disable('x-powered-by');
app.use(logger('dev'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ data: [1, 2, 3] }));

app.use((req, res) => {
  res.status(404).send('Not Found');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(port, () => console.log(`listening on port ${port}`)); // eslint-disable-line no-console
