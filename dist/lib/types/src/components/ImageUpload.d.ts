import React from 'react';
import '../styles/imageUpload.css';
interface ImageUploadProps {
    onUploadError?: (error: string) => void;
    className?: string;
    triggerUploadRef?: React.MutableRefObject<(() => Promise<string>) | null>;
    lang?: string;
    token?: string | null;
}
declare const ImageUpload: ({ onUploadError, className, triggerUploadRef, lang, token }: ImageUploadProps) => React.JSX.Element;
export default ImageUpload;
