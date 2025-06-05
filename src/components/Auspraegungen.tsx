import { getAuspraegungenForCategory, getParameterString } from "../utils/parameters";

type TAuspraegungenProps = {
    category: string | null;
    onSelectAuspraegung: (auspraegung: string) => void;
}

const Auspraegungen = ({ category, onSelectAuspraegung }: TAuspraegungenProps) => {
    return (
        <div className="categories-container">
            <div className="categories-header">{category ? getParameterString(category) : ''}</div>
                {category && getAuspraegungenForCategory(category).map((auspraegung) => (
                    <div
                        className="category-item"
                        onClick={() => {
                            onSelectAuspraegung(auspraegung);
                        }}
                        key={auspraegung}
                    >
                        {getParameterString(auspraegung)}
                    </div>
                ))}
        </div>
    )
};

export default Auspraegungen;