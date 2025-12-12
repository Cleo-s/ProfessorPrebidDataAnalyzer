import { PrebidLog, PrebidSnap, PageMeta } from "../types";
import { getAllDataFromPBJSInstance } from "./find-prebid-data";

export function prebidDataCollector(): PrebidSnap {

    const prebidLogs: PrebidLog = {text: '[STUB] Professor data collection not implemented yet'};
    const allPrebidData: any = getAllDataFromPBJSInstance();
    const metaData: PageMeta = {
        url: window.location.href,
        collectedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
    };
    
    const prebidData: PrebidSnap = {meta: metaData, logs: [prebidLogs], globalData: allPrebidData };
    return prebidData;

}