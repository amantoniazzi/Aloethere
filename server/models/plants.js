const mongoose = require ('./index');
const Schema = mongoose.Schema;

const PlantSchema = new Schema ({
  scientific_name: {type: String},
  common_name: { type: String, required: true},
  type: {type: String, required: true},
  light: {type: String, required: true },
  water: {type: String, required: true},
  humidity: {type: String, required: true},
  air_purifying: {type: Boolean, required: false},
})

module.exports= mongoose.model('Plants', PlantSchema);