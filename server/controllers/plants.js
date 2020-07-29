const Plants = require ('../models/plants');

exports.getPlants = async (req, res) => {
  try {
    const plants =  await Plants.find();
    res.status(200);
    res.json(plants);

  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
};

exports.postPlant = async (req, res) => {
  try {
    const plant =  await Plants.create({
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