import { getString } from '../configs/stringList';
import '../styles/reporterDetails.css';

type TReporterDetailsProps = {
    lang: string;
    name: string;
    description: string;
    onNameChange: (value: string) => void;
    onDescriptionChange: (value: string) => void;
};

const ReporterDetails = ({
    lang,
    name,
    description,
    onNameChange,
    onDescriptionChange,
}: TReporterDetailsProps) => {
    return (
        <div className="reporter-details-container">
            <div className="panel-title">{getString(lang, 'REPORTER_DETAILS_TITLE')}</div>
            <label htmlFor="reporter-name" className="reporter-details-label">
                {getString(lang, 'REPORTER_NAME_LABEL')}
            </label>
            <input
                id="reporter-name"
                type="text"
                value={name}
                onChange={(event) => onNameChange(event.target.value)}
                className="reporter-details-input"
                placeholder={getString(lang, 'REPORTER_NAME_PLACEHOLDER')}
            />

            <label htmlFor="reporter-description" className="reporter-details-label">
                {getString(lang, 'REPORTER_DESCRIPTION_LABEL')}
            </label>
            <textarea
                id="reporter-description"
                value={description}
                onChange={(event) => onDescriptionChange(event.target.value)}
                className="reporter-details-textarea"
                rows={4}
                placeholder={getString(lang, 'REPORTER_DESCRIPTION_PLACEHOLDER')}
            />
        </div>
    );
};

export default ReporterDetails;
