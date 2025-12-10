"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzePrebidSnap = analyzePrebidSnap;
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
async function analyzePrebidSnap(snapshot) {
    const userText = JSON.stringify(snapshot);
    const systemText = `Ти експерт з adtech, Prebid.js та header bidding. 
    Твоє завдання — проаналізувати дані з Prebid Professor (логи та конфігурація слотів), 
    виявити проблеми й дати рекомендації. 
    Відповідай українською мовою. Спочатку дай коротке резюме (кілька речень), 
    потім детальний аналіз ситуації, 
    а наприкінці — конкретні поради, що виправити в конфігурації Prebid, bidder-ах, таймінгах, timeout-ах тощо. 
    Загальний обсяг відповіді — приблизно 500 слів.`;
    if (userText.length > 8000)
        userText.slice(0, 8000);
    const response = await openai.responses.create({
        model: 'gpt-5-nano',
        input: [
            { role: 'system', content: systemText },
            { role: 'user', content: userText }
        ],
        reasoning: {
            effort: 'low',
        },
        max_output_tokens: 2048,
    });
    const fullText = response.output_text;
    console.log(fullText);
    return { summary: fullText, fullRes: fullText, rawRes: JSON.stringify(response, null, 2) };
}
;
//# sourceMappingURL=openai-analyzer.js.map