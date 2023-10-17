#!/usr/bin/node

const request = require('request');

const arg = process.argv;
const url = `https://swapi-api.alx-tools.com/api/films/${arg[2]}`;

request.get(url, function(error, response, body){
    const resBody = JSON.parse(body);
    console.log(resBody.title);
})