const express = require('express');
const router = express.Router();
const knex = require('../knex')
const path = require('path');
const bodyParser = require('body-parser')

// GET form to add new bird
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/add.html'))
});

// POST new bird to db from form
router.post('/', bodyParser.urlencoded({extended: true}), (req, res) => {
  knex('birds')
  .insert({
    type: req.body.type,
    description: req.body.description
  })
  .returning(['id', 'type', 'description'])
  .then((data) => {
    console.log(data);
    res.redirect('/');
  })
})


module.exports = router;
