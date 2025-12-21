import React from 'react';
import { getString } from "../configs/stringList";

type TTimeProps = {
    onSelectTimestamp: (timestamp: number) => void;
    lang: string;
}

function createTimestamps(base: Date | number, offsets: { label: string, minutes: number }[]) {
    const baseDate = typeof base === "number" ? new Date(base) : base;
    return offsets.map(({ label, minutes }) => ({
        label,
        value: Math.floor(new Date(baseDate.getTime() - minutes * 60 * 1000).getTime() / 1000) // Unix-Timestamp in Sekunden
    }));
}

const Time = ({ onSelectTimestamp, lang }: TTimeProps) => {
    const baseDate = Date.now();
    const offsets = [
        { label: getString(lang, "TIME_NOW"), minutes: 0 },
        { label: getString(lang, "TIME_10_MINUTES"), minutes: 10 },
        { label: getString(lang, "TIME_20_MINUTES"), minutes: 20 },
        { label: getString(lang, "TIME_30_MINUTES"), minutes: 30 },
        { label: getString(lang, "TIME_60_MINUTES"), minutes: 60 },
    ];

    const timestamps = createTimestamps(baseDate, offsets);

    return (
        <div className="categories-container">
            <div className="panel-title">{getString(lang, 'TIME_TITLE')}</div>
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
