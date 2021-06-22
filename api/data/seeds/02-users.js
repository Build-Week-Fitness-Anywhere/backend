const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  return knex('users').then(function () {
    return knex('users').insert([
      {
        username: 'Foo',
        password: bcrypt.hashSync('1234', 8),
        role: 'instructor',
      },
      {
        username: 'Bar',
        password: bcrypt.hashSync('1234', 8),
        role: 'client',
      },
    ]);
  });
};
