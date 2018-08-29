const expect = require('expect');
const mongoose = require('./mongooseTests');

const itemTypeRepo = require('../repository/itemType.repo');
const itemType = require('../db.models/itemType');
const ItemType = itemType.ItemType;

describe('Test ItemType CRUD', () => {

    let idToTest1 = '53cb6b9b4f4ddef1ad47f949';
    let idToTest2 = '53cb6b9b4f4ddef1ad47f950';
    let idToTest3 = '53cb6b9b4f4ddef1ad47f951';
    let idToTest4 = '53cb6b9b4f4ddef1ad47f952';

    let itemType1 = new ItemType({_id:idToTest1, name:'ItemTypeTest1'});
    let itemType2 = new ItemType({_id:idToTest2, name:'ItemTypeTest1'});
    let itemType3 = new ItemType({_id:idToTest3, name:'ItemTypeTest1'});
    let itemType4 = new ItemType({_id:idToTest4, name:'ItemTypeTest2'});

    before(()=>
    {
        itemType.InjectMongoose(mongoose);
    });

    it('should insert item types',(done)=>{
        (async ()=>{

            let itemTypeRes1 = await itemTypeRepo.insertItemType(itemType1);
            expect(itemTypeRes1._id.toString()).toBe(idToTest1);

            let itemTypeRes2 = await itemTypeRepo.insertItemType(itemType2);
            expect(itemTypeRes2._id.toString()).toBe(idToTest2);

            let itemType3Res = await itemTypeRepo.insertItemType(itemType3);
            expect(itemType3Res._id.toString()).toBe(idToTest3);

            let itemType4Res = await itemTypeRepo.insertItemType(itemType4);
            expect(itemType4Res._id.toString()).toBe(idToTest4);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should get first item type',(done)=>{
        itemTypeRepo.getFirstItemType(new ItemType({_id:idToTest1}))
        .then((result)=>{
            expect(result.name).toBe('ItemTypeTest1');
            expect(result._id.toString()).toBe(idToTest1);
            done();
        },(err)=> done(err) );
    });

    it('should get all item types',(done)=>{
        itemTypeRepo.getItemTypes({name:'ItemTypeTest1'})
        .then((results)=>{
            expect(results.length).toBe(3);
            expect(results[0]._id.toString()).toBe(idToTest1);
            expect(results[1]._id.toString()).toBe(idToTest2);
            expect(results[2]._id.toString()).toBe(idToTest3);
            done();
        },(err)=> done(err) );
    });

    it('should delete first item type and check that 2 remained',(done)=>{
        (async ()=>{

            let itemTypeRes = await itemTypeRepo.deleteFirstItemType({name:'ItemTypeTest1'});
            expect(itemTypeRes._id.toString()).toBe(idToTest1);

            let itemTypes = await itemTypeRepo.getItemTypes({name:'ItemTypeTest1'});
            expect(itemTypes.length).toBe(2);
            expect(itemTypes[0]._id.toString()).toBe(idToTest2);
            expect(itemTypes[1]._id.toString()).toBe(idToTest3);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should update first item type and check it was updated',(done)=>{
        (async ()=>{
        
            await itemTypeRepo.updateFirstItemType({name:'ItemTypeTest2'},{name:'ItemTypeTest1'});
            let itemTypes = await itemTypeRepo.getItemTypes({name:'ItemTypeTest1'});

            expect(itemTypes.length).toBe(3);
            expect(itemTypes[0]._id.toString()).toBe(idToTest2);
            expect(itemTypes[1]._id.toString()).toBe(idToTest3);
            expect(itemTypes[2]._id.toString()).toBe(idToTest4);
        
        })().then((res)=>done(),(err)=>done(err));
    });

    it('should update all item types and check they were updated',(done)=>{
        (async ()=>{
            await itemTypeRepo.updateItemTypes({name:'ItemTypeTest1'},{name:'ItemTypeTest'});
            let itemTypes = await itemTypeRepo.getItemTypes({name:'ItemTypeTest'});

            expect(itemTypes.length).toBe(3);
            expect(itemTypes[0]._id.toString()).toBe(idToTest2);
            expect(itemTypes[1]._id.toString()).toBe(idToTest3);
            expect(itemTypes[2]._id.toString()).toBe(idToTest4);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should delete all item types and check that none remained',(done)=>{
        (async ()=>{
            
            await itemTypeRepo.deleteItemTypes({name:'ItemTypeTest'});
            let itemTypes = await itemTypeRepo.getItemTypes({name:'ItemTypeTest'});
            expect(itemTypes.length).toBe(0);

        })().then((res)=>done(),(err)=>done(err));
    });
});