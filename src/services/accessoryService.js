const Accessory = require("./../models/Accessory");

exports.createAccessory = async (accessoryData) => {
  const newAccessory = await Accessory.create(accessoryData);
  return newAccessory;
};
