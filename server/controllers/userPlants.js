const { getAllUserPlants, 
  createUserPlant, 
  getUserPlantById, 
  updateUserPlant, 
  deleteUserPlantById, } = require ('../models/userPlants');

exports.getUserPlants = async (req, res) => {
  try {
    const plants =  await getAllUserPlants()
    res.status(200).json(plants);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
};

exports.postUserPlant = async (req, res) => {
  try {
    const plant =  await createUserPlant(req);
    res.status(201);
    res.json(plant);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

exports.getUserPlant = async (req, res) => {
  try {
    const plant = await getUserPlantById({ _id: req.params.id })
    .populate("plant_info")
    res.status(200);
    res.json(plant);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

exports.deleteUserPlant = async (req, res) => {
  try {
    await deleteUserPlantById({_id: req.params.id});
    res.sendStatus(204);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

function buildUserPlantUpdateParams(nickname, boughtDate) {
  return {
    ...(nickname && { nickname }),
    ...(boughtDate && { boughtDate })
  }
}

exports.editUserPlant = async (req, res) => {
  const updateParams = buildUserPlantUpdateParams(req.body.nickname, req.body.bought)

  try {
    const plant = await updateUserPlant(req.params.id, updateParams)
    res.status(200);
    res.json(plant);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}
