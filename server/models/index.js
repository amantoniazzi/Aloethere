const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/plants_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', err => console.log(err)); //eslint-disable-line

module.exports = mongoose;