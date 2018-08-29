let mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const SchemaTypes = mongoose.Schema.Types;
const Schema = mongoose.Schema;
const {Item} = require('./item');
const {City} = require('./city');
const {Currency} = require('./currency');

let InjectMongoose = (mongooseOther) => { mongoose = mongooseOther };

// define schema
const CostSchema = new Schema({
        cost: { type : SchemaTypes.Double, 
            required : [ true, 'Cost is required.'] },
        item: { type : mongoose.Schema.Types.ObjectId, ref: Item.modelName , 
                required : [ true, 'Item is required.'] },
        city: { type: mongoose.Schema.Types.ObjectId, ref: City.modelName, 
                     required : [true, 'City is required.'] },
        currency: { type: mongoose.Schema.Types.ObjectId, ref: Currency.modelName, 
                        required : [true, 'Currency is required.'] },
});

// create model
let Cost = mongoose.model('Cost', CostSchema);

// export
module.exports = {Cost, InjectMongoose};