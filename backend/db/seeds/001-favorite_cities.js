/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("favorite_cities").del();
  await knex("favorite_cities").insert([
    {
      id: -1,
      city_name: "Tokyo",
      country_name: "Japan",
      lat: 35.652832,
      lng: 139.839478,
    },
    {
      id: -2,
      city_name: "Bangkok",
      country_name: "Thailand",
      lat: 13.736717,
      lng: 100.523186,
    },
    {
      id: -3,
      city_name: "Kuala Lumpur",
      country_name: "Malaysia",
      lat: 3.140853,
      lng: 101.693207,
    },
  ]);
};
