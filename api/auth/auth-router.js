const router = require('express').Router();
const bcrypt = require('bcryptjs');
const tokenBuilder = require('./token-builder');
const User = require('../users/users-model');

router.post('/register', (req, res, next) => {
  let user = req.body;
  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(user.password, rounds);
  user.password = hash;
  User.add(user)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

module.exports = router;
