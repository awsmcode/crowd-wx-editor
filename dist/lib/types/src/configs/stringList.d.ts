export type SupportedLanguage = 'de' | 'en' | 'ro';
export declare const STRINGS: Record<SupportedLanguage, Record<string, string>>;
export declare const getString: (lang: string, key: string) => string;
