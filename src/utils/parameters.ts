import { getString } from '../constants/strings';

export const CATEGORIES_WITH_AUSPRAEGUNGEN = {
    BLITZE: ['DONNER_UMGEBUNG', 'BLITZE_EINZELNE', 'BLITZE_HAEUFIG', 'BLITZE_EXTREM'],
    WIND: ['WIND_SCHWACH', 'WIND_STARK', 'WIND_STUERMISCH', 'WIND_STURM', 'WIND_ORKAN'],
    HAGEL: ['HAGEL_UNTER_1CM', 'HAGEL_1CM', 'HAGEL_2CM', 'HAGEL_3CM', 'HAGEL_5CM', 'HAGEL_UEBER_7CM'],
    REGEN: ['REGEN_LEICHT', 'REGEN_MITTEL', 'REGEN_KRAEFTIG', 'REGEN_STARK', 'REGEN_EXTREM'],
    GLAETTE: ['GLAETTE_REIF', 'GLAETTE_SCHNEE', 'GLAETTE_UEBERFRIERENDE_NAESSE', 'GLAETTE_GEFRIERENDER_REGEN'],
    SCHNEEFALL: ['SCHNEEFALL_WENIGE_FLOCKEN', 'SCHNEEFALL_LEICHT', 'SCHNEEFALL_MITTEL', 'SCHNEEFALL_STARK'],
    SCHNEEDECKE: [
        'SCHNEEDECKE_SCHNEEMATSCH',
        'SCHNEEDECKE_BIS_1CM',
        'SCHNEEDECKE_BIS_3CM',
        'SCHNEEDECKE_BIS_10CM',
        'SCHNEEDECKE_BIS_20CM',
        'SCHNEEDECKE_BIS_50CM',
        'SCHNEEDECKE_UEBER_50CM',
    ],
    BEWOELKUNG: ['BEWOELKUNG_WOLKENLOS', 'BEWOELKUNG_LEICHT_BEWOELKT', 'BEWOELKUNG_WOLKIG', 'BEWOELKUNG_BEDECKT'],
    NEBEL: ['NEBEL_LEICHT', 'NEBEL_DICHT', 'NEBEL_EXTREM'],
    TORNADO: ['TORNADO_NO_VISIBLE_DAMAGE', 'TORNADO_F0', 'TORNADO_F1', 'TORNADO_F2', 'TORNADO_F3', 'TORNADO_F4'],
};

const CATEGORIES_WITH_AUSPRAEGUNGEN_ARRAY = Object.entries(CATEGORIES_WITH_AUSPRAEGUNGEN).map(([key, value]) => ({
    category: key,
    auspraegungen: value,
}));

export const getCategoryList = () => {
    return Object.entries(CATEGORIES_WITH_AUSPRAEGUNGEN).map(([key]) => key);
};

export const getAuspraegungenList = () => {
    return Object.entries(CATEGORIES_WITH_AUSPRAEGUNGEN)
        .map(([_, values]) => values)
        .flat();
};

export const getCategoryForAuspraegung = (auspraegung: string) => {
    return CATEGORIES_WITH_AUSPRAEGUNGEN_ARRAY.filter((d) => d.auspraegungen.includes(auspraegung))[0].category;
};

export const getAuspraegungenForCategory = (category: string) => {
    return CATEGORIES_WITH_AUSPRAEGUNGEN[category as keyof typeof CATEGORIES_WITH_AUSPRAEGUNGEN];
};

const PARAMETER_KEYS = Array.from(new Set([...getCategoryList(), ...getAuspraegungenList()]));

export const getParameterKeys = () => {
    return PARAMETER_KEYS;
};

export const getParameterString = (key: string, lang: string = 'de'): string => {
    return getString(lang, key);
};
