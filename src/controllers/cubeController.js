const router = require("express").Router();
const {
  createCube,
  getAllCubes,
  getSingleCube,
} = require("../services/cubeService.js");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const newCube = await createCube({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});

router.get("/details/:id", async (req, res) => {
  const cube = await getSingleCube(req.params.id).lean();
  if (!cube) {
    res.redirect("/404");
    return;
  }
  res.render("details", { cube });
});

router.get("/details/:id/attach-accessory", (req, res) => {
  res.render("accessories/attach")
});

module.exports = router;
