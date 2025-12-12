import { PrebidLog, PrebidSnap, PageMeta, AdUnitInfo, BidderInfo } from "../types";
declare const unsafeWindow: Window & typeof globalThis;


export function prebidDataCollector(): PrebidSnap {
    
    let allPbjsEntries = [];
    let allVmPbjsEntries = [];
    
    let bidderTimeoutArray = [];
    let bidderErrorArray = [];
    let noBidArray: any = [];
    let bidderTimeToRespondArray = [];
    let timeOutArray = [];
    let adRenderDelayArray = [];
    let wichBidWonArray = [];
    let howMuchCpmArray = [];
    let whoLostArray = [];
    let creativeSizesArray = [];
    let biddersSizesArray = [];
    let auctionTimeOutArray = [];
    let isGDPRPresentArray = [];
    let addUnitsArray = [];
    let adsFormatsArray = [];

    let noBidObj: noBidObject = {};
    type noBidObject = {
        bidder?: string;
        adUnitCode?: string;
        auctionID?: string;
    }

    try {
        
        allPbjsEntries = unsafeWindow.pbjs.getEvents(); 

        if (!allPbjsEntries) { 
            allVmPbjsEntries = unsafeWindow.vmpbjs.getEvents();
        }

        allPbjsEntries.forEach((e: any) => {
            console.log(e);
            if (e.eventType === 'noBid') {
                noBidArray.push(noBidObj = {
                    bidder: e.args.bidder,
                    adUnitCode: e.args.adUnitCode,
                    auctionID: e.args.auctionID,
                });
            };
        });
    
        allVmPbjsEntries.forEach((e: any) => {
            console.log(e);
        });

    } catch (e) {
        console.error('Error: ', e);
    }

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