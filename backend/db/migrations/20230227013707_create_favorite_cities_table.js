/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("favorite_cities", function (table) {
    table.increments("id").primary();
    table.string("city_name", 32).unique().notNullable();
    table.string("country_name", 32);
    table.float("lat");
    table.float("lng");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("favorite_cities");
};
