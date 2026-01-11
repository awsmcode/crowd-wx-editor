# Wettermeldungen Editor
Editor for submitting weather reports

## Widget (Browser-Bundle)

### Build

```bash
npm run build:browser
```

Das Browser-Bundle liegt danach in `dist/`:

- `dist/crowd-wx-editor.js` (IIFE, enthält React/ReactDOM)
- `dist/crowd-wx-editor.css`

### Einbindung in eine HTML-Seite

```html
<link rel="stylesheet" href="/dist/crowd-wx-editor.css" />

<div
  id="cw-root"
  class="crowd-widget-root"
  data-token="<API_TOKEN>"
  data-locations='[
    {"place":"München","lon":11.57,"lat":48.13},
    {"place":"Augsburg","lon":10.89,"lat":48.37}
  ]'
  data-params='["blitze","wind","hagel","regen"]'
  data-lang="de"
  data-source="network"
  data-is-public="false"
  data-callback="onCrowdReport"
></div>

<script>
  function onCrowdReport(payload) {
    console.log('Widget callback:', payload);
  }
</script>

<script src="/dist/crowd-wx-editor.js"></script>
```

### Attribute & Parameter

- `data-token` (string, optional): API-Token für das Senden der Meldung.
- `data-locations` (JSON-Array, optional): Orte für die Auswahl.
  - Objektform: `{ "place": string, "lon": number, "lat": number }`
  - Wenn nur ein Ort angegeben ist, wird die Location-Auswahl übersprungen.
- `data-params` (JSON-Array, optional): Liste der erlaubten Kategorien (z. B. `"blitze"`, `"wind"`).
- `data-lang` (string, optional): Sprachcode, Standard `de`.
- `data-source` (string, optional): Quelle im Report, Standard `network`.
- `data-is-public` (string, optional): Wird aktuell als Flag gelesen, wenn der Wert exakt `"false"` ist.
- `data-callback` (string, optional): Name einer globalen Callback-Funktion.
  - Wird nach dem Senden mit `{ status: "success" | "error", report: ... }` aufgerufen.

### Beispiel-CSS

```css
.crowd-widget-root {
  margin: 0 auto;
  width: 320px;
  height: 560px;
  position: relative;
  border: 1px solid #000;
}
```

## Library (React-Komponente)

### Build

```bash
npm run build:lib
```

### Verwendung

```tsx
import { CrowdWxEditor, type TLocation } from 'crowd-wx-editor';
import 'crowd-wx-editor/styles';

const locations: TLocation[] = [
  { place: 'München', lon: 11.57, lat: 48.13 },
  { place: 'Augsburg', lon: 10.89, lat: 48.37 },
];

export default function WeatherReport() {
  return (
    <CrowdWxEditor
      token="<API_TOKEN>"
      locations={locations}
      params={["blitze", "wind", "hagel", "regen"]}
      source="network"
      isPublic={false}
      lang="de"
    />
  );
}
```

### Props

- `token` (string | null): API-Token.
- `locations` (TLocation[]): Orte für die Auswahl.
- `params` (string[] | null): Erlaubte Kategorien.
- `source` (string): Quelle im Report.
- `isPublic` (boolean): Public-Flag im Report.
- `lang` (string): Sprachcode.

> Hinweis: Falls du die Callback-Funktion nutzen willst, musst du ein Element mit der ID
> `cw-root` und dem `data-callback`-Attribut im DOM haben, da die Callback-Ermittlung
> aktuell an dieses Element gebunden ist.
