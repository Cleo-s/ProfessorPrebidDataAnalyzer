import { PageMeta, PrebidLog, AdUnitInfo, BidderInfo, PrebidSnap, PrebidAnalyzerResponse } from '../types/prebid';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzePrebidSnap(snapshot: PrebidSnap): Promise<PrebidAnalyzerResponse> {

    let userText = JSON.stringify(snapshot);
    const systemText = 
    `Ти експерт з adtech, Prebid.js та header bidding.
    Твоє завдання — проаналізувати дані з Prebid Professor (логи та конфігурація слотів),
    виявити проблеми й дати рекомендації. Відповідай українською мовою.
    `

    if(userText.length > 8000)
        userText = userText.slice(0, 8000);

    const response = await openai.responses.create({
        model: 'gpt-5-nano',
        input: [
            {role: 'system', content: systemText},
            {role: 'user', content: userText}
        ],
        reasoning: {
            effort: 'low',
        },
        max_output_tokens: 640,
    });

    let fullText = response.output_text as string;
    
    console.log(fullText);

    fullText = fullText.slice(0, 500);

    return { summary: '', fullRes: fullText, rawRes: JSON.stringify(response)};
};