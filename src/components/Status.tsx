import React, { useEffect } from 'react';
import { getParameterString } from '../utils/parameters';
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

    /*
    useEffect(() => {
        const statusPanelIndex = panelOrder.indexOf('status');

        if (token && category && auspraegung && location && panelIndex === statusPanelIndex && status === null) {
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
                goToPanelById('status');
                setStatus("success");
            }, () => {
                setStatus("error");
            });
        }
    }, [panelIndex]);
    */

    useEffect(() => {
        console.log('data', `#${data.imageUrl}#`);
        const
            { token, category, auspraegung, location, timestamp, source, imageUrl, isPublic } = data;
        if (token && category && auspraegung && location && imageUrl !== null && reportStatus === null) {
            console.log('inside');
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
                // goToPanelById('status');
                setReportStatus("success");
            }, () => {
                setReportStatus("error");
            });
        } else {
            console.log('not inside', token, category, auspraegung, location, imageUrl, reportStatus)
        }
    }, [data]);

    return (
        <div className="categories-container">
            <div className="panel-title">{getString(lang, 'STATUS_TITLE')}</div>
            <div className="panel6 status-panel">
                {reportStatus === "success" && <div className="message success-message">{getString(lang, 'REPORT_SUCCESS')}</div>}
                {reportStatus === "error" && <div className="message error-message">{getString(lang, 'REPORT_ERROR')}</div>}


                {reportStatus === null ? (
                    <div>
                        {data.category && getParameterString(data.category, lang)}<br />
                        {data.auspraegung && getParameterString(data.auspraegung, lang)}<br />
                        Wo?: {data.location && data.location.place}<br />
                        IMG : {data.imageUrl}<br />



                        {data.token && data.category && data.auspraegung && data.location && data.imageUrl !== null ? (
                            <div>
                                <div className="message success-message">SEND DATA</div>

                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Status;
