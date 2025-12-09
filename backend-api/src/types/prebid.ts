export type PageMeta = {
    url: string;
    collectedAt: string;
    userAgent?: string; 
}

export type PrebidLog = {
    text: string;
    level?: 'info' | 'warn' | 'error' | 'debug';
    category?: string;
}

export type AdUnitInfo = {
    code: string;
    sizes?: string[] | undefined;
    mediaTypes?: string[] | undefined;
    bids: string[] | undefined;
    issues?: string[] | undefined;
}

export type BidderInfo = {
    name: string;
    avgResponseTimeMs?: number;
    winRate?: number;
    issues?: string; 
}

export type PrebidSnap = {
    meta: PageMeta;
    logs: PrebidLog[];
    adUnits?: AdUnitInfo;
    bidders?: BidderInfo;
    issues?: string[];
}

export type PrebidAnalyzerResponse = {
    summary: string | undefined;
    fullRes: string | undefined;
    rawRes: string | undefined;
}