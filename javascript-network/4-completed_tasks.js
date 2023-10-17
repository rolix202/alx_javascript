#!/usr/bin/node

const request = require('request')

const arg = process.argv;

request.get(arg[2], function(error, response, body){
    const dataBody = JSON.parse(body);

    // console.log(dataBody);

    const userCounts = {};

    dataBody.forEach(task => {
        if (task.completed === true){
            const userId = task.userId.toString();
            userCounts[userId] = (userCounts[userId] || 0) + 1;
        }
    });
    console.log(userCounts);
})