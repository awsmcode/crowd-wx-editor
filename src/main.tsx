import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import type { TLocation } from './types/report';


const root = document.getElementById('cw-root');

if (root) {
    const locationsJson = root.getAttribute('data-locations');
    const token = root.getAttribute('data-token');

    let locations: TLocation[] = [];
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
          <App locations={locations} token={token} />
        </StrictMode>,
    )

}
