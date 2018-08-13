const expect = require('expect');
const mongoose = require('../repository/mongoose');

const itemTypeRepo = require('../repository/itemType.repo');
const {ItemType} = require('../db.models/itemType');

describe('Test ItemType CRUD', () => {

    let idToTest1 = '53cb6b9b4f4ddef1ad47f949';
    let idToTest2 = '53cb6b9b4f4ddef1ad47f950';
    let idToTest3 = '53cb6b9b4f4ddef1ad47f951';

    let itemType1 = new ItemType({_id:idToTest1, name:'ItemTypeTest'});
    let itemType2 = new ItemType({_id:idToTest2, name:'ItemTypeTest'});
    let itemType3 = new ItemType({_id:idToTest3, name:'ItemTypeTest'});

    it('should insert item types',(done)=>{

        // Item Type 1
        itemTypeRepo.insertItemType(itemType1)
        .then((result)=>{

            expect(result._id.toString()).toBe(idToTest1);

            // Item Type 2
            itemTypeRepo.insertItemType(itemType2)
            .then((result)=>{

                expect(result._id.toString()).toBe(idToTest2);

                // Item Type 3
                itemTypeRepo.insertItemType(itemType3)
                .then((result)=>{
                    expect(result._id.toString()).toBe(idToTest3);
                    done();
                },(err)=>{
                    return done(err);
                });

            },(err)=>{
                return done(err);
            });

        },(err)=>{
            return done(err);
        });
    });

    it('should get first item type',(done)=>{
        itemTypeRepo.getFirstItemType(new ItemType({_id:idToTest1}))
        .then((result)=>{
            expect(result.name).toBe('ItemTypeTest');
            expect(result._id.toString()).toBe(idToTest1);
            done();
        },(err)=>{
            done(err);
        });
    });

    it('should get all item types',(done)=>{
        itemTypeRepo.getAllItemTypes({name:'ItemTypeTest'})
        .then((results)=>{
            expect(results.length).toBe(3);
            expect(results[0]._id.toString()).toBe(idToTest1);
            expect(results[1]._id.toString()).toBe(idToTest2);
            expect(results[2]._id.toString()).toBe(idToTest3);
            done();
        },(err)=>{
            done(err);
        });
    });

    it('should delete first item type and check that 2 remained',(done)=>{
        itemTypeRepo.deleteFirstItemType({name:'ItemTypeTest'})
        .then((result)=>{
            expect(result._id.toString()).toBe(idToTest1);
            
            itemTypeRepo.getAllItemTypes({name:'ItemTypeTest'})
            .then((results)=>{
                expect(results.length).toBe(2);
                expect(results[0]._id.toString()).toBe(idToTest2);
                expect(results[1]._id.toString()).toBe(idToTest3);
                done();
            },(err)=>{
                done(err);
            });

        },(err)=>{
            return done(err);
        });
    });

    // TODO: Add tests for update single and update multiple

    it('should delete all item types and check that none remained',(done)=>{
        itemTypeRepo.deleteAllItemTypes({name:'ItemTypeTest'})
        .then((results)=>{
            
            itemTypeRepo.getAllItemTypes({name:'ItemTypeTest'})
            .then((results)=>{
                expect(results.length).toBe(0);
                done();
            },(err)=>{
                done(err);
            });

        },(err)=>{
            return done(err);
        });
    });
});