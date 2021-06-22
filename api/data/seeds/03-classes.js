exports.seed = function (knex) {
  return knex('classes').then(function () {
    return knex('classes').insert([
      {
        name: 'Pump up the Jam',
        type: 'cardio',
        start_time: '8:00am',
        duration: '50 mins',
        level: 'beginner',
        location: 'East Gym',
        attendees: '12',
        max_size: '20',
        user_id: 1,
      },
      {
        name: 'Get Swoll',
        type: 'strength training',
        start_time: '1:00pm',
        duration: '50 mins',
        level: 'intermediate',
        location: 'East Gym',
        attendees: '8',
        max_size: '10',
        user_id: 1,
      },
    ]);
  });
};
