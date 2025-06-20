import React from 'react';
import { getParameterString, getCategoryList } from "../utils/parameters";

import "../styles/categories.css";

const Categories = ({
    onSelectCategory,
    params = []
}: {
    onSelectCategory: (category: string) => void,
    params: string[]
}) => {
    return (
    <div className="categories-container">
        <div className="categories-header">Kategorien</div>
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
                    {getParameterString(category)}
                </div>
            ))}

    </div>
    );
};

export default Categories;
