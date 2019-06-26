import { Stock } from "./stock";
import { INDUSTRY_GROUPS, BASE_API_URL } from "./constant";
const request = require('request');

const getCurrentTime = (): string => {
    const d = new Date();
    return `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
};

const fetchStock = async (stockCode: string): Promise<any> => {
    stockCode = stockCode.toLocaleUpperCase();
    const apiCall = () => {
        return new Promise((resolve, reject) => {
            const options = {
                uri: BASE_API_URL,
                method: 'POST',
                json: true,
                headers: {
                    "Content-Type": "application/json"
                },
                body: { "code": stockCode, "s": "1", "t": getCurrentTime() }
            };
            request(options, (err: any, _res: any, body: any) => {
                if (err) reject(err);
                resolve(body);
            });
        })
    }
    return apiCall().then((body: any) => {
        try {
            // return JSON.stringify(body);
            return new Stock(stockCode, body);
        } catch (_err) {
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
