const express = require('express')();
const xray = require('./parser/xrayService');
const {Port} = require('./constants');
const cityManager = require('./managers/cityManager');

express.get('/getPricesFor/:city',(req,res)=>
{
    let cityName = req.params.city.trim();

    (async () => {

        let city = await cityManager.FindCityInDB(cityName);

        if(city)
        {
            let result = new Object();

            result.city = city;
            result.costs = city.costs;

            res.send(result);
            return;
        }
        else
        {
            let x = await xray.GetInfoFromWeb(cityName);
            cityManager.InsertDataFromWeb(x);
        }

    })().then(()=>{},(err)=>{
        console.log(`Error encoutered : ${err}`)
    });
});

express.listen(Port, ()=>{console.log(`Server is up on port ${Port};`);});