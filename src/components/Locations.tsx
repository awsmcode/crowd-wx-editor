
import type { Location } from "../App";

type TLocationProps = {
    locations: Location[];
    onSelectLocation: (location: Location) => void;
}

const Locations = ({ locations, onSelectLocation }: TLocationProps) => {
    return (
        <div className="categories-container">
            <div className="categories-header">Standort</div>
                {locations.map((location) => (
                    <div
                        className="category-item"
                        onClick={() => {
                            onSelectLocation(location);
                        }}
                        key={location.name}
                    >
                        {location.name}
                    </div>
                ))}
        </div>
        )
};

export default Locations;
