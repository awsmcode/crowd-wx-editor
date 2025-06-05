import { useState } from 'react'
import './App.css'
import Categories from './components/Categories';
import Auspraegungen from './components/Auspraegungen';
import Metas from './components/Metas';

export type Location = {
    name: string;
    lng: number;
    lat: number;
}

function App({ locations }: { locations: Location[] }) {
    const [panelIndex, setPanelIndex] = useState(0);
    const [category, setCategory] = useState<string | null>(null);
    const [auspraegung, setAuspraegung] = useState<string | null>(null);

    function goToPanel(idx: number) {
      setPanelIndex(idx);
    }

    function nextPanel() {
        if (panelIndex < 3) setPanelIndex(panelIndex + 1);
    }

    function prevPanel() {
        if (panelIndex > 0) setPanelIndex(panelIndex - 1);
    }

    return (
        <div className="slider-container">
            <div
                className="slider-inner"
                style={{
                    transform: `translateX(-${panelIndex * 25}%)`,
                }}
            >
                <div className="panel panel1">
                    <PanelContent
                        component={(<Categories onSelectCategory={(category) => {
                            setCategory(category);
                            nextPanel();
                        }}
                    />)}
                        text={'Kat--egorien'}
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={false}
                        showNext={false}
                    />
                </div>
                <div className="panel panel2">
                    <PanelContent
                        component={(<Auspraegungen category={category} onSelectAuspraegung={(auspraegung) => {
                            setAuspraegung(auspraegung);
                            nextPanel();
                        }}
                    />)}
                        text="Ausprägungen"
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                    />
                </div>
                <div className="panel panel3">
                    <PanelContent
                        component={(<Metas locations={locations} category={category} auspraegung={auspraegung} />)}
                        text="Zeit und Standort"
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={true}
                    />
                </div>
                <div className="panel panel4">
                    <PanelContent
                        component={null}
                        text="Vielen Dank!"
                        onNext={nextPanel}
                        onPrev={prevPanel}
                        showPrev={true}
                        showNext={false}
                    />
                </div>
            </div>

        </div>
    );
}

type TPanelContentProps = {
    component?: any;
    text: string;
    onNext: () => void;
    onPrev: () => void;
    showPrev: boolean;
    showNext: boolean;
}

function PanelContent({ text, component, onNext, onPrev, showPrev, showNext }: TPanelContentProps) {
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
