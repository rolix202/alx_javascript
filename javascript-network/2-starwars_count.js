#!/usr/bin/node

const request = require('request')

const arg = process.argv;
const url = arg[2];

request.get(url, function(error, response, body){
    const reqData = JSON.parse(body);

    let count = 0;
    reqData.results.forEach(item => {
        if (item.characters.includes("https://swapi-api.alx-tools.com/api/people/18/")){
            count++
        }
    });
    console.log(count);
    
})