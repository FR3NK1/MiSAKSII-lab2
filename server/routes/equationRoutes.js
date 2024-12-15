const express = require("express");
const {
  getRoots,
  getDiscriminant,
} = require("../controllers/equationController");

const router = express.Router();

// Маршрут для получения корней уравнения
router.get("/get-roots", getRoots);

// Маршрут для получения дискриминанта
router.get("/get-discriminant", getDiscriminant);

module.exports = router;
