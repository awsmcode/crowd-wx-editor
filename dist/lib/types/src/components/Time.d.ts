import React from 'react';
type TTimeProps = {
    onSelectTimestamp: (timestamp: number) => void;
    lang: string;
};
declare const Time: ({ onSelectTimestamp, lang }: TTimeProps) => React.JSX.Element;
export default Time;
