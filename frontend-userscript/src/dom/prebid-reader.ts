import { PrebidLog, PrebidSnap, PageMeta, AdUnitInfo, BidderInfo } from "../types";

export function prebidDataCollector(): PrebidSnap {

    let filledAdUnit: AdUnitInfo = {code: '', bids: ['']};
    let filledBidderInfo: BidderInfo = {name: ''};

    const prebidLogs: PrebidLog = {text: '[STUB] Professor data collection not implemented yet'};
    const metaData: PageMeta = {
        url: window.location.href,
        collectedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
    };
    
    const prebidData: PrebidSnap = {meta: metaData, logs: [prebidLogs], adUnits: filledAdUnit};
    return prebidData;

}