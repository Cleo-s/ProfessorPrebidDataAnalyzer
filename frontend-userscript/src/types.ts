export type PageMeta = {
    url: string;
    collectedAt: string;
    userAgent?: string; 
}

export type PrebidLog = {
    text: string;
}

export type PrebidSnap = {
    meta: PageMeta;
    logs: PrebidLog[];
}