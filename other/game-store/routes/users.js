const express = require('express');
const router = express.Router();
const knex = require('../knex');

/* GET users listing. */
router.get('/:userid/something', function(req, res, next) {
  console.log('userid', req.params.userid);
  console.log('query?', req.query);
  res.type('application/json').send('hello world!');
});

// A ROUTE THAT GETS ME ALL USERS
router.get('/', (req, res, next) => {
  knex('users')
  .then((data) => {
    res.send(data);
  })
})

// A ROUTE THAT GETS ME SPECIFIC USER
router.get('/:userid', (req, res, next) => {
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    res.send()
  })
})




router.get('/', function(req, res, next) {
  res.send('feed me users!')
})

router.post('/', function(req, res, next) {
  res.send('posted!')
})

module.exports = router;
