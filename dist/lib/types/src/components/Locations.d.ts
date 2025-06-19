import React from 'react'; /** @jsxImportSource react */
import type { TLocation } from "../types/report";
type TLocationProps = {
    locations: TLocation[];
    onSelectLocation: (location: TLocation) => void;
};
declare const Locations: ({ locations, onSelectLocation }: TLocationProps) => React.JSX.Element;
export default Locations;
