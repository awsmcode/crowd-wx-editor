import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import type { TLocation } from './types/report';

import './index.css'

const root = document.getElementById('cw-root');

if (root) {
    const
        locationsJson = root.getAttribute('data-locations'),
        token = root.getAttribute('data-token');

    let locations: TLocation[] = [];
    if (locationsJson) {
        try {
            locations = JSON.parse(locationsJson);
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
