import React from 'react';
import '../styles/imageUpload.css';
interface ImageUploadProps {
    onImageUploaded?: (imageData: any) => void;
    onUploadError?: (error: string) => void;
    className?: string;
    triggerUploadRef?: React.MutableRefObject<(() => Promise<boolean>) | null>;
    lang?: string;
}
declare const ImageUpload: ({ onImageUploaded, onUploadError, className, triggerUploadRef, lang }: ImageUploadProps) => React.JSX.Element;
export default ImageUpload;
