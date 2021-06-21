const router = require('express').Router();

router.get('/instructor', async (res, req, next) => {
  try {
    res.json('getting instructors');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
