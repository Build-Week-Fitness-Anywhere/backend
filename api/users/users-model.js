const db = require('../data/db-config');

function find() {
  return db('users').select('users.user_id', 'users.username', 'users.role');
}

function findById(id) {
  return db('users')
    .select('users.user_id', 'users.username', 'users.password', 'users.role')
    .where('users.user_id', id)
    .first();
}

function findBy(filter) {
  return db('users')
    .select('users.user_id', 'users.username', 'users.password', 'users.role')
    .where(filter);
}

async function add(user) {
  const [user_id] = await db('users').insert(user);
  return findById(user_id);
}

module.exports = {
  find,
  findBy,
  findById,
  add,
};
