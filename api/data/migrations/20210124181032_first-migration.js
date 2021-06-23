exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('username', 200).notNullable().unique();
      users.string('password', 200).notNullable();
      users.string('role', 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable('classes', (tbl) => {
      tbl.increments('class_id');
      tbl.string('name', 200).notNullable();
      tbl.string('type', 320).notNullable();
      tbl.string('start_time').notNullable();
      tbl.string('duration').notNullable();
      tbl.string('level').notNullable();
      tbl.string('location').notNullable();
      tbl.string('attendees').notNullable();
      tbl.string('max_size').notNullable();
      tbl
        .integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('class_requests', (tbl) => {
      tbl.increments('class_request_id');
      tbl
        .integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('class_id')
        .unsigned()
        .references('class_id')
        .inTable('classes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.boolean('accepted').notNullable().defaultTo(false);
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('class_requests');
  await knex.schema.dropTableIfExists('classes');
  await knex.schema.dropTableIfExists('users');
};
