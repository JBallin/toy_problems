const express = require('express');
const app = express();

const birds = require('./routes/birds');

app.use(express.static('/public'))
app.use('/birds', birds);

if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log('listening on port', port))
}

module.exports = app;
