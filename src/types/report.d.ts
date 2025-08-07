export type TLocation = {
    place: string;
    lon: number;
    lat: number;
}

type TReport = {
    category: string;
    auspraegung: string;
    lat: number;
    lon: number;
    place: string;
    timestamp: number;
    source: string;
    imageUrl: string;
    isPublic: boolean;
}

export type { TReport, TLocation };
