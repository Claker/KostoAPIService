const express = require('express')();
const xray = require('x-ray')();

const port = process.env.PORT || 3000;

express.get('/getAverageCostOfMilk/:city',(req,res)=>{
    
    var city = req.params.city;
    
    console.log(city);
    
    xray(`https://www.expatistan.com/cost-of-living/${city}`,
    '.single-city tbody tr:nth-child(5) td.price').then( function(res1){
            
        xray(`https://www.numbeo.com/cost-of-living/in/${city}`,
        '.data_wide_table tr:nth-child(11) td:nth-child(2)').then(function(res2){

            let regex = /[+-]?\d+(\.\d+)?/g;

            res1 = res1.match(regex).map(function(v) { return parseFloat(v); })[0];
            res2 = res2.match(regex).map(function(v) { return parseFloat(v); })[0];

            console.log(res1,res2);

            res.send((res1+res2)/2.0+'');
            
        });
    });
});

// express.get('/getCostFromNumbeo/:city',(req,res)=>{
//     var city = req.params.city;
//     console.log(city);
//     stream.pipe(res);
// });

express.listen(port, ()=>{console.log(`Server is up on port ${port};`);});