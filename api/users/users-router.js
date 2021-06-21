const router = require('express').Router();
const User = require('./users-model');

// router.get('/', (res, req, next) => {
//   User.find()
//     .then((users) => {
//       res.status(200).json(users);
//     })
//     .catch(next);
// });

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
