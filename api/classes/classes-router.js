const express = require('express');
const Classes = require('./classes-model');
const { restricted } = require('../auth/auth-middlewar');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const classes = await Classes.getClasses();
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
