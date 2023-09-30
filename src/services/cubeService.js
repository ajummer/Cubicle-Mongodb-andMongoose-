const cubes = [
  {
    id: "5c39f1851ab3b24f5c03e182",
    name: "Gan356 Air SM",
    description: "Nice cube Bro",
    imageUrl:
      "https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg",
    difficultyLevel: 3,
  },
];

const Cube = require("./../models/Cube");

exports.createCube =  async (cubeData) => {
  const newCube = await Cube.create(cubeData);
  return newCube;
};

exports.getAllCubes = async (search, from, to) => {
  let filteredCubes =  await Cube.find().lean()

  if (search) {
    filteredCubes = filteredCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    filteredCubes = filteredCubes.filter(
      (cube) => cube.difficultyLevel >= Number(from)
    );
  }
  if (to) {
    filteredCubes = filteredCubes.filter(
      (cube) => cube.difficultyLevel <= Number(to)
    );
  }
  return filteredCubes;
};

exports.getSingleCube = (id) => {
  const cube = Cube.findById(id);
  return cube;
};
