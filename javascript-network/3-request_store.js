#!/usr/bin/node

const request = require('request')
const fs = require('fs');

const arg = process.argv;

request.get(arg[2]).pipe(fs.createWriteStream(arg[3], { encoding: 'utf-8' }));