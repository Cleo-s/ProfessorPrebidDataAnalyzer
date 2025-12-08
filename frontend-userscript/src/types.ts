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
    sizes?: string[];
    mediaTypes?: string[];
    bidders: string[];
    issues?: string[];
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
    adUnits?: AdUnitInfo[];
    bidders?: BidderInfo[];
    issues?: string[];
}