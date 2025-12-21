import React from 'react';
import { getParameterString, getCategoryList } from "../utils/parameters";
import { getString } from "../configs/stringList";

import "../styles/categories.css";

const Categories = ({
    onSelectCategory,
    params = [],
    lang,
}: {
    onSelectCategory: (category: string) => void,
    params: string[],
    lang: string,
}) => {
    return (
        <div className="categories-container">
            <div className="panel-title">{getString(lang, 'CATEGORIES_TITLE')}</div>
            {getCategoryList()
                .filter(category => (params === null || params.includes(category.toLowerCase()) || params.length === 0))
                .map((category) => (
                    <div
                        className="category-item"
                        onClick={() => {
                            onSelectCategory(category);
                        }}
                        key={category}
                    >
                        {getParameterString(category, lang)}
                    </div>
                ))}

        </div>
    );
};

export default Categories;
