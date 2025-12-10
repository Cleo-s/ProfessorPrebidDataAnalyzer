import { API_BASE_URL, PREBID_ANALYZER_PATH } from "./config";
import { PrebidSnap } from "../types"; 

async function sendAnalyzeReqest(pSnap: PrebidSnap) {
    const url: string = API_BASE_URL + PREBID_ANALYZER_PATH;
    const reqestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(pSnap),
    }

    try {
        const response: Response = await fetch(url, reqestOptions);
        
        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error)
    }
}