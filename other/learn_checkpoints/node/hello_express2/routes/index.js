const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { header: 'Best Site Ever', text: 'Welcome!' });
});

module.exports = router;
