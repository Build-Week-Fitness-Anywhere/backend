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

router.get('/:class_id', async (req, res, next) => {
  try {
    const { class_id } = req.params;
    const course = await Classes.getClassById(class_id);
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
