const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log('listening on port', port, 'baby!');
});

const poems = require(__dirname + '/routes/poem')

app.use(poems);
app.use(express.static(__dirname + '/public'));
