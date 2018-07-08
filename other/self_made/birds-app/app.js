const express = require('express');
const app = express();

const birds = require('/routes/birds');

app.use('/birds', birds);
