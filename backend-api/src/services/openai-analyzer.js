"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzePrebidSnap = analyzePrebidSnap;
async function analyzePrebidSnap(snapshot) {
    const summary = `STUB analysyis for url ${snapshot.meta.url}. Logs count: ${snapshot.logs.length}`;
    const fullRes = 'Test response from BackEnd, later here will be a complete response from OpenAI in readable text';
    return { summary, fullRes, rawRes: JSON.stringify({
            stub: true, recievedLogs: snapshot.logs.length
        }, null, 2) };
}
;
//# sourceMappingURL=openai-analyzer.js.map