import deStrings from './de';
import enStrings from './en';
import roStrings from './ro';

export type SupportedLanguage = 'de' | 'en' | 'ro';

const DEFAULT_LANGUAGE: SupportedLanguage = 'de';

export const STRINGS: Record<SupportedLanguage, Record<string, string>> = {
    de: deStrings,
    en: enStrings,
    ro: roStrings,
};

export const getString = (lang: string, key: string): string => {
    const language = (lang as SupportedLanguage) in STRINGS ? (lang as SupportedLanguage) : DEFAULT_LANGUAGE;
    return STRINGS[language][key] ?? STRINGS[DEFAULT_LANGUAGE][key] ?? key;
};
