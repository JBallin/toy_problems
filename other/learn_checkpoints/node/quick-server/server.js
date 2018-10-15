const express = require('express');
const logger = require('morgan');

const app = express();

app.disable('x-powered-by');
app.use(logger('dev'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`)); // eslint-disable-line no-console
