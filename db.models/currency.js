const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const CurrencySchema = new Schema({
    name: { type : String, required : [ true, 'Currency Name is required.'] },
    shortName: { type : String, required : [ true, 'Currency Short Name is required.'] },
    sign: { type: String },
});

// create model
let Currency = mongoose.model('Currency', CurrencySchema);

// export
module.exports = {Currency};