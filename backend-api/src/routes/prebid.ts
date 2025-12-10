import { Router, Request, Response } from "express";
import { analyzePrebidSnap } from "../services/openai-analyzer";
import { PrebidSnap } from "../types/prebid";

export const prebidRouter = Router();

prebidRouter.post('./analyze', async(req: Request, res: Response) => {
    try {
        const snapShot = req.body as PrebidSnap;

        if (!snapShot || !snapShot.meta || snapShot.logs) {
            return res.status(400).json({error: 'Invalid snapshot payload'});
        }

        const analysis = await analyzePrebidSnap(snapShot);
        return res.json(analysis);
    } catch (error) {
        console.log('Prebid/Analysis error:', error);
        return res.status(500).json({error: 'Internal error'})
    }
})