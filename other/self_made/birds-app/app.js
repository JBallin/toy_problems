const express = require('express');
const app = express();

// define routes
const birds = require('./routes/birds');
const add = require('./routes/add');
const about = require('./routes/about');
const edit = require('./routes/edit');
const remove = require('./routes/remove');

// use routes
app.use(express.static('public'))
app.use('/birds', birds);
app.use('/add', add);
app.use('/about', about);
app.use('/edit', edit);
app.use('/remove', remove)

// start server if not test
if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log('listening on port', port))
}


module.exports = app;
