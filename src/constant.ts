const INDUSTRY_GROUPS: any = {
    "common": ["VNINDEX", "VN30"],
    "textile": ["TCM", "TNG", "STK", "M10", "GIL", "MSH"],
    "wood": ["TTF"],
    "bank": ["VCB", "BID", "ACB", "MBB", "TCB", "VPB", "STB", "SHB", "HDB", "TPB"],
    "realestate": ["VIC", "VHM", "NLG", "DXG", "NVL", "LHG", "NTC", "D2D", "KDH"],
    "retail": ["VRE", "FPT", "MWG", "DGW"],
    "food": ["VNM", "SAB", "MSN", "QNS", "SBT"],
    "seafood": ["VHC", "MPC", "ANV", "IDI", "HVG"],
    "aviation": ["VJC", "HVN", "ACV"],
    "logistic": ["GMD"],
    "construction": ["CTD", "HBC", "REE"],
    "steel": ["HPG", "HSG"],
    "agriculture": ["HAG", "HNG"],
    "electricity": ["POW", "PPC", "GEG"],
    "pharmacy": ["DHG"],
    "TOP": ["VIC", "VHM", "VCB", "VNM", "VJC", "VRE", "VHC", "TCM", "HBC", "HPG", "TTF", "GMD", "LHG", "POW"]
}

const BASE_API_URL = 'https://api.vietstock.vn/ta/history';

export {
    INDUSTRY_GROUPS,
    BASE_API_URL
}
