import React from 'react'; /** @jsxImportSource react */
import type { TLocation } from "../types/report";
type TLocationProps = {
    locations: TLocation[];
    onSelectLocation: (location: TLocation) => void;
    lang: string;
};
declare const Locations: ({ locations, onSelectLocation, lang }: TLocationProps) => React.JSX.Element;
export default Locations;
