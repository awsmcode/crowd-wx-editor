import React from 'react';
type TTimeProps = {
    onSelectTimestamp: (timestamp: number) => void;
};
declare const Time: ({ onSelectTimestamp }: TTimeProps) => React.JSX.Element;
export default Time;
