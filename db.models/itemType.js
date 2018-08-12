const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const ItemTypeSchema = new Schema({
    name : { type : String, required : [ true, 'Item Type name is required.' ] }
});

// create model
let ItemType = mongoose.model('ItemType',ItemTypeSchema);

// export
module.exports = {ItemType};