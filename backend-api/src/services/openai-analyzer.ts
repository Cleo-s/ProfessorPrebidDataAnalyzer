import { PageMeta, PrebidLog, AdUnitInfo, BidderInfo, PrebidSnap, PrebidAnalyzerResponse } from '../types/prebid';

export async function analyzePrebidSnap(snapshot: PrebidSnap): Promise<PrebidAnalyzerResponse> {
    const summary = `STUB analysyis for url ${snapshot.meta.url}. Logs count: ${snapshot.logs.length}`;
    const fullRes = 'Test response from BackEnd, later here will be a complete response from OpenAI in readable text';

    return { summary, fullRes, rawRes: JSON.stringify({
        stub: true, recievedLogs: snapshot.logs.length
    }, null, 2)}
};