const {mongoose} = require('./repository/mongoose');

const {Item} = require('./models/item');
const {ItemType} = require('./models/itemType');

const ItemModel = require('./repository/item.repo');
const ItemTypeModel = require('./repository/itemType.repo');


ItemTypeModel.insertItemType(new ItemType({name:'Dairy'})).then((doc)=>
{
    console.log('Successfully saved itemType');

    ItemTypeModel.getItemType({name:'Dairy'}).then((doc)=>
    {
        console.log('Result getting itemType:', JSON.stringify(doc,undefined,2));

        let y = ItemModel.insertItem(new Item({name:'Milk', itemType:doc._id, isDefaultItem: true}));

        y.then((doc)=>{

            if(!doc)
                return console.log('Not able to save item');
            console.log('Item saved succesfully');

            ItemModel.getItem({name:'Milk'}).then((doc)=>{
            
            if(!doc)
                return console.log('Not able to get item');

            console.log('Item gotten succesfully',JSON.stringify(doc,undefined,2));


                
            ItemModel.getItem({name:'Milk'}).populate('itemType').exec((err,doc)=>{
                if(!err)
                    console.log('Got item with itemType',JSON.stringify(doc,undefined,2));
                else
                    console.log('Fail to retrieve item and populate itemType');

                mongoose.connection.close();

            });

            });

        });

    },(e)=>{});

},(e)=>
{
    console.log('Unable to save data');
});



    // Item.findOne({name:'Milk'})
    //     .populate('itemType')
    //     .exec(function(err, post) {
    //     console.log(post);
    // });
    // mongoose.connection.close();