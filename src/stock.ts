export class Stock {
    code: string;
    currentPrice: number;
    volume: number;
    openPrice: number;
    highestPrice: number;
    lowestPrice: number;
    time: Date;
    
    constructor(stockCode: string, stockPrices: any) {
        this.code = stockCode.toLocaleUpperCase();
        this.currentPrice = stockPrices['c'];
        this.volume = stockPrices['v'];
        this.openPrice = stockPrices['o'];
        this.highestPrice = stockPrices['h'];
        this.lowestPrice = stockPrices['l'];
        this.time = new Date();
    }

    printf () {
        const volume = this.f(this.volume);
        console.log(`${this.code}\t${this.f(this.currentPrice)}\t\t${volume}${volume.length >= 9 ? '\t' : '\t\t' }${this.f(this.openPrice)}\t\t${this.f(this.highestPrice)}\t\t${this.f(this.lowestPrice)}\t\t${this.time.toLocaleTimeString()}`);
    }

    f(n: number) {
        return new Intl.NumberFormat().format(n);
    }
}
