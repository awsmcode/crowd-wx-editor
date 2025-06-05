import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { type Location } from './App.tsx'


const root = document.getElementById('cw-root');

if (root) {
    const locationsJson = root.getAttribute('data-locations');

    let locations: Location[] = [];
    if (locationsJson) {

        try {
            locations = JSON.parse(locationsJson);
            // Jetzt kannst du mit locations weiterarbeiten!
            console.log(locations);
        } catch (e) {
            console.error("Locations-Parsing-Fehler:", e);
        }
    }

    createRoot(root!).render(
        <StrictMode>
          <App locations={locations} />
        </StrictMode>,
    )

}
