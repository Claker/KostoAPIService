const expect = require('expect');
const mongoose = require('../repository/mongoose');

const itemTypeRepo = require('../repository/itemType.repo');
const {ItemType} = require('../db.models/itemType');

const itemRepo = require('../repository/item.repo');
const {Item} = require('../db.models/item');

describe('Test Item CRUD', () => {

    let idToTest1 = '53cb6b9b4f4ddef1ad47f953';
    let idToTest2 = '53cb6b9b4f4ddef1ad47f954';
    let idToTest3 = '53cb6b9b4f4ddef1ad47f955';
    let idToTest4 = '53cb6b9b4f4ddef1ad47f956';
    let idToTest5 = '53cb6b9b4f4ddef1ad47f957';

    let itemType1 = new ItemType({_id:idToTest1, name:'ItemTypeTest1'});
    let itemType2 = new ItemType({_id:idToTest2, name:'ItemTypeTest1'});
    let item1 = new Item({_id:idToTest3, name:'ItemTest1',itemType:idToTest1});
    let item2 = new Item({_id:idToTest4, name:'ItemTest1',itemType:idToTest1});
    let item3 = new Item({_id:idToTest5, name:'ItemTest3',itemType:idToTest2});

    it('should insert items',(done)=>{

        // Item Type 1
        itemTypeRepo.insertItemType(itemType1)
        .then((result)=>{

            expect(result._id.toString()).toBe(idToTest1);

            // Item Type 2
            itemTypeRepo.insertItemType(itemType2)
            .then((result)=>{

                expect(result._id.toString()).toBe(idToTest2);

                // Item 1
                itemRepo.insertItem(item1)
                .then((result)=>{
                    
                    expect(result._id.toString()).toBe(idToTest3);
                    
                    // Item 2
                    itemRepo.insertItem(item2)
                    .then((result)=>{
                            
                        expect(result._id.toString()).toBe(idToTest4);
                        
                        // Item 3
                        itemRepo.insertItem(item3)
                        .then((result)=>{
                            
                            expect(result._id.toString()).toBe(idToTest5);

                            done();

                        },(err)=>{});

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
    
    it('should get second item',(done)=>{
        itemRepo.getFirstItem({_id:idToTest3})
            .then((item) => {        

                expect(item._id.toString()).toBe(idToTest3);

                done();
            },(err)=>{
                return done(err);
            });
    });

    it('should get first item type with list of items',(done)=>{
        itemRepo.getItemsByItemType({_id:idToTest1})
            .then((itemType) => {        

                expect(itemType.items.length).toBe(2);
                expect(itemType.items[0]._id.toString()).toBe(idToTest3);
                expect(itemType.items[1]._id.toString()).toBe(idToTest4);       

                done();
            },(err)=>{
                return done(err);
            });
    });

    it('should delete second item',(done)=>{
        itemRepo.deleteFirstItem({_id:idToTest4})
            .then((item) => {        

                expect(item._id.toString()).toBe(idToTest4);

                done();
            },(err)=>{
                return done(err);
            });
    });

    it('should get items',(done)=>{
        itemRepo.getItems({name:'ItemTest1'})
            .then((items) => {        

                expect(items.length).toBe(1);
                expect(items[0]._id.toString()).toBe(idToTest3);

                done();
            },(err)=>{
                return done(err);
            });
    });

    it('should update first item',(done)=>{
        itemRepo.updateFirstItem({name:'ItemTest3'},{name:'ItemTest1'})
            .then((item) => {        

                itemRepo.getItems({name:'ItemTest1'}).then((items)=>{

                    expect(items.length).toBe(2);
                    expect(items[1]._id.toString()).toBe(idToTest5);

                    done();

                },(err)=>{
                    return done(err);
                });
            },(err)=>{
                return done(err);
            });
    });

    it('should update all items',(done)=>{
        itemRepo.updateItems({name:'ItemTest1'},{name:'ItemTest2'})
            .then((items) => {        

                itemRepo.getItems({name:'ItemTest2'}).then((items)=>{

                    expect(items.length).toBe(2);
                    expect(items[1]._id.toString()).toBe(idToTest5);

                    done();
                    
                },(err)=>{
                    return done(err);
                });
            },(err)=>{
                return done(err);
            });
    });

    it('should delete all items and itemTypes',(done)=>{
        itemRepo.deleteItems({name:'ItemTest2'})
            .then((items) => {        

                itemRepo.getAllItems().then((items)=>{

                    expect(items.length).toBe(0);

                    itemTypeRepo.deleteItemTypes({name:'ItemTypeTest1'})
                    .then((items)=>{

                        itemTypeRepo.getAllItemTypes()
                        .then((itemTypes)=>{
                            
                            expect(itemTypes.length).toBe(0);
                            
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
});