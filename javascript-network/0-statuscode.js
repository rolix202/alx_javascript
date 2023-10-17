#!/usr/bin/node

const request = require("request");
const arg = process.argv;
const url = arg[2];

request.get(url)
.on('response', function(response){
    console.log(`code: ${response.statusCode}`);
})
