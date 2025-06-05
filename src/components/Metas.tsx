import type { Location } from "../App";


const Metas = ({ locations, category, auspraegung }: { locations: Location[], category: string | null, auspraegung: string | null }) => {
    return <div style={{ overflow: 'wrap' }}>

        {locations.map((location) => (
            <div key={location.name}>
                {location.name}
                <br />
            </div>
        ))}
        <br />
        {category}
        <br />
        {auspraegung}
        <br />
        <br />
        <br />
        <br />
    </div>;
};

export default Metas;
