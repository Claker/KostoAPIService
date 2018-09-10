const expect = require('expect');
const mongoose = require('./mongooseTests');
const itemTypeRepo = require('../repository/itemType.repo');
const itemRepo = require('../repository/item.repo');

describe('Test Item CRUD', () => {

    let idToTest1 = '53cb6b9b4f4ddef1ad47f953';
    let idToTest2 = '53cb6b9b4f4ddef1ad47f954';
    let idToTest3 = '53cb6b9b4f4ddef1ad47f955';
    let idToTest4 = '53cb6b9b4f4ddef1ad47f956';
    let idToTest5 = '53cb6b9b4f4ddef1ad47f957';

    let itemType1 = {_id:idToTest1, name:'ItemTypeTest1'};
    let itemType2 = {_id:idToTest2, name:'ItemTypeTest1'};
    let item1 = {_id:idToTest3, name:'ItemTest1',itemType:idToTest1};
    let item2 = {_id:idToTest4, name:'ItemTest1',itemType:idToTest1};
    let item3 = {_id:idToTest5, name:'ItemTest3',itemType:idToTest2};

    // before(()=>
    // {
    //     itemRepo.InjectMongoose(mongoose);
    //     itemTypeRepo.InjectMongoose(mongoose);
    // });

    it('should insert items',(done)=>{
        (async () =>{

            let itemType1Res = await itemTypeRepo.insertItemType(itemType1);
            expect(itemType1Res._id.toString()).toBe(idToTest1);

            let itemType2Res = await itemTypeRepo.insertItemType(itemType2);
            expect(itemType2Res._id.toString()).toBe(idToTest2);

            let item1Res = await itemRepo.insertItem(item1);
            expect(item1Res._id.toString()).toBe(idToTest3);

            let item2Res = await itemRepo.insertItem(item2);
            expect(item2Res._id.toString()).toBe(idToTest4);

            let item3Res = await itemRepo.insertItem(item3);
            expect(item3Res._id.toString()).toBe(idToTest5);

        })().then((res)=>done(),(err)=>done(err));
    });
    
    it('should get second item',(done)=>{
        itemRepo.getFirstItem({_id:idToTest3})
            .then((item) => {        

                expect(item._id.toString()).toBe(idToTest3);
                done();

            },(err)=> done(err));
    });

    it('should get first item type with list of items',(done)=>{
        itemRepo.getItemsByItemType({_id:idToTest1})
            .then((itemType) => {        

                expect(itemType.items.length).toBe(2);
                expect(itemType.items[0]._id.toString()).toBe(idToTest3);
                expect(itemType.items[1]._id.toString()).toBe(idToTest4);       
                done();

            },(err)=>done(err));
    });

    it('should delete second item',(done)=>{
        itemRepo.deleteFirstItem({_id:idToTest4})
            .then((item) => {        

                expect(item._id.toString()).toBe(idToTest4);
                done();

            },(err)=> done(err) );
    });

    it('should get items',(done)=>{
        itemRepo.getItems({name:'ItemTest1'})
            .then((items) => {        

                expect(items.length).toBe(1);
                expect(items[0]._id.toString()).toBe(idToTest3);
                done();

            },(err)=> done(err) );
    });

    it('should update first item',(done)=>{
        (async ()=>{
            
            await itemRepo.updateFirstItem({name:'ItemTest3'},{name:'ItemTest1'});
            let itemsRes = await itemRepo.getItems({name:'ItemTest1'});

            expect(itemsRes.length).toBe(2);
            expect(itemsRes[1]._id.toString()).toBe(idToTest5);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should update all items',(done)=>{
        (async ()=>{

            await itemRepo.updateItems({name:'ItemTest1'},{name:'ItemTest2'});
            let itemsRes = await itemRepo.getItems({name:'ItemTest2'});
            expect(itemsRes.length).toBe(2);
            expect(itemsRes[1]._id.toString()).toBe(idToTest5);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should delete all items and itemTypes',(done)=>{
        (async ()=>{
            await itemRepo.deleteItems({name:'ItemTest2'});
            let itemsRes = await itemRepo.getAllItems();
            expect(itemsRes.length).toBe(0);
            
            await itemTypeRepo.deleteItemTypes({name:'ItemTypeTest1'});
            let itemTypesRes = await itemTypeRepo.getAllItemTypes();
            expect(itemTypesRes.length).toBe(0);

        })().then((res)=>done(),(err)=>done(err));
    });
});