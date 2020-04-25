
exports.up = function(knex) {
    // the change we want to make to our schema
  return knex.schema.createTable('car', tbl => {
      tbl.increments()
      tbl.string('VIN').unique().notNullable()
      tbl.string('Make').notNullable()
      tbl.string('Model').notNullable()
      tbl.integer('Mileage').notNullable()
      tbl.string('Transmission')
      tbl.string('Title')
  });
};

exports.down = function(knex) {
    // undoing that change
    return knex.schema.dropTableIfExists('cars')
  
};
