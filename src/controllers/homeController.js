const router = require("express").Router();
const { getAllCubes } = require("../services/cubeService.js");

router.get("/", (req, res) => {
  const { search, from, to } = req.query;
  const cubes = getAllCubes(search, from, to);
  res.render("home", { cubes, search, from, to });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
