const http = require("http");
//const express = require("express");
import express from 'express'
const path = require('path');
const app = express();
const server = http.createServer(app);
const fs = require('fs');
/*const Dish = require('./src/js/Dish');
let dish = new Dish();*/
import Dish from './src/js/Dish';
let dish = new Dish();

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

app.use('/src', express.static('src'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});



const linksArray = ['./src/js/dishes/pizza.json', './src/js/dishes/sushi.json']

function parseFiles(callback) {
    for (let i = 0; i < 2; i++) {
        fs.readFile(linksArray[i], (err, data) => {
            if (err) throw err;
            dish.addDish(JSON.parse(data));
        });
    }
    sec();
}
parseFiles();
function sec(){
    setTimeout(foo,1000 );

}

function foo() {
    console.log(dish.getDishes()[0]);
}

export const a = 1;










