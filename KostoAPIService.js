const express = require('express');
const osmosis = require('osmosis');

const port = process.env.PORT || 3000;

let app = express();

app.get('/',(req,res)=>{
    res.send({success:'First call succeeded.'});
});

app.listen(port, ()=>{console.log(`Server is up on port ${port};`);});