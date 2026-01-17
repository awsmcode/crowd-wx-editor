import React from 'react';
import type { TLocation } from './types/report';
import type { THostCallback } from './utils/hostCallback';
import './App.css';
import './styles/categories.css';
import './styles/messages.css';
type TAppProps = {
    token: string | null;
    locations: TLocation[];
    params: string[] | null;
    source: string;
    isPublic: boolean;
    lang: string;
    onReport?: THostCallback | null;
};
declare function App({ token, locations, params, source, isPublic, lang, onReport, }: TAppProps): React.JSX.Element;
export default App;
export { App as CrowdWxEditor };
