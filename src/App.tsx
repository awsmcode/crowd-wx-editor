import React, { useEffect, useState, useRef, useMemo } from 'react'
import Categories from './components/Categories';
import Auspraegungen from './components/Auspraegungen';
import Locations from './components/Locations';
import Time from './components/Time';
import ImageUpload from './components/ImageUpload';
import Status from './components/Status';


import type { TLocation } from './types/report';
import { getString } from './configs/stringList';

import './App.css'
import './styles/categories.css';
import './styles/messages.css';

const PANEL_ORDER = ['categories', 'auspraegungen', 'locations', 'time', 'upload', 'status'] as const;
type TPanelId = typeof PANEL_ORDER[number];

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
    const panelOrder: TPanelId[] = useMemo(() => {
        if (locations.length === 1) {
            return PANEL_ORDER.filter((panel) => panel !== 'locations');
        }

        return [...PANEL_ORDER];
    }, [locations.length]);
    const [panelIndex, setPanelIndex] = useState(0);
    const [category, setCategory] = useState<string | null>(null);
    const [auspraegung, setAuspraegung] = useState<string | null>(null);
    const [location, setLocation] = useState<TLocation | null>(null);
    const [timestamp, setTimestamp] = useState<number>(Date.now());
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [showRateLimitWarning, setShowRateLimitWarning] = useState(false);
    const uploadTriggerRef = useRef<(() => Promise<string>) | null>(null);

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

    useEffect(() => {
        if (locations.length === 1) {
            setLocation((current) => current ?? locations[0]);
        }
    }, [locations]);

    useEffect(() => {
        if (panelIndex >= panelOrder.length) {
            setPanelIndex(Math.max(panelOrder.length - 1, 0));
        }
    }, [panelIndex, panelOrder.length]);

    async function nextPanel() {
        const uploadPanelIndex = panelOrder.indexOf('upload');

        // Wenn wir im Upload-Panel sind (panel5) und ein Bild hochgeladen werden soll
        if (uploadPanelIndex !== -1 && panelIndex === uploadPanelIndex && uploadTriggerRef.current) {
            const uploadSuccess = await uploadTriggerRef.current();
            setImageUrl(uploadSuccess);
        }

        if (panelIndex < panelOrder.length - 1) setPanelIndex(panelIndex + 1);
    }

    function prevPanel() {
        if (panelIndex > 0) setPanelIndex(panelIndex - 1);
    }

    function renderPanel(panelId: TPanelId) {
        switch (panelId) {
            case 'categories':
                return (
                    <Categories
                        params={params || []}
                        lang={lang}
                        onSelectCategory={async (category) => {
                            setCategory(category);
                            await nextPanel();
                        }}
                    />
                );
            case 'auspraegungen':
                return (
                    <PanelContent
                        component={(
                            <Auspraegungen
                                category={category}
                                lang={lang}
                                onSelectAuspraegung={async (auspraegung) => {
                                    setAuspraegung(auspraegung);
                                    await nextPanel();
                                }}
                            />
                        )}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                        lang={lang}
                    />
                );
            case 'locations':
                return (
                    <PanelContent
                        component={(
                            <Locations
                                locations={locations}
                                lang={lang}
                                onSelectLocation={async (location) => {
                                    setLocation(location);
                                    await nextPanel();
                                }}
                            />
                        )}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                        lang={lang}
                    />
                );
            case 'time':
                return (
                    <PanelContent
                        component={(
                            <Time
                                lang={lang}
                                onSelectTimestamp={async (timestamp) => {
                                    setTimestamp(timestamp);
                                    await nextPanel();
                                }}
                            />
                        )}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                        lang={lang}
                    />
                );
            case 'upload':
                return (
                    <PanelContent
                        component={(
                            <ImageUpload
                                lang={lang}
                                triggerUploadRef={uploadTriggerRef}
                            />
                        )}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={true}
                        lang={lang}
                    />
                );
            case 'status':
                return (
                    <PanelContent
                        component={(
                            <Status
                                lang={lang}
                                data={{
                                    token,
                                    category,
                                    auspraegung,
                                    location,
                                    timestamp,
                                    source,
                                    imageUrl,
                                    isPublic,
                                }}
                            />
                        )}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={false}
                        showNext={false}
                        lang={lang}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <div className="slider-container">
            {showRateLimitWarning && (
                <div className="rate-limit-warning">
                    {getString(lang, 'RATE_LIMIT_WARNING')}
                </div>
            )}
            <div
                className="slider-inner"
                style={{
                    transform: `translateX(-${panelIndex * (100 / panelOrder.length)}%)`,
                    width: `${panelOrder.length * 100}%`,
                }}
            >
                {panelOrder.map((panelId) => (
                    <div key={panelId} className={`panel-container panel-${panelId}`}>
                        {renderPanel(panelId)}
                    </div>
                ))}

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
    lang: string;
}

function PanelContent({ component, onNext, onPrev, showPrev, showNext, lang }: TPanelContentProps) {
    return (
        <div className="panel-content">
            {component && component}
            <div className="panel-buttons">
                {showPrev && (
                    <a href="#" onClick={(e) => { e.preventDefault(); onPrev(); }} className="text-link">
                        <svg className="arrow-left" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0l4 4M1 5l4-4"></path>
                        </svg>
                        {getString(lang, 'BACK')}
                    </a>
                )}
                {showNext && (
                    <a href="#" onClick={async (e) => { e.preventDefault(); await onNext(); }} className="text-link">
                        {getString(lang, 'NEXT')}
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
