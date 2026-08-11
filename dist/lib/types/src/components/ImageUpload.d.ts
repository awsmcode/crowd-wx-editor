import React from 'react';
import '../styles/imageUpload.css';
interface ImageUploadProps {
    onUploadError?: (error: string) => void;
    /** Für Vorschau außerhalb (z. B. Summary): gleiche Datei wie im Dropzone-Preview. */
    onImageFileChange?: (file: File | null) => void;
    className?: string;
    triggerUploadRef?: React.MutableRefObject<(() => Promise<string>) | null>;
    lang?: string;
    token?: string | null;
}
declare const ImageUpload: ({ onUploadError, onImageFileChange, className, triggerUploadRef, lang, token }: ImageUploadProps) => JSX.Element;
export default ImageUpload;
