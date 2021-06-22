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
      name: classes.class_name,
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

module.exports = {
  getClasses,
};
