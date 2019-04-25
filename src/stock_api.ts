import { Stock } from './stock';
const request = require('request');

const BASE_API_URL = 'https://api.vietstock.vn/ta/history';

const gets = (stockCodes: string[]) => {
    console.log(`Stock\tPrice\t\tVolume\t\tOpenPrice\tHighestPrice\tLowestPrice\tTime`);
    try {
        return Promise.all(stockCodes.map(code => {
            const options = {
                url: buildApiUrl(code),
                method: 'GET',
                json: true
            }
            return request(options, (_err: any, _res: any, body: any) => {
                const stockPrice = new Stock(code, JSON.parse(body));
                stockPrice.printf();
                return true;
            });
        }));
    } catch (err) {
        throw err;
    }
}

const stream = (stockCode: string) => {
    return;
}

const buildApiUrl = (stock: string): string => {
    const to = Math.floor(Date.now() / 1000);
    const from = to - 864000; // 10 days
    return `${BASE_API_URL}?symbol=${stock}&resolution=D&from=${from}&to=${to}`;
}

export {
    gets,
    stream
}
