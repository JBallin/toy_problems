/* eslint-disable no-console */

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');
const helloRouter = require('./routes/hello');

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/hello', helloRouter);

app.listen(port, () => console.log('listening on port', port));
