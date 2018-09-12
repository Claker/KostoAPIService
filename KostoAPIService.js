const express = require('express')();
const xray = require('./parser/xrayService');
const {Port} = require('./constants');
const cityManager = require('./managers/cityManager');
const cityViewModel = require('./viewModels/cityViewModel');

express.get('/getPricesFor/:city',(req,res)=>
{
    let cityName = req.params.city.trim();

    (async () => {

        let city = await cityManager.FindCityInDB(cityName);

        if(city)
        {
            let result = await cityViewModel.TransformDbDataToView(city);

            res.send(result);
            return;
        }
        else
        {
            let dataFromWeb = await xray.GetInfoFromWeb(cityName);

            if(!dataFromWeb)
            {
                console.log('City not found on the internet either.');
                res.send('City not found :(');
                return;
            }

            cityManager.InsertDataFromWebInDB(dataFromWeb);
            res.send(dataFromWeb);
            return;
        }

    })().then(()=>{},(err)=>{
        console.log(`Error encoutered : ${err}`)
    });
});

express.listen(Port, ()=>{console.log(`Server is up on port ${Port};`);});