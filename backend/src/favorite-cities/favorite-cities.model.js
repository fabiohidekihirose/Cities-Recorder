const knex = require("../knex");

const FAVORITE_CITIES_TABLE = "favorite_cities";

module.exports = {
  FAVORITE_CITIES_TABLE,

  getAll() {
    return knex
      .select({
        id: "id",
        city_name: "city_name",
        country_name: "country_name",
        lat: "lat",
        lng: "lng",
      })
      .from(FAVORITE_CITIES_TABLE);
  },

  create(city) {
    return knex(FAVORITE_CITIES_TABLE).insert(city);
  },

  delete(city) {
    return;
  },
};
