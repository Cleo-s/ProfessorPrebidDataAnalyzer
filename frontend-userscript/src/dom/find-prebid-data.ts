declare const unsafeWindow: Window & typeof globalThis;
    
export function getAllDataFromPBJSInstance(): any {
    try {
            let allPbjsEntries = [];
            let allVmPbjsEntries: any = [];
            
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
                isNoBid?: boolean;
                bidder?: string;
                adUnitCode?: string;
                auctionID?: string;
            }
        
            let bidTimeOutObj: bidTimeoutObjType = {};
            type bidTimeoutObjType = {
                bidder?: string;
                adUnitCode?: string;
                auctionID?: string;
            };

            let bidderErrorObj: bidderErrorObjType = {};
            type bidderErrorObjType = {
                error?: string;
                bidderCode?: number | string;
                adUnits?: any;
                bids?: any;
            };

            let bidderTimeToRespond: BidderTimeToRespondType = {};
            type BidderTimeToRespondType = {
                timeToRespond?: string | number;
                requestTimes?: string | number;
                responseTimes?: string | number;
            };

            let renderDelay: RenderDelayType = {};
            type RenderDelayType = {
                
            }
        
        allPbjsEntries = unsafeWindow.pbjs.getEvents(); 

        if (!allPbjsEntries) { 
            allVmPbjsEntries = unsafeWindow.vmpbjs.getEvents();
        }

        allPbjsEntries.forEach((e: any) => {
            console.log(e);
            if (e.eventType === 'bidTimeout') {
                bidderTimeoutArray.push(bidTimeOutObj = {
                    bidder: e.args.bidder,
                    adUnitCode: e.args.adUnitCode,
                    auctionID: e.args.auctionID,
                });
            };
            if (e.eventType === 'bidderError') {
                bidderErrorArray.push(bidderErrorObj = {
                    error: e.args.error,
                    bidderCode: e.args.bidderRequest.bidderCode,
                    adUnits: e.args.bidderRequest.adUnits,
                    bids: e.args.bidderRequest.bids,
                });
            };
            if (e.eventType === 'noBid') {
                noBidArray.push(noBidObj = {
                    isNoBid: true,
                    bidder: e.args.bidder,
                    adUnitCode: e.args.adUnitCode,
                    auctionID: e.args.auctionID,
                });
            };
            if (e.eventType === 'bidResponse') {
                bidderTimeToRespondArray.push(bidderTimeToRespond = {
                    timeToRespond: e.args.timeToRespond,
                    requestTimes: e.args.requestTimestamp,
                    responseTimes: e.args.responseTimestamp,
                });
            };
        });
    
        allVmPbjsEntries.forEach((e: any) => {
            console.log(e);
        });

    } catch (e) {
        console.error('Error: ', e);
    }
}