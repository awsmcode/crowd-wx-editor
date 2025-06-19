import React from 'react';
import type { TLocation } from './types/report';
import './App.css';
import './styles/categories.css';
import './styles/messages.css';
type TAppProps = {
    token: string | null;
    locations: TLocation[];
};
declare function App({ token, locations }: TAppProps): React.JSX.Element;
export default App;
export { App as CrowdWxEditor };
