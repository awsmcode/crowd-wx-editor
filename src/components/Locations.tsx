import React from 'react'; /** @jsxImportSource react */
import { getString } from "../configs/stringList";
import type { TLocation } from "../types/report";

type TLocationProps = {
    locations: TLocation[];
    onSelectLocation: (location: TLocation) => void;
    lang: string;
}

const Locations = ({ locations, onSelectLocation, lang }: TLocationProps) => {
    return (
        <div className="categories-container">
            <div className="panel-title">{getString(lang, 'LOCATION_TITLE')}</div>
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
