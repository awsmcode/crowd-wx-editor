

type TTimeProps = {
    onSelectTimestamp: (timestamp: number) => void;
}

function createTimestamps(base: Date | number, offsets: { label: string, minutes: number }[]) {
    const baseDate = typeof base === "number" ? new Date(base) : base;
    return offsets.map(({ label, minutes }) => ({
        label,
        value: Math.floor(new Date(baseDate.getTime() - minutes * 60 * 1000).getTime() / 1000) // Unix-Timestamp in Sekunden
    }));
}


const Time = ({ onSelectTimestamp }: TTimeProps) => {
    const baseDate = Date.now(); // new Date("2025-01-01T12:00:00"); // oder Date.now()
    const offsets = [
        { label: "jetzt", minutes: 0 },
        { label: "vor 10 Minuten", minutes: 10 },
        { label: "vor 20 Minuten", minutes: 20 },
        { label: "vor 30 Minuten", minutes: 30 },
        { label: "vor eine Stunde", minutes: 60 },
    ];

    const timestamps = createTimestamps(baseDate, offsets);

    return (
        <div className="categories-container">
            <div className="categories-header">Zeit</div>
                {timestamps.map((timestamp) => (
                    <div
                        className="category-item"
                        onClick={() => {
                            onSelectTimestamp(timestamp.value);
                        }}
                        key={timestamp.value}
                    >
                        {timestamp.label}
                    </div>
                ))}
        </div>
        )
};

export default Time;
