import '../styles/summary.css';
type TSummaryProps = {
    lang: string;
    category: string | null;
    auspraegung: string | null;
    imageUrl: string | null;
    /** Lokale Datei wie im Upload-Preview – bevorzugt für die Anzeige (Blob-URL). */
    imageFile: File | null;
};
declare function Summary({ lang, category, auspraegung, imageUrl, imageFile }: TSummaryProps): JSX.Element;
export default Summary;
