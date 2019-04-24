#!/usr/bin/env node

const program = require('commander');
import * as Stock from './stock';

program
    .version('0.0.1')
    .description("Stock CLI for getting stock information")
    .arguments('get <stock> [otherStocks...]', 'get one or more stocks price')
    .action((cmd: string, stocks: string[] = []) => {
        switch(cmd) {
            case "get":
                Stock.get(stocks);
                break;
            default:
                console.log(`No "${cmd}" method.`)
        }
    });

program.parse(process.argv);
process.exit(0);
