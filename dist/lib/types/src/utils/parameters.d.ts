export declare const CATEGORIES_WITH_AUSPRAEGUNGEN: {
    BLITZE: string[];
    WIND: string[];
    HAGEL: string[];
    REGEN: string[];
    GLAETTE: string[];
    SCHNEEFALL: string[];
    SCHNEEDECKE: string[];
    BEWOELKUNG: string[];
    NEBEL: string[];
    TORNADO: string[];
}, CATEGORIES_WITH_AUSPRAEGUNGEN_ARRAY: {
    category: string;
    auspraegungen: string[];
}[], getCategoryList: () => string[], getAuspraegungenList: () => string[], getCategoryForAuspraegung: (auspraegung: string) => string, getAuspraegungenForCategory: (category: string) => string[], AUSPRAEGUNGEN_STRINGS: {
    [key: string]: string;
}, getParameterKeys: () => (keyof typeof AUSPRAEGUNGEN_STRINGS)[], getParameterString: (key: string) => string;
