const express = require('express')();
const xray = require('x-ray')();

const intAndFloatsRegex = /[+-]?\d+(\.\d+)?/g;
const port = process.env.PORT || 3000;

express.get('/getAverageCostOfMilk/:city',(req,res)=>{
    
    var city = req.params.city;
    
    xray(`https://www.expatistan.com/cost-of-living/${city}`,
    '.single-city tbody tr:nth-child(5) td.price').then( function(res1){
            
        xray(`https://www.numbeo.com/cost-of-living/in/${city}`,
        '.data_wide_table tr:nth-child(11) td:nth-child(2)').then(function(res2){

            res1 = parseFloat(res1.match(intAndFloatsRegex));
            res2 = parseFloat(res2.match(intAndFloatsRegex));

            res.send((res1+res2)/2.0+'');
        });
    });
});

express.listen(port, ()=>{console.log(`Server is up on port ${port};`);});