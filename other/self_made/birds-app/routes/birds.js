const express = require('express');
const router = express.Router();
const knex = require('../knex')

// GET all birds
// TODO: Only show 3 birds at a time and fetch next 3 with ajax
router.get('/', (res, req) => {

})


module.exports = router;
