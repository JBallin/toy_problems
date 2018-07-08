const express = require('express');
const app = express();

const birds = require('./routes/birds');

app.use(express.static(__dirname + '/public'))

app.use('/birds', birds);

app.listen(3000);

module.exports = app;
