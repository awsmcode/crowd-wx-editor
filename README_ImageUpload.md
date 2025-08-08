# ImageUpload Komponente

Eine React-Komponente für das Hochladen von Bildern mit Drag & Drop-Funktionalität.

## Features

- ✅ Drag & Drop Upload
- ✅ Dateiauswahl über Klick
- ✅ Dateigrößenlimit (10MB)
- ✅ Unterstützte Formate: JPG, PNG, GIF, WEBP
- ✅ Fortschrittsanzeige
- ✅ Bildvorschau
- ✅ Fehlerbehandlung
- ✅ Responsive Design

## Installation

Die Komponente verwendet `react-dropzone`, das bereits als Abhängigkeit installiert ist.

## Verwendung

### Grundlegende Verwendung

```tsx
import ImageUpload from './components/ImageUpload';

function App() {
    return (
        <div>
            <ImageUpload />
        </div>
    );
}
```

### Mit Callbacks

```tsx
import ImageUpload from './components/ImageUpload';

function App() {
    const handleImageUploaded = (imageData: any) => {
        console.log('Bild hochgeladen:', imageData);
        // imageData enthält: { fileName, size, type, metadata }
    };

    const handleUploadError = (error: string) => {
        console.error('Upload Fehler:', error);
    };

    return (
        <div>
            <ImageUpload 
                onImageUploaded={handleImageUploaded}
                onUploadError={handleUploadError}
                className="custom-upload-class"
            />
        </div>
    );
}
```

## Props

| Prop | Typ | Beschreibung |
|------|-----|--------------|
| `onImageUploaded` | `(imageData: any) => void` | Callback-Funktion, die aufgerufen wird, wenn ein Bild erfolgreich hochgeladen wurde |
| `onUploadError` | `(error: string) => void` | Callback-Funktion, die aufgerufen wird, wenn ein Upload-Fehler auftritt |
| `className` | `string` | Zusätzliche CSS-Klassen für die Container-Komponente |

## API Endpoint

Die Komponente sendet Uploads an: `http://localhost:4321/api/upload-image`

### Request Format

```typescript
// POST /api/upload-image
Content-Type: multipart/form-data

FormData:
- image: File (Bilddatei)
```

### Response Format

```typescript
// Erfolgreicher Upload
{
    "success": true,
    "message": "Bild erfolgreich hochgeladen",
    "data": {
        "fileName": "weather_image_1234567890.jpg",
        "size": 1024000,
        "type": "image/jpeg",
        "metadata": {
            "fileName": "weather_image_1234567890.jpg",
            "originalName": "mein_bild.jpg",
            "size": 1024000,
            "type": "image/jpeg",
            "uploadedAt": "2024-01-15T10:30:00.000Z"
        }
    }
}

// Fehler
{
    "success": false,
    "message": "Fehlermeldung"
}
```

## Styling

Die Komponente verwendet die CSS-Datei `src/styles/imageUpload.css`. Sie können die Styles anpassen, indem Sie diese Datei bearbeiten oder eigene CSS-Klassen über die `className` Prop hinzufügen.

### Wichtige CSS-Klassen

- `.image-upload-container` - Hauptcontainer
- `.dropzone` - Dropzone-Bereich
- `.dropzone.drag-active` - Während Drag & Drop
- `.dropzone.drag-reject` - Bei ungültigen Dateien
- `.dropzone.has-file` - Wenn eine Datei ausgewählt ist
- `.file-info` - Dateiinformationen
- `.upload-progress` - Fortschrittsanzeige

## Server-Setup

Der API-Endpoint `upload-image.ts` muss im Astro-Projekt unter `src/pages/api/` platziert werden.

### Erforderliche Abhängigkeiten

```json
{
    "dependencies": {
        "zod": "^3.x.x"
    }
}
```

### Erweiterte Funktionen

Der API-Endpoint kann erweitert werden für:

- Bildkomprimierung
- Thumbnail-Erstellung
- Metadaten-Extraktion
- Datenbank-Speicherung
- Cloud Storage Upload

## Fehlerbehandlung

Die Komponente behandelt folgende Fehler:

- Datei zu groß (> 10MB)
- Ungültiger Dateityp
- Netzwerkfehler
- Serverfehler

## Browser-Kompatibilität

- Chrome 76+
- Firefox 69+
- Safari 13+
- Edge 79+

## Lizenz

Diese Komponente ist Teil des crowd-wx-editor Projekts. 