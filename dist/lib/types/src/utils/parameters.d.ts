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
};
export declare const getCategoryList: () => string[];
export declare const getAuspraegungenList: () => string[];
export declare const getCategoryForAuspraegung: (auspraegung: string) => string;
export declare const getAuspraegungenForCategory: (category: string) => string[];
export declare const getParameterKeys: () => string[];
export declare const getParameterString: (key: string, lang?: string) => string;
