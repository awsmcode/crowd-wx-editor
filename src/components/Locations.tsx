import React from 'react'; /** @jsxImportSource react */
import type { TLocation } from "../types/report";

type TLocationProps = {
    locations: TLocation[];
    onSelectLocation: (location: TLocation) => void;
}

const Locations = ({ locations, onSelectLocation }: TLocationProps) => {
    return (
        <div className="categories-container">
            <div className="panel-title">Standort</div>
                {locations.map((location) => (
                    <div
                        className="category-item"
                        onClick={() => {
                            onSelectLocation(location);
                        }}
                        key={location.place}
                    >
                        {location.place}
                    </div>
                ))}
        </div>
        )
};

export default Locations;
