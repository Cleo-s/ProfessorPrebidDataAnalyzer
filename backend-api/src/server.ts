import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { prebidRouter } from './routes/prebid';

dotenv.config();

const app = express();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

app.use('/api/prebid', prebidRouter);

// app.get('/health', (_req: Request, res: Response) => {
//     res.json({status: 'ok'})
// })

app.listen(PORT, () => {
    console.log(`Prebid Analyzer backend listening on ${PORT}`);
});