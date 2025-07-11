exports.up = function (knex) {
  return knex.schema.createTable("submissions", function (table) {
    table.increments("id").primary();
    table.integer("age").notNullable();
    table.integer("income").notNullable();
    table.integer("dependents").notNullable();
    table.string("risk_tolerance").notNullable();
    table.string("recommendation").notNullable();
    table.string("explanation").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("submissions");
};
