import React, { useEffect, useState, useRef } from 'react'
import Categories from './components/Categories';
import Auspraegungen from './components/Auspraegungen';
import Locations from './components/Locations';
import Time from './components/Time';
import { sendReport } from './utils/fetch';
import type { TLocation } from './types/report';
import ImageUpload from './components/ImageUpload';

import './App.css'
import './styles/categories.css';
import './styles/messages.css';


type TAppProps = {
    token: string | null;
    locations: TLocation[];
    params: string[] | null;
    source: string;
    isPublic: boolean;
    lang: string;
}

function App({
    token,
    locations,
    params = [],
    source,
    isPublic,
    lang,
}: TAppProps) {
    const LIMIT_MINUTES = 10;
    const [panelIndex, setPanelIndex] = useState(0);
    const [category, setCategory] = useState<string | null>(null);
    const [auspraegung, setAuspraegung] = useState<string | null>(null);
    const [location, setLocation] = useState<TLocation | null>(null);
    const [timestamp, setTimestamp] = useState<number>(Date.now());
    const [status, setStatus] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [showRateLimitWarning, setShowRateLimitWarning] = useState(false);
    const uploadTriggerRef = useRef<(() => Promise<boolean>) | null>(null);

    // Prüfe beim Laden der Komponente, ob eine kürzliche Meldung existiert
    useEffect(() => {
        const lastReportTime = localStorage.getItem('lastWeatherReportTime');
        if (lastReportTime) {
            const timeDiff = Date.now() - parseInt(lastReportTime);
            const limitMinutes = LIMIT_MINUTES * 60 * 1000; // 10 Minuten in Millisekunden
            
            if (timeDiff < limitMinutes) {
                setShowRateLimitWarning(true);
            }
        }
    }, []);

    function goToPanel(idx: number) {
      setPanelIndex(idx);
    }

    async function nextPanel() {
        // Wenn wir im Upload-Panel sind (panel5) und ein Bild hochgeladen werden soll
        if (panelIndex === 4 && uploadTriggerRef.current) {
            const uploadSuccess = await uploadTriggerRef.current();
            console.log('uploadSuccess', uploadSuccess);
            /*
            if (!uploadSuccess) {
                // Upload fehlgeschlagen, nicht weitergehen
                return;
            }
            */
        }
        
        if (panelIndex < 5) setPanelIndex(panelIndex + 1);
    }

    function prevPanel() {
        if (panelIndex > 0) setPanelIndex(panelIndex - 1);
    }

    useEffect(() => {
        if (token && category && auspraegung && location && panelIndex === 5 && status === null) {
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
                goToPanel(5);
                setStatus("success");
            }, () => {
                setStatus("error");
            });
        }
    }, [panelIndex]);

    return (
        <div className="slider-container">
            {showRateLimitWarning && (
                <div className="rate-limit-warning">
                    ⚠️ Sie können nur einmal innerhalb von 10 Minuten eine Wettermeldung absetzen.
                </div>
            )}
            <div
                className="slider-inner"
                style={{
                    transform: `translateX(-${panelIndex * 16.666666666666666}%)`,
                    width: `600%`,
                }}
            >
                <div className="panel panel1">
                    <Categories
                        params={params || []}
                        onSelectCategory={async (category) => {
                            setCategory(category);
                            await nextPanel();
                        }}
                    />
                </div>
                <div className="panel panel2">
                    <PanelContent
                        component={(<Auspraegungen category={category} onSelectAuspraegung={async (auspraegung) => {
                            setAuspraegung(auspraegung);
                            await nextPanel();
                        }}
                    />)}    
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                    />
                </div>
                <div className="panel panel3">
                    <PanelContent
                        component={(<Locations locations={locations} onSelectLocation={async (location) => {
                            setLocation(location);
                            await nextPanel();
                        }} />)}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                    />
                </div>
                
                <div className="panel panel4">
                    <PanelContent
                        component={(<Time onSelectTimestamp={async (timestamp) => {
                            setTimestamp(timestamp);
                            await nextPanel();
                        }} />)}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                    />
                </div>

                <div className="panel panel5">
                    <PanelContent
                        component={(<ImageUpload 
                            triggerUploadRef={uploadTriggerRef}
                            onImageUploaded={(response) => {
                                console.log('image uploaded', response);
                                setImageUrl(response.s3Key);
                            }} 
                        />)}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={true}
                    />
                </div>

                <div className="panel panel6 status-panel">
                    {status === "success" && <div className="message success-message">Wettermeldung erfolgreich gesendet!</div>}
                    {status === "error" && <div className="message error-message">Fehler beim Senden der Wettermeldung!</div>}
                </div>

               {/* <div className="panel panel3"></div> */}
            </div>

        </div>
    );
}


type TPanelContentProps = {
    component?: any;
    onNext: () => Promise<void>;
    onPrev: () => void;
    showPrev: boolean;
    showNext: boolean;
}



function PanelContent({ component, onNext, onPrev, showPrev, showNext }: TPanelContentProps) {
    return (
        <div className="panel-content">
            {component && component}
            <div className="panel-buttons">
                {showPrev && (
                    <a href="#" onClick={(e) => { e.preventDefault(); onPrev(); }} className="text-link">
                        <svg className="arrow-left" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0l4 4M1 5l4-4"></path>
                        </svg>
                        Zurück
                    </a>
                )}
                {showNext && (
                    <a href="#" onClick={async (e) => { e.preventDefault(); await onNext(); }} className="text-link">
                        Weiter
                        <svg className="arrow-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
}


export default App
export { App as CrowdWxEditor }
