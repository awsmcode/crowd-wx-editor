type TTimeProps = {
    onSelectTimestamp: (timestamp: number) => void;
    lang: string;
};
declare const Time: ({ onSelectTimestamp, lang }: TTimeProps) => JSX.Element;
export default Time;
