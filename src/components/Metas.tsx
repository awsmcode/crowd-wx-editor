import { useState } from "react";
import type { Location } from "../App";


const Metas = ({ locations, category, auspraegung }: { locations: Location[], category: string | null, auspraegung: string | null }) => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    return (
        <div className="categories-container">
            <div className="categories-header">Kategorien</div>
                {locations.map((location) => (
                    <div
                        className="category-item"
                        onClick={() => {
                            setSelectedLocation(location);
                        }}
                        key={location.name}
                    >
                        {location.name}
                    </div>
                ))}
    
        </div>
        )
};

export default Metas;
