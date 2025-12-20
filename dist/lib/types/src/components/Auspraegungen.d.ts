import React from 'react';
type TAuspraegungenProps = {
    category: string | null;
    onSelectAuspraegung: (auspraegung: string) => void;
    lang: string;
};
declare const Auspraegungen: ({ category, onSelectAuspraegung, lang }: TAuspraegungenProps) => React.JSX.Element;
export default Auspraegungen;
