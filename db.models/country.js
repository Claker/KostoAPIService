const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const CountrySchema = new Schema({
    name: { type : String, 
            required : [ true, 'Country Name is required.'] },
});

// create model
let Country = mongoose.model('Country', CountrySchema);

// export
module.exports = {Country};