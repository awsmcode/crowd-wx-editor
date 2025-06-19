import React from 'react';
import "../styles/categories.css";
declare const Categories: ({ onSelectCategory }: {
    onSelectCategory: (category: string) => void;
}) => React.JSX.Element;
export default Categories;
