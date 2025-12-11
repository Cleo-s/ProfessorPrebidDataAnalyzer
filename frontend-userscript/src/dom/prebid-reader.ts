import { PrebidLog, PrebidSnap, PageMeta, AdUnitInfo, BidderInfo } from "../types";
declare const unsafeWindow: Window & typeof globalThis;


export function prebidDataCollector(): PrebidSnap {

    const allPbjsEntries: {} = window.pbjs.getEvents();
    if (!allPbjsEntries) { 
        const allVmPbjsEntries: {} = window.vmpbjs.getEvents();
    }
 
    let filledAdUnit: AdUnitInfo = {code: '', bids: ['']};
    let filledBidderInfo: BidderInfo = {name: ''};

    console.log(filledAdUnit);

    const prebidLogs: PrebidLog = {text: '[STUB] Professor data collection not implemented yet'};
    const metaData: PageMeta = {
        url: window.location.href,
        collectedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
    };
    
    const prebidData: PrebidSnap = {meta: metaData, logs: [prebidLogs], adUnits: filledAdUnit};
    return prebidData;

}