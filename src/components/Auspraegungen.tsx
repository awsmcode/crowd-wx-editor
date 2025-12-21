import React from 'react';
import { getAuspraegungenForCategory, getParameterString } from "../utils/parameters";

import { getString } from "../configs/stringList";

type TAuspraegungenProps = {
    category: string | null;
    onSelectAuspraegung: (auspraegung: string) => void;
    lang: string;
}

const Auspraegungen = ({ category, onSelectAuspraegung, lang }: TAuspraegungenProps) => {
    return (
        <div className="categories-container">
            <div className="panel-title">{category ? getParameterString(category, lang) : getString(lang, 'CATEGORIES_TITLE')}</div>
            {category && getAuspraegungenForCategory(category).map((auspraegung) => (
                <div
                    className="category-item"
                    onClick={() => {
                        onSelectAuspraegung(auspraegung);
                    }}
                    key={auspraegung}
                >
                    {getParameterString(auspraegung, lang)}
                </div>
            ))}
        </div>
    )
};

export default Auspraegungen;
