import { Stock } from "./stock";
import { INDUSTRY_GROUPS, BASE_API_URL, TEST_URL } from "./constant";
const request = require('request');

const buildApiUrl = (stockCode: string): string => {
    const to = Math.floor(Date.now() / 1000);
    const from = to - 864000; // 10 days
    // return `${BASE_API_URL}?symbol=${stockCode}&resolution=D&from=${from}&to=${to}`;
    return `${TEST_URL}?code=${stockCode}&s=0`;
}

const fetchStock = async (stockCode: string): Promise<any> => {
    const apiCall = () => {
        return new Promise((resolve, reject) => {
            const options = {
                url: buildApiUrl(stockCode),
                method: 'POST',
                json: true
            };
            request(options, (err: any, _res: any, body: any) => {
                if (err) reject(err);
                resolve(body);
            });
        })
    }
    return apiCall().then((body: any) => {
        try {
            return JSON.stringify(body);
            // return new Stock(stockCode, JSON.parse(body));
        } catch (_err) {
            console.log(_err);
            return null;
        }
    })
}

const getStockCodesByGroupCode = (groupCode: string): string[] => {
    return INDUSTRY_GROUPS[groupCode] || [];
}

const listGroup = () => {
    return Object.keys(INDUSTRY_GROUPS);
}

export const Helper = {
    fetchStock,
    getStockCodesByGroupCode,
    listGroup
}
