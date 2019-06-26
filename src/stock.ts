export class Stock {
    code: string;
    currentPrice: number;
    volume: number;
    openPrice: number;
    highestPrice: number;
    lowestPrice: number;
    time: Date;
    
    constructor(stockCode: string, stockPrices: any) {
        this.code = stockCode;
        this.currentPrice = stockPrices.LastPrice;
        this.volume = stockPrices.TotalVol;
        this.openPrice = stockPrices.OpenPrice;
        this.highestPrice = stockPrices.HighestPrice;
        this.lowestPrice = stockPrices.LowestPrice;
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
