const expect = require('expect');
const mongoose = require('../repository/mongoose');

const itemTypeRepo = require('../repository/itemType.repo');
const {ItemType} = require('../db.models/itemType');

describe('Test ItemType CRUD', () => {

    let idToTest1 = '53cb6b9b4f4ddef1ad47f949';
    let idToTest2 = '53cb6b9b4f4ddef1ad47f950';
    let idToTest3 = '53cb6b9b4f4ddef1ad47f951';
    let idToTest4 = '53cb6b9b4f4ddef1ad47f952';

    let itemType1 = new ItemType({_id:idToTest1, name:'ItemTypeTest1'});
    let itemType2 = new ItemType({_id:idToTest2, name:'ItemTypeTest1'});
    let itemType3 = new ItemType({_id:idToTest3, name:'ItemTypeTest1'});
    let itemType4 = new ItemType({_id:idToTest4, name:'ItemTypeTest2'});

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
                    
                    // Item Type 4
                    itemTypeRepo.insertItemType(itemType4)
                    .then((result)=>{
                            
                        expect(result._id.toString()).toBe(idToTest4);
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

        },(err)=>{
            return done(err);
        });
    });

    it('should get first item type',(done)=>{
        itemTypeRepo.getFirstItemType(new ItemType({_id:idToTest1}))
        .then((result)=>{
            expect(result.name).toBe('ItemTypeTest1');
            expect(result._id.toString()).toBe(idToTest1);
            done();
        },(err)=>{
            return done(err);
        });
    });

    it('should get all item types',(done)=>{
        itemTypeRepo.getItemTypes({name:'ItemTypeTest1'})
        .then((results)=>{
            expect(results.length).toBe(3);
            expect(results[0]._id.toString()).toBe(idToTest1);
            expect(results[1]._id.toString()).toBe(idToTest2);
            expect(results[2]._id.toString()).toBe(idToTest3);
            done();
        },(err)=>{
            return done(err);
        });
    });

    it('should delete first item type and check that 2 remained',(done)=>{
        itemTypeRepo.deleteFirstItemType({name:'ItemTypeTest1'})
        .then((result)=>{
            expect(result._id.toString()).toBe(idToTest1);
            
            itemTypeRepo.getItemTypes({name:'ItemTypeTest1'})
            .then((results)=>{
                expect(results.length).toBe(2);
                expect(results[0]._id.toString()).toBe(idToTest2);
                expect(results[1]._id.toString()).toBe(idToTest3);
                done();
            },(err)=>{
                return done(err);
            });
        },(err)=>{
            return done(err);
        });
    });

    it('should update first item type and check it was updated',(done)=>{

        itemTypeRepo.updateFirstItemType({name:'ItemTypeTest2'},{name:'ItemTypeTest1'})
        .then((results)=>{

            itemTypeRepo.getItemTypes({name:'ItemTypeTest1'})
            .then((results)=>{
                expect(results.length).toBe(3);
                expect(results[0]._id.toString()).toBe(idToTest2);
                expect(results[1]._id.toString()).toBe(idToTest3);
                expect(results[2]._id.toString()).toBe(idToTest4);
                done();
            },(err)=>{
                return done(err);
            });

        },(err)=>{
            return done(err);
        });
    });

    it('should update all item types and check they were updated',(done)=>{

        itemTypeRepo.updateItemTypes({name:'ItemTypeTest1'},{name:'ItemTypeTest'})
        .then((results)=>{

            itemTypeRepo.getItemTypes({name:'ItemTypeTest'})
            .then((results)=>{
                expect(results.length).toBe(3);
                expect(results[0]._id.toString()).toBe(idToTest2);
                expect(results[1]._id.toString()).toBe(idToTest3);
                expect(results[2]._id.toString()).toBe(idToTest4);
                done();
            },(err)=>{
                return done(err);
            });
        },(err)=>{
            return done(err);
        });
    });

    it('should delete all item types and check that none remained',(done)=>{
        itemTypeRepo.deleteItemTypes({name:'ItemTypeTest'})
        .then((results)=>{
            
            itemTypeRepo.getItemTypes({name:'ItemTypeTest'})
            .then((results)=>{
                expect(results.length).toBe(0);
                done();
            },(err)=>{
                return done(err);
            });
        },(err)=>{
            return done(err);
        });
    });
});