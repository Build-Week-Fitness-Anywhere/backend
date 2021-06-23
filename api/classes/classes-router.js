const express = require('express');
const Classes = require('./classes-model');
const { restricted } = require('../auth/auth-middlewar');
const { checkRole } = require('../middleware/middleware');

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

// router.post(
//   '/',
//   restricted,
//   checkRole('instructor'),
//   async (req, res, next) => {
//     try {
//       const user_id = req.decodedJwt.subject;
//       const {
//         name,
//         type,
//         start_time,
//         duration,
//         level,
//         location,
//         attendees,
//         max_size,
//       } = req.body;
//       const course = {
//         name: name,
//         type: type,
//         start_time: start_time,
//         duration: duration,
//         level: level,
//         location: location,
//         attendees: attendees,
//         max_size: max_size,
//         user_id: user_id,
//       };
//       const added = await Classes.addCourse(course);
//       res.status(201).json(added);
//     } catch (err) {
//       next(err);
//     }
//   }
// );

router.delete(
  '/:class_id',
  restricted,
  checkRole('instructor'),
  async (req, res, next) => {
    try {
      const user_id = req.decodedJwt.subject;
      const { class_id } = req.params;
      let course = await Classes.getClassById(class_id);
      if (course && user_id === course.instructor.id) {
        course = await Classes.deleteById(class_id);
        res.status(200).json(course);
      } else if (!course) {
        res.status(404).json(`class with id ${class_id} doesn't exist`);
      }
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
