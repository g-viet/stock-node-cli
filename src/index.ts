#!/usr/bin/env node

const program = require('commander');
import * as Stock from './stock_api';

program
    .version('0.0.1')
    .description("Stock CLI for getting stock information")
    .arguments('get <stock> [otherStocks...]', 'get one or more stocks price')
    .action((cmd: string, stocks: string[] = []) => {
        switch(cmd) {
            case "gets":
                if (stocks.length == 0) {
                    console.log("You must include stock codes!! For example: ");
                    console.log("`stocknode gets VCB TCM`");
                    return;
                }
                Stock.gets(stocks);
            case "stream":
                if (stocks.length == 0) {
                    console.log("You must include stock code!! For example: ");
                    console.log("`stocknode stream VCB`");
                    return;
                }
                Stock.stream(stocks[0]);
                break;
            default:
                console.log(`No "${cmd}" method.`)
        }
    });

program.parse(process.argv);
