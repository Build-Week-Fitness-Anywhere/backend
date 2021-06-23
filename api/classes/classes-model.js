const db = require('../data/db-config');

async function getClasses() {
  const classList = await db('classes as c')
    .join('users as u', 'c.user_id', 'u.user_id')
    .select(
      'u.user_id',
      'u.username',
      'c.class_id',
      'c.name',
      'c.type',
      'c.start_time',
      'c.duration',
      'c.level',
      'c.location',
      'c.attendees',
      'c.max_size'
    );

  const result = classList.map((classes) => {
    return {
      instructor: { id: classes.user_id, username: classes.username },
      class_id: classes.class_id,
      name: classes.name,
      type: classes.type,
      start_time: classes.start_time,
      duration: classes.duration,
      level: classes.level,
      location: classes.location,
      attendees: classes.attendees,
      max_size: classes.max_size,
    };
  });
  return result;
}

async function getClassById(class_id) {
  const course = await db('classes as c')
    .join('users as u', 'c.user_id', 'u.user_id')
    .select(
      'u.user_id',
      'u.username',
      'c.class_id',
      'c.name',
      'c.type',
      'c.start_time',
      'c.duration',
      'c.level',
      'c.location',
      'c.attendees',
      'c.max_size'
    )
    .where('class_id', class_id)
    .first();

  return {
    instructor: { id: course.user_id, username: course.username },
    class_id: course.class_id,
    name: course.name,
    type: course.type,
    start_time: course.start_time,
    duration: course.duration,
    level: course.level,
    location: course.location,
    attendees: course.attendees,
    max_size: course.max_size,
  };
}

async function addCourse(course) {
  const [class_id] = await db('classes').insert(course, 'class_id');
  return getClassById(class_id);
}

async function deleteById(class_id) {
  const course = await getClassById(class_id);
  await db('classes').where('class_id', class_id).del();
  return course;
}

async function updateById(class_id, changes) {
  await db('classes').where('class_id', class_id).update(changes);
  return getClassById(class_id);
  // const result = getClassById(class_id);
  // return result;
}

module.exports = {
  getClasses,
  getClassById,
  deleteById,
  updateById,
  addCourse,
};
