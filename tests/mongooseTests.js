const mongoose = require('mongoose');

const mongodbURL = 'mongodb://localhost:27017/KostoTests';

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURL, { useNewUrlParser: true });

module.exports = {mongoose};