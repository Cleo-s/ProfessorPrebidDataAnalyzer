"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const prebid_1 = require("./routes/prebid");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/prebid', prebid_1.prebidRouter);
// app.get('/health', (_req: Request, res: Response) => {
//     res.json({status: 'ok'})
// })
app.listen(PORT, () => {
    console.log(`Prebid Analyzer backend listening on ${PORT}`);
});
//# sourceMappingURL=server.js.map