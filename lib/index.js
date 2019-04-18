#!/usr/bin/env node
"use strict";
var program = require('commander');
program
    .version('0.0.1')
    .description("Stock CLI for getting stock information")
    .option('-o, --option [name]', 'Test option')
    .parse(process.argv);
console.info("You have typed args:", program.args);
console.info("You have typed option:", program.option);
