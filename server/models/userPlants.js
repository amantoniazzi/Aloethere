const mongoose = require ('./index');
const Schema = mongoose.Schema;

const UserPlantSchema = new Schema ({
  nickname: {type: String, required: true},
  common_name: { type: String, required: true},
  last_watered: {type: Date, required: true},
  bought: {type: Date, required: true },
  plant_info: {type: Schema.Types.ObjectId, ref: "Plants"},
})

const UserPlants = mongoose.model('UserPlants', UserPlantSchema);

async function getAllUserPlants() {
    return await UserPlants.find()
    .populate("plant_info");
}

async function createUserPlant(req) {
  return await UserPlants.create({
    nickname: req.body.nickname,
    common_name: req.body.common_name,
    last_watered: req.body.last_watered,
    bought: req.body.bought,
    plant_info: req.body.id
  })
}

async function getUserPlantById(id) {
  return await UserPlants.findOne({ _id: id })
  .populate("plant_info")
}

async function deleteUserPlantById(id) {
  return await UserPlants.findByIdAndDelete({_id: id});
}

async function updateUserPlant(userPlantId, updateParams) {
  return await UserPlants.findOneAndUpdate(
    {_id: userPlantId}, 
    updateParams,
    { new: true }
  );
}


module.exports = {
  UserPlants,
  getAllUserPlants,
  createUserPlant,
  getUserPlantById,
  deleteUserPlantById,
  updateUserPlant
}