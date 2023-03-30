const wannaVisitModel = require("./wanna-visit.model.js");

module.exports = {
  async index(req, res) {
    const allWannaVisitCountries = await wannaVisitModel.getAll();
    res.send(allWannaVisitCountries);
  },

  async save(req, res) {
    const { country_name, city_name, lat, lng } = req.body;

    const payload = {
      country_name,
      city_name,
      lat,
      lng,
    };

    await wannaVisitModel.create(payload);
    res.send(payload);
  },
};
