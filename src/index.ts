#!/usr/bin/env node

const program = require('commander');
import * as StockApi from './stock_api';

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
                StockApi.gets(stocks);
                break;
            case "stream":
                if (stocks.length == 0) {
                    console.log("You must include stock code!! For example: ");
                    console.log("`stocknode stream VCB`");
                    return;
                }
                StockApi.stream(stocks[0]);
                break;
            case "group":
                if (stocks.length == 0) {
                    console.log("You must include industry group!! For example: ");
                    console.log("`stocknode group INDUSTRY_GROUP [OPTIONS]`");
                    return;
                }
                StockApi.group(stocks[0])
                break;
            default:
                console.log(`No "${cmd}" method.`)
        }
    });

program.parse(process.argv);
