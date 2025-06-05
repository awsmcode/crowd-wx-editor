import { useEffect, useState } from 'react'
import './App.css'
import Categories from './components/Categories';
import Auspraegungen from './components/Auspraegungen';
import Locations from './components/Locations';
import { sendReport } from './utils/fetch';
import type { TLocation } from './types/report';
import Time from './components/Time';

type TAppProps = {
    token: string | null;
    locations: TLocation[];
}

function App({
    token,
    locations
}: TAppProps) {
    const [panelIndex, setPanelIndex] = useState(0);
    const [category, setCategory] = useState<string | null>(null);
    const [auspraegung, setAuspraegung] = useState<string | null>(null);
    const [location, setLocation] = useState<TLocation | null>(null);
    const [timestamp, setTimestamp] = useState<number>(Date.now());
    const [status, setStatus] = useState<string | null>(null);

    function goToPanel(idx: number) {
      setPanelIndex(idx);
    }

    function nextPanel() {
        if (panelIndex < 4) setPanelIndex(panelIndex + 1);
    }

    function prevPanel() {
        if (panelIndex > 0) setPanelIndex(panelIndex - 1);
    }

    useEffect(() => {

        if (token && category && auspraegung && location && panelIndex === 4) {
            sendReport(token, {
                category,
                auspraegung,
                location,
                timestamp,
            }, () => {
                goToPanel(4);
                setStatus("success");
            }, () => {
                setStatus("error");
            });
        }
    }, [panelIndex]);

    return (
        <div className="slider-container">
            <div
                className="slider-inner"
                style={{
                    transform: `translateX(-${panelIndex * 20}%)`,
                }}
            >
                <div className="panel panel1">
                    <Categories onSelectCategory={(category) => {
                            setCategory(category);
                            nextPanel();
                        }}
                    />
                </div>
                <div className="panel panel2">
                    <PanelContent
                        component={(<Auspraegungen category={category} onSelectAuspraegung={(auspraegung) => {
                            setAuspraegung(auspraegung);
                            nextPanel();
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
                        component={(<Locations locations={locations} onSelectLocation={(location) => {
                            setLocation(location);
                            nextPanel();
                        }} />)}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                    />
                </div>
                <div className="panel panel4">
                    <PanelContent
                        component={(<Time onSelectTimestamp={(timestamp) => {
                            setTimestamp(timestamp);
                            nextPanel();
                        }} />)}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                    />
                </div>
                <div className="panel panel5 status-panel">
                    {status === "success" && <div className="message success-message">Wettermeldung erfolgreich gesendet!</div>}
                    {status === "error" && <div className="message error-message">Fehler beim Senden der Wettermeldung!</div>}
                </div>
            </div>

        </div>
    );
}


type TPanelContentProps = {
    component?: any;
    onNext: () => void;
    onPrev: () => void;
    showPrev: boolean;
    showNext: boolean;
}


function PanelContent({ component, onNext, onPrev, showPrev, showNext }: TPanelContentProps) {
    return (
        <>
            {component && component}
            <div className="panel-buttons">
                {showPrev && <button onClick={onPrev}>Zurück</button>}
                {showNext && <button onClick={onNext}>Weiter</button>}
            </div>
        </>
    );
}


export default App
