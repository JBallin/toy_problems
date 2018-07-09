const express = require('express');
const router = express.Router();
const knex = require('../knex')

// GET name + description of specific bird
router.get('/about/:id', () => {
  knex('birds')
  .then()
})


module.exports = router;
