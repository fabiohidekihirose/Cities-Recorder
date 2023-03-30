/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comments").del();
  await knex("comments").insert([
    {
      id: 1,
      city_name: "Tokyo",
      country_name: "Japan",
      comment: "Beautiful city",
    },
    {
      id: 2,
      city_name: "Bangkok",
      country_name: "Thailand",
      comment: "Crazy city with many places to explore",
    },
    {
      id: 3,
      city_name: "Dubrovnik",
      country_name: "Croatia",
      comment: "Amazing view from the walls",
    },
  ]);
};
