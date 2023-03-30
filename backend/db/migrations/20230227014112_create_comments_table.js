/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("comments", function (table) {
    table.increments("id").primary();
    table.string("city_name", 32).notNullable();
    table.string("country_name", 32).notNullable();
    table.string("comment").notNullable();
    table.float("lat");
    table.float("lng");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("comments");
};
