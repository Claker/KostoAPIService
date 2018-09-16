const mongoose = require('../../repository/mongoose');
const {KostoItemsTemplate,KostoItemTypesTemplate} = require('./kostoTemplate');
const itemTypeRepo = require('../../repository/itemType.repo');
const itemRepo = require('../../repository/item.repo');

(async () =>
{
    let itemTypes = Object.values(KostoItemTypesTemplate);
    for (let itemType of itemTypes)
    {
        itemTypeRepo.insertItemType(itemType);
    }

    let items = Object.values(KostoItemsTemplate);
    for (let item of items)
    {
        itemRepo.insertItem(item);
    }

})().then((res)=> { console.log('Finished inserting template data'); } ,
        (err)=> console.log(`Error encountered: ${err}`));