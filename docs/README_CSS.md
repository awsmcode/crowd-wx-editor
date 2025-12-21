# CSS-Verwendung für CrowdWxEditor

## Installation der CSS-Datei

Nach dem Build der Library befindet sich die CSS-Datei im `dist/lib/` Verzeichnis:

- `styles.css` - Alle Styles für die CrowdWxEditor-Komponenten

## Verwendung

### Option 1: CSS-Datei manuell einbinden

```html
<!-- In deiner HTML-Datei -->
<link rel="stylesheet" href="node_modules/crowd-wx-editor/dist/lib/styles.css">
```

### Option 2: CSS in JavaScript/TypeScript importieren

```javascript
// In deiner JavaScript/TypeScript-Datei
import 'crowd-wx-editor/dist/lib/styles.css'

// Dann die Komponenten importieren
import { CrowdWxEditor } from 'crowd-wx-editor'
```

### Option 3: Mit Webpack/Vite

```javascript
// In deiner Webpack/Vite-Konfiguration
import 'crowd-wx-editor/dist/lib/styles.css'
```

## Hinweise

- Die `styles.css` Datei enthält alle benötigten Styles für die CrowdWxEditor-Komponenten
- Stelle sicher, dass die CSS-Datei vor der Verwendung der Komponenten geladen wird
- Die Styles sind so konzipiert, dass sie mit anderen CSS-Frameworks kompatibel sind 