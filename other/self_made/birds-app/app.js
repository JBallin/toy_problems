const express = require('express');
const app = express();

// define routes
const birds = require('./routes/birds');
const new = require('./routes/new');
const about = require('./routes/about');
const edit = require('./routes/edit');

// use routes
app.use(express.static('/public'))
app.use('/', birds);
app.use('/new', newBird);
app.use('/about', about);
app.use('/edit', edit);

// start server if not test
if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log('listening on port', port))
}


module.exports = app;
