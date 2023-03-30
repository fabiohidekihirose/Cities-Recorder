const commentsModel = require("./comments.model");

module.exports = {
  async index(req, res) {
    const allComments = await commentsModel.getAll();
    res.send(allComments);
  },
};
