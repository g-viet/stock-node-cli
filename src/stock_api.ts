import { Helper } from './helper';

const gets = (stockCodes: string[]) => {
    console.log(`Stock\tPrice\t\tVolume\t\tOpenPrice\tHighestPrice\tLowestPrice\tTime`);
    try {
        return Promise.all(stockCodes.map((code) => {
            return Helper.fetchStock(code).then(stock => stock.printf());
        }));
    } catch (err) {
        throw err;
    }
}

const stream = (stockCode: string) => {
    console.log(`Stock\tPrice\t\tVolume\t\tOpenPrice\tHighestPrice\tLowestPrice\tTime`);
    setInterval(() => {
        Helper.fetchStock(stockCode).then(stock => stock.printf());
    }, 2000);
}

export {
    gets,
    stream
}
