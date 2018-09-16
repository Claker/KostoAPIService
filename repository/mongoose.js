const mongoose = require('mongoose');
const {MongoDB_URL} = require('../constants')

mongoose.Promise = global.Promise;
mongoose.connect(MongoDB_URL, { useNewUrlParser: true });

module.exports = {mongoose};