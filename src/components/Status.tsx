import React, { useEffect } from 'react';
import { getString } from "../configs/stringList";
import { sendReport } from '../utils/fetch';
import { callHostCallback, type THostCallback } from '../utils/hostCallback';
import type { TLocation } from '../types/report';
import "../styles/status.css";

type TSendData = {
    token: string | null,
    category: string | null,
    auspraegung: string | null,
    location: TLocation | null,
    timestamp: number,
    source: string,
    imageUrl: string | null,
    isPublic: boolean,
    name?: string,
    description?: string,
};

type TReportStatus = 'success' | 'error' | null;

const Status = ({
    lang,
    data,
    onReport,
    /** Nur true, wenn der Nutzer wirklich auf dem Status-Schritt ist (Slider rendert alle Panels gleichzeitig). */
    active,
}: {
    lang: string,
    data: TSendData,
    onReport?: THostCallback | null,
    active: boolean,
}) => {
    const
        [reportStatus, setReportStatus] = React.useState<TReportStatus>(null);

    useEffect(() => {
        if (!active) return;

        const
            { token, category, auspraegung, location, timestamp, source, imageUrl, isPublic, name, description } = data;
        if (token && category && auspraegung && location && imageUrl !== null && reportStatus === null) {
            const
                { lat, lon, place } = location;
            const reportPayload = {
                category,
                auspraegung,
                lat,
                lon,
                place,
                timestamp,
                source,
                imageUrl: imageUrl || '',
                isPublic,
                ...(name ? { name } : {}),
                ...(description ? { description } : {}),
            };
            sendReport(token, {
                ...reportPayload,
            }, () => {
                // Speichere die Zeit der erfolgreichen Meldung im localStorage
                localStorage.setItem('lastWeatherReportTime', Date.now().toString());
                setReportStatus("success");
                callHostCallback({ status: 'success', report: reportPayload }, onReport);
            }, () => {
                setReportStatus("error");
                callHostCallback({ status: 'error', report: reportPayload }, onReport);
            });
        }
    }, [data, onReport, active, reportStatus]);

    return (
        <div className="categories-container">
            <div className="panel-title">{getString(lang, 'STATUS_TITLE')}</div>
            <div className="panel6 status-panel">
                {reportStatus === "success" && <div className="message success-message">{getString(lang, 'REPORT_SUCCESS')}</div>}
                {reportStatus === "error" && <div className="message error-message">{getString(lang, 'REPORT_ERROR')}</div>}
            </div>
        </div>
    );
};

export default Status;
