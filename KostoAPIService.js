const express = require('express')();
const {Port} = require('./constants');
const cityController = require('./controllers/cityController');

express.get('/getPricesFor/:city',(req,res)=>
{
    let cityName = req.params.city.trim();

    (async () => {

        let city = await cityController.FindCityInDB(cityName);

        if(city){
            res.send(await cityController.TransformDbDataToView(city, true));
            return;
        }
        else{
            let found = await cityController.FindCityOnWebAndInsertInDB(cityName);
            
            if(!found){
                console.log('City not found on the internet either.');
                res.send('City not found :(');
                return;
            }

            let city = await cityController.FindCityInDB(cityName);
            res.send(await cityController.TransformDbDataToView(city, false));
            return;
        }

    })().then(()=>{},(err)=>{
        console.log(`Error encoutered : ${err}`)
    });
});

express.listen(Port, ()=>{console.log(`Server is up on port ${Port};`);});