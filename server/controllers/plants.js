const Plants = require('../models/plants');

exports.getPlants = async (req, res) => {
  try {
    const plants = await Plants.find();
    res.status(200);
    res.json(plants);

  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
};

exports.postPlant = async (req, res) => {
  try {
    const plant = await Plants.create({
      scientific_name: req.body.scientific_name,
      common_name: req.body.common_name,
      type: req.body.type,
      light: req.body.light,
      water: req.body.water,
      humidity: req.body.humidity,
      air_purifying: req.body.air_purifying,
    });

    res.status(201).json(plant);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

exports.searchPlants = async (req, res) => {
  try {
    let searchWord = req.query.q;
    console.log(searchWord)
    const plants = await Plants.findOne(
      { "common_name": new RegExp(searchWord, "i") }
    );
    res.status(200);
    res.json(plants);

  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
};

function buildUserPlantFilterParams(light, humidity, water, air_purifying, type) {
  return {
    ...(type && { 'type': new RegExp(type) }),
    ...(light && { 'light': new RegExp(light) }),
    ...(water && { 'water': new RegExp(water) }),
    ...(humidity && { 'humidity': new RegExp(humidity) }),
    ...(air_purifying && { 'air_purifying': new RegExp(air_purifying) }),
  }
}

exports.filterPlants = async (req, res) => {
  try {
    const filterParams = buildUserPlantFilterParams(req.body.light, req.body.humidity, req.body.water, req.body.air_purifying, req.body.type);
    console.log(filterParams)
    const plants = await Plants.findOne(filterParams);
    res.status(200);
    res.json(plants);

  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
};