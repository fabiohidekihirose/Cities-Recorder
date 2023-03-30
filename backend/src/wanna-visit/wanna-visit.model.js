const knex = require("../knex");

const WANNA_VISIT_TABLE = "wanna_visit";

module.exports = {
  WANNA_VISIT_TABLE,

  getAll() {
    return knex
      .select({
        id: "id",
        city_name: "city_name",
        country_name: "country_name",
        lat: "lat",
        lng: "lng",
      })
      .from(WANNA_VISIT_TABLE);
  },

  create(city) {
    return knex(WANNA_VISIT_TABLE).insert(city);
  },

  delete(city) {
    return;
  },
};
