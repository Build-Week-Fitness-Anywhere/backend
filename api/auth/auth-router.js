const router = require('express').Router();
const bcrypt = require('bcryptjs');
const tokenBuilder = require('./token-builder');
const User = require('../users/users-model');
const {
  checkIfString,
  checkRegistration,
  validateRoleName,
} = require('./auth-middlewar');

router.post(
  '/register',
  checkIfString,
  checkRegistration,
  validateRoleName,
  (req, res, next) => {
    let user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;
    User.add(user)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch(next);
  }
);

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  User.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenBuilder(user);
        res.status(200).json({
          message: `Welcome, ${user.username}`,
          token: token,
          role: user.role,
        });
      } else {
        res.status(401).json({ message: 'invalid credentials' });
      }
    })
    .catch(next);
});

module.exports = router;
