const express = require('express');
const path = require('path');

const router = express.Router();

const signupPath = path.join(__dirname, '..', 'public', 'signup.html');

router.get('/', (req, res) => res.sendFile(signupPath));

router.post('/', express.json(), express.urlencoded(), (req, res) => {
  const { first_name: first, last_name: last } = req.body;
  res.render('index', { header: 'Sign Up Complete', text: `Thanks for joining ${`${first} ${last}`}!` });
});

module.exports = router;
