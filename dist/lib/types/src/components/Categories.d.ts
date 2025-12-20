import React from 'react';
import "../styles/categories.css";
declare const Categories: ({ onSelectCategory, params, lang, }: {
    onSelectCategory: (category: string) => void;
    params: string[];
    lang: string;
}) => React.JSX.Element;
export default Categories;
