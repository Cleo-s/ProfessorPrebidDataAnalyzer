"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prebidRouter = void 0;
const express_1 = require("express");
const openai_analyzer_1 = require("../services/openai-analyzer");
exports.prebidRouter = (0, express_1.Router)();
exports.prebidRouter.post('/analyze', async (req, res) => {
    try {
        const snapShot = req.body;
        if (!snapShot || !snapShot.meta || !snapShot.logs) {
            return res.status(400).json({ error: 'Invalid snapshot payload' });
        }
        const analysis = await (0, openai_analyzer_1.analyzePrebidSnap)(snapShot);
        return res.json(analysis);
    }
    catch (error) {
        console.log('Prebid/Analysis error:', error);
        return res.status(500).json({ error: 'Internal error' });
    }
});
//# sourceMappingURL=prebid.js.map