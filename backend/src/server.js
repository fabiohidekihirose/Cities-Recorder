const express = require("express");
const cors = require("cors");

const favCitiesController = require("./favorite-cities/favorite-cities.controller");
const commentsController = require("./comments/comments.controller");
const wannaVisitController = require("./wanna-visit/wanna-visit.controller");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/favCities", favCitiesController.index);
app.post("/favCities", favCitiesController.save);

app.get("/wannaVisit", wannaVisitController.index);
app.post("/wannaVisit", wannaVisitController.save);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
