const expect = require('expect');
const mongoose = require('../repository/mongoose');

const {Currency} = require('../db.models/currency');
const currencyRepo = require('../repository/currency.repo');

describe('Test Currency CRUD', () => {

    let idToTest1 = '53cb6b9b4f4ddef1ad47f958';
    let idToTest2 = '53cb6b9b4f4ddef1ad47f959';
    let idToTest3 = '53cb6b9b4f4ddef1ad47f960';
    let idToTest4 = '53cb6b9b4f4ddef1ad47f961';

    let currency1 = new Currency({_id:idToTest1, name:'American Dollar', shortName:'USD', sign:'$'});
    let currency2 = new Currency({_id:idToTest2, name:'New Zealand Dollar', shortName:'NZD', sign:'NZ$'});
    let currency3 = new Currency({_id:idToTest3, name:'Euro', shortName:'EUR', sign:'€'});
    let currency4 = new Currency({_id:idToTest4, name:'Japanese Yen', shortName:'YEN', sign:'¥'});

    it('should insert currencies',(done)=>{

        // Currency 1
        currencyRepo.insertCurrency(currency1)
        .then((result)=>{

            expect(result._id.toString()).toBe(idToTest1);

            // Currency 2
            currencyRepo.insertCurrency(currency2)
            .then((result)=>{

                expect(result._id.toString()).toBe(idToTest2);

                // Currency 3
                currencyRepo.insertCurrency(currency3)
                .then((result)=>{
                    
                    expect(result._id.toString()).toBe(idToTest3);
                    
                    // Currency 4
                    currencyRepo.insertCurrency(currency4)
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

    it('should get first currency',(done)=>{
        currencyRepo.getFirstCurrency({_id:idToTest1})
        .then((result)=>{
            expect(result.name).toBe('American Dollar');
            expect(result._id.toString()).toBe(idToTest1);
            done();
        },(err)=>{
            done(err);
        });
    });

    it('should get currencies',(done)=>{
        currencyRepo.getCurrencies({$or:[{shortName:'USD'},{shortName:'NZD'}]})
        .then((results)=>{
            expect(results.length).toBe(2);
            expect(results[0]._id.toString()).toBe(idToTest1);
            expect(results[1]._id.toString()).toBe(idToTest2);
            done();
        },(err)=>{
            done(err);
        });
    });

    it('should delete first currency and check that 3 remained',(done)=>{
        currencyRepo.deleteFirstCurrency({shortName:'NZD'})
        .then((result)=>{
            expect(result._id.toString()).toBe(idToTest2);
            
            currencyRepo.getCurrencies({shortName:'NZD'})
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

    it('should update first currency and check it was updated',(done)=>{

        currencyRepo.updateFirstCurrency({shortName:'USD'},{shortName:'NZD'})
        .then((results)=>{

            currencyRepo.getCurrencies({shortName:'NZD'})
            .then((results)=>{
                expect(results.length).toBe(1);
                expect(results[0]._id.toString()).toBe(idToTest1);
                done();
            },(err)=>{
                return done(err);
            });
        },(err)=>{
            return done(err);
        });
    });

    it('should update all currencies and check they were updated',(done)=>{

        currencyRepo.updateAllCurrencies({shortName:'NZD'})
        .then((results)=>{

            currencyRepo.getCurrencies({shortName:'NZD'})
            .then((results)=>{
                expect(results.length).toBe(3);
                expect(results[0]._id.toString()).toBe(idToTest1);
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

    it('should delete all currencies and check that none remained',(done)=>{
        currencyRepo.deleteCurrencies({shortName:'NZD'})
        .then((results)=>{
            
            currencyRepo.getAllCurrencies()
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