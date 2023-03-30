const favCitiesModel = require("./favorite-cities.model.js");

module.exports = {
  async index(req, res) {
    const allFavCountries = await favCitiesModel.getAll();
    res.send(allFavCountries);
  },

  async save(req, res) {
    const { country_name, city_name, lat, lng } = req.body;

    const payload = {
      country_name,
      city_name,
      lat,
      lng,
    };

    await favCitiesModel.create(payload);
    res.send(payload);
  },
};
