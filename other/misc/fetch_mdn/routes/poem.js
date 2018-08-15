const express = require('express');
const router = express();
const path = require('path');

const poemHTML = path.join(__dirname, '..', 'public/ajax-start.html');

router.get('/poem', (req, res, next) => {
  res.sendFile(poemHTML);
})

module.exports = router;
