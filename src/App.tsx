import { useState } from 'react'
import './App.css'


function App() {
  const [panelIndex, setPanelIndex] = useState(0);

  function goToPanel(idx) {
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
        transform: `translateX(-${panelIndex * 100}vw)`,
      }}
    >
      <div className="panel panel1">
        <PanelContent
          text="Kategorien"
          onNext={nextPanel}
          onPrev={prevPanel}
          showPrev={false}
          showNext={true}
        />
      </div>
      <div className="panel panel2">
        <PanelContent
          text="Ausprägungen"
          onNext={nextPanel}
          onPrev={prevPanel}
          showPrev={true}
          showNext={true}
        />
      </div>
      <div className="panel panel3">
        <PanelContent
          text="Zeit und Standort"
          onNext={nextPanel}
          onPrev={prevPanel}
          showPrev={true}
          showNext={true}
        />
      </div>
      <div className="panel panel4">
        <PanelContent
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



function PanelContent({ text, onNext, onPrev, showPrev, showNext }: { text: string, onNext: () => void, onPrev: () => void, showPrev: boolean, showNext: boolean }) {
    return (
        <>
            <h2>{text}</h2>
            <p>Dies ist {text} Inhalt.</p>
            <div className="panel-buttons">
                {showPrev && <button onClick={onPrev}>Zurück</button>}
                {showNext && <button onClick={onNext}>Weiter</button>}
            </div>
        </>
    );
}

export default App
