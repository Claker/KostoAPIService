const expect = require('expect');
const request = require('supertest');

const itemTypeRepo = require('../repository/itemType.repo.js');

describe('Insert item type', ()=>{
    it('should insert item type',(done)=>{
        itemTypeRepo.insertItemType({_id:123, name:'ItemTypeTest'}).then((result)=>{
            expect(result._id).toBe(123);
        },(err)=>{});
    });
});