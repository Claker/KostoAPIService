let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constants = require('../constants').Models;

let InjectMongoose = (mongooseOther) => { mongoose = mongooseOther };

// define schema
const ItemTypeSchema = new Schema({
    name : { type : String, required : [ true, 'Item Type name is required.' ] }
});

ItemTypeSchema.virtual(constants.Item.ItemVirtualsName , {
    ref: constants.Item.ItemModelName,
    localField: '_id', // Find items where `localField`
    foreignField: 'itemType', // is equal to `foreignField`
});

// create model
let ItemType = mongoose.model(constants.ItemType.ItemTypeModelName, ItemTypeSchema);

// export
module.exports = {ItemType, InjectMongoose};