export type TLocation = {
    place: string;
    lng: number;
    lat: number;
}

type TReport = {
    category: string;
    auspraegung: string;
    location: TLocation;
    timestamp: number;
    source: string;
}

export type { TReport, TLocation };
