const knex = require("../knex");

const COMMENTS_TABLE = "comments";

module.exports = {
  COMMENTS_TABLE,

  getAll() {
    return knex
      .select({
        id: "id",
        city_name: "city_name",
        country_name: "country_name",
        comment: "comment",
      })
      .from(COMMENTS_TABLE);
  },
};
