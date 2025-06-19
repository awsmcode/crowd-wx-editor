import React from 'react';
type TAuspraegungenProps = {
    category: string | null;
    onSelectAuspraegung: (auspraegung: string) => void;
};
declare const Auspraegungen: ({ category, onSelectAuspraegung }: TAuspraegungenProps) => React.JSX.Element;
export default Auspraegungen;
