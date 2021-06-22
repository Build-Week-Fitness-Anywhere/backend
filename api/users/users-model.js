const db = require('../data/db-config');

function find() {
  return db('users').select('user_id', 'username', 'role');
}

function findById(user_id) {
  return db('users')
    .select('user_id', 'username', 'password', 'role')
    .where('user_id', user_id)
    .first();
}

function findBy(filter) {
  return db('users')
    .select('user_id', 'username', 'password', 'role')
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
