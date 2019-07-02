#!/usr/bin/env node

const program = require('commander');
import * as StockApi from './stock_api';

program
    .version('0.0.1')
    .description("Stock CLI for getting stock information");

program
    .command('gets <stocks...>')
    .description('get one or more stocks price')
    .action((stocks: string[]) => {
        if (stocks.length == 0) {
            console.log("You must include stock codes!! For example: ");
            console.log("`stocknode gets VCB TCM`");
            return;
        }
        StockApi.gets(stocks);
    });
program
    .command('stream <stocks...>')
    .description('get streaming stock price')
    .action((stocks: string[]) => {
        StockApi.stream(stocks);
    });
program
    .command('group [groupCode]')
    .description('get stock prices of industry group')
    .action((groupCode: string) => {
        StockApi.group(groupCode);
    });

program.parse(process.argv);
