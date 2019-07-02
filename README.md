# stock-node-cli
A CLI tool used for getting stock price in Vietnam

---
### Installation:
1. Clone then move into repo directory.
```
    git clone https://github.com/g-viet/stock-node-cli.git
    cd stock-node-cli
```
2. Install dependencies:
```
    npm install
```
3. Build and release:
```
    npm run release
```
4. Try it
```
    stocknode gets VCB TCM
```

---
### API:

- Getting multiple stock prices:
```
    # stocknode gets [List of StockCode]
    stocknode gets VCB TCM
```

- Getting stream stock prices:
```
    # stocknode stream [List of StockCode]
    stocknode stream VCB TCB
```

- Getting stock prices in industry group:
```
    # Get list of industry group:
    stocknode group

    # stocknode group <GroupCode>:
    stocknode group textile
```
