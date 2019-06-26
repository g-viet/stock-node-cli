import { Helper } from './helper';

const gets = (stockCodes: string[]) => {
    console.log(`Stock\tPrice\t\tVolume\t\tOpenPrice\tHighestPrice\tLowestPrice\tTime`);
    try {
        return Promise.all(stockCodes.map((code) => {
            return Helper.fetchStock(code).then(stock => stock && stock.printf());
        }));
    } catch (err) {
        throw err;
    }
}

const stream = (stockCode: string) => {
    console.log(`Stock\tPrice\t\tVolume\t\t\tOpenPrice\tHighestPrice\tLowestPrice\tTime`);
    setInterval(() => {
        Helper.fetchStock(stockCode).then(stock => stock && stock.printf());
    }, 2000);
}

const group = (groupCode: string) => {
    if (groupCode) {
        return gets(Helper.getStockCodesByGroupCode(groupCode));
    } else {
        console.log("List of Industry Group:")
        Helper.listGroup().forEach((ele) => {
            console.log("- %s", ele);
        });
        console.log("\nFor getting stock prices of Industry Group:");
        console.log("    $ stocknode group <INDUSTRY_GROUP>");
    }
}

export {
    gets,
    stream,
    group
}
