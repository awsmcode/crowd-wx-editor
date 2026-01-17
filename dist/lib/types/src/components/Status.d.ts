import React from 'react';
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
};
declare const Status: ({ lang, data, onReport, }: {
    lang: string;
    data: TSendData;
    onReport?: THostCallback | null;
}) => React.JSX.Element;
export default Status;
