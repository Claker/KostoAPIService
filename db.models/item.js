let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ItemTypeModelName} = require('./itemType');
const ItemModelName = 'Item'; // for bidirectional dependency because of declaring virtuals
const ItemVirtualsName = 'items';

let InjectMongoose = (mongooseOther) => { mongoose = mongooseOther };

// define schema
const ItemSchema = new Schema({
    name: { type : String, 
            required : [ true, 'Item Name is required.'] },
    itemType: { type : mongoose.Schema.Types.ObjectId, ref: ItemTypeModelName ,
                required : [ true, 'Item Type is required.'] },
    isDefaultItem: { type: Boolean, 
                     required : [true, 'Is Default Item is required.'],
                        default: false },
});

ItemSchema.virtual('costs', {
        ref: 'Cost',
        localField: '_id', // Find items where `localField`
        foreignField: 'item', // is equal to `foreignField`
});

// create model
let Item = mongoose.model(ItemModelName, ItemSchema);

// export
module.exports = {Item, ItemModelName, ItemVirtualsName, InjectMongoose};