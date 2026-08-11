import { type THostCallback } from '../utils/hostCallback';
import type { TLocation } from '../types/report';
import "../styles/status.css";
type TSendData = {
    token: string | null;
    category: string | null;
    auspraegung: string | null;
    location: TLocation | null;
    timestamp: number;
    source: string;
    imageUrl: string | null;
    isPublic: boolean;
    name?: string;
    description?: string;
};
declare const Status: ({ lang, data, onReport, active, }: {
    lang: string;
    data: TSendData;
    onReport?: THostCallback | null;
    active: boolean;
}) => JSX.Element;
export default Status;
