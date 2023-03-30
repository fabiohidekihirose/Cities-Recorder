/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("wanna_visit").del();
  await knex("wanna_visit").insert([
    {
      id: -1,
      city_name: "Seoul",
      country_name: "South Korea",
      lat: 37.5326,
      lng: 127.024612,
    },
    {
      id: -2,
      city_name: "Hanoi",
      country_name: "Vietnam",
      lat: 21.028511,
      lng: 105.804817,
    },
    {
      id: -3,
      city_name: "Cairo",
      country_name: "Egypt",
      lat: 30.033333,
      lng: 31.233334,
    },
  ]);
};
