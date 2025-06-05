import { getAuspraegungenForCategory, getParameterString } from "../utils/parameters";

const Auspraegungen = ({ category, onSelectAuspraegung }: { category: string | null, onSelectAuspraegung: (auspraegung: string) => void }) => {
    return <div>Auspraegungen
aus für {category}
        {category && (
        <ul>
            {getAuspraegungenForCategory(category).map((auspraegung) => (
                <li onClick={() => {
                    onSelectAuspraegung(auspraegung);
                }} key={auspraegung}>{getParameterString(auspraegung)}</li>
                ))}
            </ul>
        )}
    </div>;
};

export default Auspraegungen;