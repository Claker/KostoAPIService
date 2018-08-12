const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ItemType} = require('./itemType');

// define schema
const ItemSchema = new Schema({
    name: { type : String, 
            required : [ true, 'Item Name is required.'] },
    itemType: { type : mongoose.Schema.Types.ObjectId, ref: ItemType.modelName , 
                required : [ true, 'Item Type is required.'] },
    isDefaultItem: { type: Boolean, 
                     required : [true, 'Is Default Item is required.'] },
});

// create model
let Item = mongoose.model('Item', ItemSchema);

// export
module.exports = {Item};