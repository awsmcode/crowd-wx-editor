import React from 'react';
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
};
declare const Status: ({ lang, data, }: {
    lang: string;
    data: TSendData;
}) => React.JSX.Element;
export default Status;
