import { useEffect, useState } from 'react';
import { baseUrl } from '../configs';
import { getString } from '../configs/stringList';
import '../styles/summary.css';

/** Wie beim Upload: API liefert einen relativen s3Key; für <img> braucht es die volle URL unter baseUrl. */
function resolveImageSrc(stored: string): string {
    const t = stored.trim();
    if (!t) return '';
    if (/^(https?:|blob:|data:)/i.test(t)) return t;
    const root = baseUrl.replace(/\/$/, '');
    const path = t.replace(/^\//, '');
    return `${root}/${path}`;
}

type TSummaryProps = {
    lang: string;
    category: string | null;
    auspraegung: string | null;
    imageUrl: string | null;
    /** Lokale Datei wie im Upload-Preview – bevorzugt für die Anzeige (Blob-URL). */
    imageFile: File | null;
};

function Summary({ lang, category, auspraegung, imageUrl, imageFile }: TSummaryProps) {
    const [blobPreviewSrc, setBlobPreviewSrc] = useState<string | null>(null);

    useEffect(() => {
        if (!imageFile) {
            setBlobPreviewSrc(null);
            return;
        }
        const url = URL.createObjectURL(imageFile);
        setBlobPreviewSrc(url);
        return () => {
            URL.revokeObjectURL(url);
        };
    }, [imageFile]);

    const categoryLabel = category ? getString(lang, category) : '—';
    const auspraegungLabel = auspraegung ? getString(lang, auspraegung) : '—';
    const resolvedRemote = imageUrl && imageUrl.length > 0 ? resolveImageSrc(imageUrl) : '';
    const displaySrc = blobPreviewSrc || resolvedRemote;
    const hasImage = Boolean(displaySrc);

    return (
        <div className="categories-container summary-panel">
            <div className="panel-title">{getString(lang, 'SUMMARY_PAGE_TITLE')}</div>
            <dl className="summary-list">
                <div className="summary-row">
                    <dt>{getString(lang, 'SUMMARY_FIELD_CATEGORY')}</dt>
                    <dd>{categoryLabel}</dd>
                </div>
                <div className="summary-row">
                    <dt>{getString(lang, 'SUMMARY_FIELD_AUSPRAEGUNG')}</dt>
                    <dd>{auspraegungLabel}</dd>
                </div>
                <div className="summary-row summary-row--image">
                    <dt>{getString(lang, 'SUMMARY_FIELD_IMAGE')}</dt>
                    <dd>
                        {hasImage ? (
                            <img
                                className="summary-image"
                                src={displaySrc}
                                alt={getString(lang, 'IMAGE_UPLOAD_PREVIEW_ALT')}
                            />
                        ) : (
                            <span className="summary-no-image">{getString(lang, 'SUMMARY_NO_IMAGE')}</span>
                        )}
                    </dd>
                </div>
            </dl>
        </div>
    );
}

export default Summary;
