// CSS-Import für die Library - alle Styles in einer Datei
import '../src/styles/styles.css'

export function helloDebug(thing: string): string {
    return `My Hello ${thing}!`
}

export { CrowdWxEditor } from '../src/App.tsx';
export type { TLocation } from '../src/types/report.d';
