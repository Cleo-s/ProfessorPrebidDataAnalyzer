declare const unsafeWindow: Window & typeof globalThis;
    
export function getAllDataFromPBJSInstance(): any {
    try {
            let globalDataArray = [];
            let allPbjsEntries = [];
            let allVmPbjsEntries: any = [];
            
            let bidderTimeoutArray: any = [];
            let bidderErrorArray: any = [];
            let noBidArray: any = [];
            let bidderTimeToRespondArray: any = [];
            let timeOutArray: any = [];
            let adRenderDelayArray = [];
            let wichBidWonArray: any = [];
            let howMuchCpmArray: any = [];
            let whoLostArray = [];
            let creativeSizesArray: any = [];
            let biddersSizesArray: any = [];
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
                timeout?: number;
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

            };

            let auctionTimeOut: bidTimeoutObjType= {};

            let wonBids: WonBidsObjectType = {};
            type WonBidsObjectType = {
                wonBid?: any;
                wonBidder?: string;
                wonBidAdUnitCode?: string;
                CPM?: string | number;
                currency?: string;
            }

            let siteRequestedSizes: siteRequestedSizesType = {};
            type siteRequestedSizesType = {
                sizes?: string[];
            };

            let bidderSizes: BidderSyzesType = {};
            type BidderSyzesType = {
                width?: number | string;
                height?: number | string;
            }
        
        allPbjsEntries = unsafeWindow.vmpbjs.getEvents(); 

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
            if (e.eventType === 'auctionInit') {
                timeOutArray.push(auctionTimeOut = {
                    bidder: e.args.bidder,
                    adUnitCode: e.args.adUnitCode,
                    auctionID: e.args.auctionId,
                    timeout: e.args.timeout,
                });
            };
            if (e.eventType === 'bidWon') {
                wichBidWonArray.push(wonBids = {
                    wonBid: e.args,
                    wonBidAdUnitCode: e.args.bidder,
                    wonBidder: e.args.adUnitCode,                    
                });
                howMuchCpmArray.push(wonBids = {
                    CPM: e.args.cpm,
                    currency: e.args.currency,
                });
            };
            if (e.eventType === 'bidResponse') {
                biddersSizesArray.push(bidderSizes = {
                    width: e.args.width,
                    height: e.args.height,
                });
            };
        });

        globalDataArray = [
            ...bidderTimeoutArray,
            ...bidderErrorArray,
            ...noBidArray,
            ...bidderTimeToRespondArray,
            ...timeOutArray,
            ...wichBidWonArray,
            ...howMuchCpmArray,
            ...creativeSizesArray,
            ...biddersSizesArray,
        ];

        return globalDataArray;
    } catch (e) {
        console.error('Error: ', e);
    }
}