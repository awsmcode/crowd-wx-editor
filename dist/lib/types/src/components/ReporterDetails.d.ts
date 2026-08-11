import '../styles/reporterDetails.css';
type TReporterDetailsProps = {
    lang: string;
    name: string;
    description: string;
    onNameChange: (value: string) => void;
    onDescriptionChange: (value: string) => void;
};
declare const ReporterDetails: ({ lang, name, description, onNameChange, onDescriptionChange, }: TReporterDetailsProps) => JSX.Element;
export default ReporterDetails;
