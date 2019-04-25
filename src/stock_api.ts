import { Helper } from './helper';

const gets = (stockCodes: string[]) => {
    console.log(`Stock\tPrice\t\tVolume\t\tOpenPrice\tHighestPrice\tLowestPrice\tTime`);
    try {
        return Promise.all(stockCodes.map(async (code) => {
            const stock = await Helper.fetchStock(code);
            stock.printf();
            return true;
        }));
    } catch (err) {
        throw err;
    }
}

const stream = (stockCode: string) => {
    return;
}

export {
    gets,
    stream
}
