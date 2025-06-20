import React from 'react';
import "../styles/categories.css";
declare const Categories: ({ onSelectCategory, params }: {
    onSelectCategory: (category: string) => void;
    params: string[];
}) => React.JSX.Element;
export default Categories;
