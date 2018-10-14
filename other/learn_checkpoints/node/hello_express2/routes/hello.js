const express = require('express');

const router = express.Router();

router.get('/:name', (req, res) => {
  const { name } = req.params;
  const { msg1, msg2 } = req.query;
  res.send(`Hello ${name}! ${msg1 || ''} ${msg2 || ''}`);
});

module.exports = router;
