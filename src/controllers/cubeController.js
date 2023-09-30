const router = require("express").Router();
const {
  createCube,
  getAllCubes,
  getSingleCube,
} = require("../services/cubeService.js");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const newCube = createCube({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});

router.get("/details/:id", (req, res) => {
  const cube = getSingleCube(req.params.id);
  if (!cube) {
    res.redirect("/404");
    return;
  }
  res.render("details", { cube });
});

module.exports = router;
