exports.up = function(knex, Promise) {
  return knex.schema.createTable('birds', table => {
    table.increments()
    table.string('type').notNullable()
    table.text('description').notNullable();
    table.timestamps(true, true)
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable('birds');
