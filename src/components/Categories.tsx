import React from 'react';
import { getParameterString, getCategoryList } from "../utils/parameters";

import "../styles/categories.css";

const Categories = ({ onSelectCategory }: { onSelectCategory: (category: string) => void }) => {
    return (
    <div className="categories-container">
        <div className="categories-header">Kategorien</div>
            {getCategoryList().map((category) => (
                <div
                    className="category-item"
                    onClick={() => {
                        onSelectCategory(category);
                    }}
                    key={category}
                >
                    {getParameterString(category)}
                </div>
            ))}

    </div>
    );
};

export default Categories;
