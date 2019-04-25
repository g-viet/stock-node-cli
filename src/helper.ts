import { Stock } from "./stock";
const request = require('request');

const BASE_API_URL = 'https://api.vietstock.vn/ta/history';
const buildApiUrl = (stockCode: string): string => {
    const to = Math.floor(Date.now() / 1000);
    const from = to - 864000; // 10 days
    return `${BASE_API_URL}?symbol=${stockCode}&resolution=D&from=${from}&to=${to}`;
}

const fetchStock = async (stockCode: string): Promise<Stock> => {
    const apiCall = () => {
        return new Promise((resolve, reject) => {
            const options = {
                url: buildApiUrl(stockCode),
                method: 'GET',
                json: true
            };
            request(options, (err: any, _res: any, body: any) => {
                if (err) reject(err);
                resolve(body);
            });
        })
    }
    return apiCall().then((body: any) => {
        return new Stock(stockCode, JSON.parse(body));
    })
}

export const Helper = {
    fetchStock: fetchStock
}
