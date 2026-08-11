import "../styles/categories.css";
declare const Categories: ({ onSelectCategory, params, lang, }: {
    onSelectCategory: (category: string) => void;
    params: string[];
    lang: string;
}) => JSX.Element;
export default Categories;
