import { getParameterString } from "../utils/parameters";

import { getCategoryList } from "../utils/parameters";

const Categories = ({ onSelectCategory }: { onSelectCategory: (category: string) => void }) => {
    return <div>Categories


        <ul>
            {getCategoryList().map((category) => (
                <li onClick={() => {
                    onSelectCategory(category);
                }} key={category}>{getParameterString(category)}</li>
            ))}
        </ul>
    </div>;
};

export default Categories;