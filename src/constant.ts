const INDUSTRY_GROUPS: any = {
    "common": ["VNINDEX", "VN30"],
    "textile": ["TCM", "TNG", "STK", "M10", "GIL"],
    "wood": ["TTF"],
    "bank": ["VCB", "BID", "ACB", "MBB", "TCB", "VPB", "STB", "SHB", "HDB", "TPB"],
    "realestate": ["VIC", "VHM", "NLG", "DXG", "NVL"],
    "retail": ["VRE", "FPT", "MWG"],
    "food": ["VNM", "SAB", "MSN"],
    "seafood": ["VHC", "MPC", "HVG"],
    "aviation": ["VJC", "HVN", "ACV"],
    "logistic": ["GMD"],
    "construction": ["CTD", "HBC"],
    "steel": ["HPG", "HSG"],
    "agriculture": ["HAG", "HNG"]
}

const BASE_API_URL = 'https://api.vietstock.vn/ta/history';

export {
    INDUSTRY_GROUPS,
    BASE_API_URL
}
