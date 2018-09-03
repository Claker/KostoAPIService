const expect = require('expect');
const mongoose = require('./mongooseTests');

const currencyRepo = require('../repository/currency.repo');
const currency = require('../db_models/currency');
const Currency = currency.Currency;

describe('Test Currency CRUD', () => {

    let idToTest1 = '53cb6b9b4f4ddef1ad47f958';
    let idToTest2 = '53cb6b9b4f4ddef1ad47f959';
    let idToTest3 = '53cb6b9b4f4ddef1ad47f960';
    let idToTest4 = '53cb6b9b4f4ddef1ad47f961';

    let currency1 = new Currency({_id:idToTest1, name:'American Dollar', shortName:'USD', sign:'$'});
    let currency2 = new Currency({_id:idToTest2, name:'New Zealand Dollar', shortName:'NZD', sign:'NZ$'});
    let currency3 = new Currency({_id:idToTest3, name:'Euro', shortName:'EUR', sign:'€'});
    let currency4 = new Currency({_id:idToTest4, name:'Japanese Yen', shortName:'YEN', sign:'¥'});

    before(()=>
    {
        currency.InjectMongoose(mongoose);
    });

    it('should insert currencies',(done)=>{
        (async ()=>{

            let currency1Res = await currencyRepo.insertCurrency(currency1);
            expect(currency1Res._id.toString()).toBe(idToTest1);

            let currency2Res = await currencyRepo.insertCurrency(currency2);
            expect(currency2Res._id.toString()).toBe(idToTest2);

            let currency3Res = await currencyRepo.insertCurrency(currency3);
            expect(currency3Res._id.toString()).toBe(idToTest3);
            
            let currency4Res = await currencyRepo.insertCurrency(currency4);
            expect(currency4Res._id.toString()).toBe(idToTest4);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should get first currency',(done)=>{
        currencyRepo.getFirstCurrency({_id:idToTest1})
        .then((result)=>{
            expect(result.name).toBe('American Dollar');
            expect(result._id.toString()).toBe(idToTest1);
            done();
        },(err)=> done(err) );
    });

    it('should get currencies',(done)=>{
        currencyRepo.getCurrencies({$or:[{shortName:'USD'},{shortName:'NZD'}]})
        .then((results)=>{
            expect(results.length).toBe(2);
            expect(results[0]._id.toString()).toBe(idToTest1);
            expect(results[1]._id.toString()).toBe(idToTest2);
            done();
        },(err)=> done(err) );
    });

    it('should delete first currency and check that 3 remained',(done)=>{
        (async ()=>{

            let deletedCurrency = await currencyRepo.deleteFirstCurrency({shortName:'NZD'});
            expect(deletedCurrency._id.toString()).toBe(idToTest2);

            let currencies = await currencyRepo.getCurrencies({shortName:'NZD'});
            expect(currencies.length).toBe(0);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should update first currency and check it was updated',(done)=>{
        (async ()=>{

            await currencyRepo.updateFirstCurrency({shortName:'USD'},{shortName:'NZD'});
            let currencies = await currencyRepo.getCurrencies({shortName:'NZD'});
            expect(currencies.length).toBe(1);
            expect(currencies[0]._id.toString()).toBe(idToTest1);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should update all currencies and check they were updated',(done)=>{
        (async ()=>{

            await currencyRepo.updateAllCurrencies({shortName:'NZD'});
            let currencies = await currencyRepo.getCurrencies({shortName:'NZD'});

            expect(currencies.length).toBe(3);
            expect(currencies[0]._id.toString()).toBe(idToTest1);
            expect(currencies[1]._id.toString()).toBe(idToTest3);
            expect(currencies[2]._id.toString()).toBe(idToTest4);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should delete all currencies and check that none remained',(done)=>{
        (async () => {
            await currencyRepo.deleteCurrencies({shortName:'NZD'});
            let currencies = await currencyRepo.getAllCurrencies();
            expect(currencies.length).toBe(0);

        })().then((res)=>done(),(err)=>done(err));
    });
});