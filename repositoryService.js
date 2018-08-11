const {mongoose} = require('./repository/mongoose');

const {Item} = require('./models/item');
const {ItemType} = require('./models/itemType');

const ItemModel = require('./repository/item.repo');
const ItemTypeModel = require('./repository/itemType.repo');

ItemModel.deleteFirstItem({name:'Pilk'}).then((doc)=>{
    console.log('a mers');
    mongoose.connection.close();
},(err)=>{console.log('N-a mers');});

// ItemTypeModel.insertItemType(new ItemType({name:'Dairy'})).then((doc)=>
// {
//     console.log('Successfully saved itemType');

//     ItemTypeModel.getFirstItemType({name:'Dairy'}).then((doc)=>
//     {
//         console.log('Result getting itemType:', JSON.stringify(doc,undefined,2));

//         let y = ItemModel.insertItem(new Item({name:'Milk', itemType:doc._id, isDefaultItem: true}));

//         y.then((doc)=>{

//             if(!doc)
//                 return console.log('Not able to save item');
//             console.log('Item saved succesfully');

//             ItemModel.getFirstItem({name:'Milk'}).then((doc)=>{
            
//             if(!doc)
//                 return console.log('Not able to get item');

//             console.log('Item gotten succesfully',JSON.stringify(doc,undefined,2));


                
//             ItemModel.getFirstItem({name:'Milk'}).populate('itemType').exec((err,doc)=>{
//                 if(!err)
//                     console.log('Got item with itemType',JSON.stringify(doc,undefined,2));
//                 else
//                     console.log('Fail to retrieve item and populate itemType');

//                 mongoose.connection.close();

//             });

//             });

//         });

//     },(e)=>{});

// },(e)=>
// {
//     console.log('Unable to save data');
// });