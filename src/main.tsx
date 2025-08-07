import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import type { TLocation } from './types/report';

import './index.css'

const root = document.getElementById('cw-root');

if (root) {
    const
        locationsJson = root.getAttribute('data-locations'),
        token = root.getAttribute('data-token'),
        paramsJson = root.getAttribute('data-params'),
        isPublic = root.getAttribute('data-is-public') === 'false',
        lang = root.getAttribute('data-lang') || 'de',
        source = root.getAttribute('data-source') || 'network';

    let locations: TLocation[] = [];
    if (locationsJson) {
        try {
            locations = JSON.parse(locationsJson);
        } catch (e) {
            console.error("Locations-Parsing-Fehler:", e);
        }
    }

    let params: string[] = [];
    if (paramsJson) {
        try {
            params = JSON.parse(paramsJson);
        } catch (e) {
            console.error("Params-Parsing-Fehler:", e);
        }
    }


    createRoot(root!).render(
        <StrictMode>
          <App locations={locations} token={token} params={params} source={source} isPublic={isPublic} lang={lang} />
        </StrictMode>,
    )

}
