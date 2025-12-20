import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import '../styles/imageUpload.css';
import { baseUrl } from '../configs';
import { getString } from '../Constants/strings';

interface ImageUploadProps {
    onImageUploaded?: (imageData: any) => void;
    onUploadError?: (error: string) => void;
    className?: string;
    triggerUploadRef?: React.MutableRefObject<(() => Promise<boolean>) | null>;
    lang?: string;
}

const ImageUpload = ({ onImageUploaded, onUploadError, className, triggerUploadRef, lang = 'de' }: ImageUploadProps) => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
        // Prüfe abgelehnte Dateien
        if (rejectedFiles.length > 0) {
            const rejection = rejectedFiles[0];
            if (rejection.errors[0]?.code === 'file-too-large') {
                setErrorMessage(getString(lang, 'ERROR_FILE_TOO_LARGE'));
            } else if (rejection.errors[0]?.code === 'file-invalid-type') {
                setErrorMessage(getString(lang, 'ERROR_INVALID_FILE_TYPE'));
            } else {
                setErrorMessage(getString(lang, 'ERROR_GENERIC_UPLOAD'));
            }
            return;
        }

        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            setUploadedFile(file);
            setErrorMessage('');
            setUploadStatus('idle');
            setUploadProgress(0);
        }
    }, [lang]);

    const uploadFile = async (file: File): Promise<void> => {
        setUploadStatus('uploading');
        setUploadProgress(0);

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const xhr = new XMLHttpRequest();

            // Fortschrittsverfolgung
            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100);
                    setUploadProgress(progress);
                }
            });

            // Promise-basierte XHR
            const response = await new Promise<XMLHttpRequest>((resolve, reject) => {
                xhr.addEventListener('load', () => resolve(xhr));
                xhr.addEventListener('error', () => reject(new Error('Upload failed')));
                xhr.addEventListener('abort', () => reject(new Error('Upload aborted')));

                xhr.open('POST', `${baseUrl}/upload/photo`);
                xhr.send(formData);
            });

            if (response.status >= 200 && response.status < 300) {
                setUploadStatus('success');
                setUploadProgress(100);
                try {
                    const result = JSON.parse(response.responseText);
                    console.log('Upload erfolgreich:', result);
                    // Callback für erfolgreichen Upload
                    if (onImageUploaded) {
                        onImageUploaded(result);
                    }
                } catch (e) {
                    console.log('Upload erfolgreich, aber keine JSON-Antwort');
                    if (onImageUploaded) {
                        onImageUploaded({ fileName: 'unknown', size: 0, type: 'unknown' });
                    }
                }
            } else {
                const errorMsg = `${getString(lang, 'ERROR_UPLOAD_WITH_STATUS')} ${response.status} ${response.statusText}`;
                setUploadStatus('error');
                setErrorMessage(errorMsg);
                if (onUploadError) {
                    onUploadError(errorMsg);
                }
                throw new Error(errorMsg);
            }
        } catch (error) {
            const errorMsg = getString(lang, 'ERROR_NETWORK_UPLOAD');
            setUploadStatus('error');
            setErrorMessage(errorMsg);
            console.error('Upload error:', error);
            if (onUploadError) {
                onUploadError(errorMsg);
            }
            throw error;
        }
    };

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
        },
        maxSize: 10 * 1024 * 1024, // 10MB
        multiple: false
    });

    const removeFile = () => {
        setUploadedFile(null);
        setUploadStatus('idle');
        setUploadProgress(0);
        setErrorMessage('');
    };

    const handleUpload = async (): Promise<boolean> => {
        if (uploadedFile) {
            try {
                await uploadFile(uploadedFile);
                return true;
            } catch (error) {
                return false;
            }
        }
        return true; // Kein Bild vorhanden, also erfolgreich
    };

    // Expose the upload function via ref
    React.useEffect(() => {
        if (triggerUploadRef) {
            triggerUploadRef.current = handleUpload;
        }
    }, [uploadedFile, triggerUploadRef]);

    return (
        <div className={`image-upload-container ${className || ''}`}>
            <div className="panel-title">{getString(lang, 'IMAGE_UPLOAD_TITLE')}</div>
            <p className="upload-description">
                {getString(lang, 'IMAGE_UPLOAD_DESCRIPTION')}
            </p>

            {errorMessage && (
                <div className="error-message">
                    ⚠️ {errorMessage}
                </div>
            )}

            {uploadStatus === 'success' && (
                <div className="success-message">
                    {getString(lang, 'IMAGE_UPLOAD_SUCCESS')}
                </div>
            )}

            <div
                {...getRootProps()}
                className={`dropzone ${isDragActive ? 'drag-active' : ''} ${isDragReject ? 'drag-reject' : ''} ${uploadedFile ? 'has-file' : ''}`}
            >
                <input {...getInputProps()} />

                {uploadedFile ? (
                    <div className="file-info">
                        <div className="file-preview">
                            <img
                                src={URL.createObjectURL(uploadedFile)}
                                alt={getString(lang, 'IMAGE_UPLOAD_PREVIEW_ALT')}
                                className="preview-image"
                            />
                        </div>
                        {/*
                        <div className="file-details">
                            <p><strong>Dateiname:</strong> {uploadedFile.name}</p>
                            <p><strong>Größe:</strong> {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                            <p><strong>Typ:</strong> {uploadedFile.type}</p>
                        </div>
                        */}
                        {uploadStatus === 'uploading' && (
                            <div className="upload-progress">
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${uploadProgress}%` }}
                                    ></div>
                                </div>
                                <p>{getString(lang, 'IMAGE_UPLOAD_PROGRESS')} {uploadProgress}%</p>
                            </div>
                        )}
                        <div className="button-group">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile();
                                }}
                                className="remove-button"
                            >
                                {getString(lang, 'IMAGE_UPLOAD_REMOVE')}
                            </button>
                            {/*uploadStatus === 'idle' && (
                                <button
                                    type="button"
                                    onClick={async (e) => {
                                        e.stopPropagation();
                                        await handleUpload();
                                    }}
                                    className="upload-button"
                                >
                                    Bild hochladen
                                </button>
                            )*/}
                        </div>
                    </div>
                ) : (
                    <div className="dropzone-content">
                        {isDragActive ? (
                            <div className="drag-message">
                                <svg className="upload-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <p>{getString(lang, 'IMAGE_UPLOAD_DROP_FILE')}</p>
                            </div>
                        ) : (
                            <div className="upload-message">
                                <svg className="upload-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <p><strong>{getString(lang, 'IMAGE_UPLOAD_SELECT')}</strong> {getString(lang, 'IMAGE_UPLOAD_DRAG_INSTRUCTION')}</p>
                                <p className="upload-hint">{getString(lang, 'IMAGE_UPLOAD_HINT')}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUpload;
