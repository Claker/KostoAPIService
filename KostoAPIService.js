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
            res.send(city);
            return;
        }
        else
        {
            xray.GetInfoFromWeb(cityName);
        }

    })().then(()=>{},(err)=>{
        console.log(`Error encoutered : ${err}`)
    });
});

express.listen(Port, ()=>{console.log(`Server is up on port ${Port};`);});