import { PrebidLog, PrebidSnap, PageMeta, AdUnitInfo, BidderInfo } from "../types";


export function prebidDataCollector(): PrebidSnap {

    const adUnitsArray: AdUnitInfo[] = window.pbjs.adUnits;

    if(!adUnitsArray) {
        const responseInfoDiv = document.getElementById('prebid-analyzer-response-div') as HTMLDivElement;
        responseInfoDiv.textContent = 'Either there is no AdUnits nor you did not launch Professor Prebid';
    }

    let filledAdUnit: AdUnitInfo = {code: '', bids: ['']};
    let filledBidderInfo: BidderInfo = {name: ''};

    adUnitsArray.forEach((adUnit) => {
        filledAdUnit.code = adUnit.code;
        filledAdUnit.sizes = adUnit.sizes;
        filledAdUnit.bids = adUnit.bids;
        filledAdUnit.mediaTypes = adUnit.mediaTypes;
    });

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