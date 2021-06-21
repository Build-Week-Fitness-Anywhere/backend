exports.seed = function (knex) {
  return knex('class_requests')
    .del()
    .then(function () {
      return knex('class_requests').insert([
        { class_id: 1, user_id: 2, accepted: true },
        { class_id: 2, user_id: 2, accepted: true },
      ]);
    });
};
