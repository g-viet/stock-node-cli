#!/usr/bin/env node

const program = require('commander');

program
    .version('0.0.1')
    .description("Stock CLI for getting stock information")
    .arguments('get <stock> [otherStocks...]', 'get one or more stocks price')
    .action((cmd: string, stocks?: string[]) => {
        console.log("Instruction: %s", cmd);
        if (stocks){
            console.log("And other stocks: %s", stocks.join("-"));
        }
    });

program.parse(process.argv);
process.exit(0);
