import React, { useEffect } from 'react';
import { getString } from "../configs/stringList";
import { sendReport } from '../utils/fetch';
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
};

type TReportStatus = 'success' | 'error' | null;

const Status = ({
    lang,
    data,
}: {
    lang: string,
    data: TSendData,
}) => {
    const
        [reportStatus, setReportStatus] = React.useState<TReportStatus>(null);

    useEffect(() => {
        const
            { token, category, auspraegung, location, timestamp, source, imageUrl, isPublic } = data;
        if (token && category && auspraegung && location && imageUrl !== null && reportStatus === null) {
            const
                { lat, lon, place } = location;
            sendReport(token, {
                category,
                auspraegung,
                lat,
                lon,
                place,
                timestamp,
                source,
                imageUrl: imageUrl || '',
                isPublic,
            }, () => {
                // Speichere die Zeit der erfolgreichen Meldung im localStorage
                localStorage.setItem('lastWeatherReportTime', Date.now().toString());
                setReportStatus("success");
            }, () => {
                setReportStatus("error");
            });
        }
    }, [data]);

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
