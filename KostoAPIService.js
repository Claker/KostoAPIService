const express = require('express')();
const parser = require('./parser');

const spaceRegex = / /g;
const port = process.env.PORT || 3000;
const numbeoCityLink = 'https://www.numbeo.com/cost-of-living/in/';
const expatistanCityLink = 'https://www.expatistan.com/cost-of-living/';

express.get('/getAverageCostOfMilk/:city',(req,res)=>
{
    let city = req.params.city;
    city = city.replace(spaceRegex,'');

    parser.getExpatistanMilkPrice(expatistanCityLink+city)
    .then( function(milkPriceExpatistan)
    {
        parser.getNumbeoMilkPrice(numbeoCityLink+city)
        .then(function(milkPriceNumbeo)
        {
            if(milkPriceNumbeo==='')
            {
                parser.retryGetNumbeoMilkPrice(city)
                .then(function(milkPriceNumbeo2)
                {
                    parser.sendPriceResponse(milkPriceExpatistan, milkPriceNumbeo2, res);
                });
            }
            else
            {
                parser.sendPriceResponse(milkPriceExpatistan, milkPriceNumbeo, res);
            }
        });
    });
});

express.listen(port, ()=>{console.log(`Server is up on port ${port};`);});