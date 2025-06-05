export type TLocation = {
    name: string;
    lng: number;
    lat: number;
}

type TReport = {
    category: string;
    auspraegung: string;
    location: TLocation;
    timestamp: string;
}

export type { TReport, TLocation };
