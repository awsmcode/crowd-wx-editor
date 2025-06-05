export const
    CATEGORIES_WITH_AUSPRAEGUNGEN = {
        BLITZE: [ 'DONNER_UMGEBUNG', 'BLITZE_EINZELNE', 'BLITZE_HAEUFIG', 'BLITZE_EXTREM' ],
        WIND: ['WIND_SCHWACH', 'WIND_STARK','WIND_STUERMISCH', 'WIND_STURM', 'WIND_ORKAN' ],
        HAGEL: ['HAGEL_UNTER_1CM', 'HAGEL_1CM', 'HAGEL_2CM', 'HAGEL_3CM', 'HAGEL_5CM', 'HAGEL_UEBER_7CM' ],
        REGEN: ['REGEN_LEICHT', 'REGEN_MITTEL', 'REGEN_KRAEFTIG', 'REGEN_STARK', 'REGEN_EXTREM' ],
        GLAETTE: ['GLAETTE_REIF', 'GLAETTE_SCHNEE', 'GLAETTE_UEBERFRIERENDE_NAESSE', 'GLAETTE_GEFRIERENDER_REGEN' ],
        SCHNEEFALL: ['SCHNEEFALL_WENIGE_FLOCKEN', 'SCHNEEFALL_LEICHT', 'SCHNEEFALL_MITTEL', 'SCHNEEFALL_STARK'],
        SCHNEEDECKE: ['SCHNEEDECKE_SCHNEEMATSCH', 'SCHNEEDECKE_BIS_1CM', 'SCHNEEDECKE_BIS_3CM',
            'SCHNEEDECKE_BIS_10CM', 'SCHNEEDECKE_BIS_20CM', 'SCHNEEDECKE_BIS_50CM', 'SCHNEEDECKE_UEBER_50CM'],
        BEWOELKUNG: ['BEWOELKUNG_WOLKENLOS', 'BEWOELKUNG_LEICHT_BEWOELKT', 'BEWOELKUNG_WOLKIG', 'BEWOELKUNG_BEDECKT' ],
        NEBEL: ['NEBEL_LEICHT', 'NEBEL_DICHT', 'NEBEL_EXTREM' ],
        TORNADO: ['TORNADO_NO_VISIBLE_DAMAGE', 'TORNADO_F0', 'TORNADO_F1', 'TORNADO_F2', 'TORNADO_F3', 'TORNADO_F4' ]
    },
    CATEGORIES_WITH_AUSPRAEGUNGEN_ARRAY = Object.entries(CATEGORIES_WITH_AUSPRAEGUNGEN).map(([key, value]) => ({
        category: key,
        auspraegungen: value
    })),

    getCategoryList = () => {
        return Object.entries(CATEGORIES_WITH_AUSPRAEGUNGEN).map(([key]) => (key));
    },
    getAuspraegungenList = () => {
        return Object.entries(CATEGORIES_WITH_AUSPRAEGUNGEN).map(([_, values]) => (values)).flat();
    },

    getCategoryForAuspraegung = (auspraegung: string) => {
        return (CATEGORIES_WITH_AUSPRAEGUNGEN_ARRAY).filter(d => d.auspraegungen.includes(auspraegung))[0].category;
    },

    getAuspraegungenForCategory = (category: string) => {
        return CATEGORIES_WITH_AUSPRAEGUNGEN[category as keyof typeof CATEGORIES_WITH_AUSPRAEGUNGEN];
    },
    AUSPRAEGUNGEN_STRINGS: { [key: string]: string } = {

        // Blitze, Blitz-Intensität
        BLITZE: 'Blitze',
        DONNER_UMGEBUNG: 'Donner in der Umgebung',
        BLITZE_EINZELNE: 'schwach', // > 1min zwischen Blitzen
        BLITZE_HAEUFIG: 'stark', // < 1min zwischen Blitzen
        BLITZE_EXTREM: 'extrem', // <10sec zwischen Blitzen

        // Wind
        WIND: 'Wind',
        WIND_SCHWACH: 'schwach', // 'Schwacher Wind', // Dünne Zweige schwanken
        WIND_STARK: 'stark', // 'Starker Wind ', // Starke Äste schwanken
        WIND_STUERMISCH: 'stürmisch', // 'Stürmischer Wind',// Dnne Zweige brechen, Möbel umgeweht
        WIND_STURM: 'Sturm', // Starke Äste brechen, Schäden an Häusern
        WIND_ORKAN : 'Orkan', // Große Bäume entwurzelt, Dächer abgedeckt

        // Hagel
        HAGEL: 'Hagel',
        HAGEL_UNTER_1CM: 'unter 1 cm', // Linse
        HAGEL_1CM: '1 cm', // Erbse
        HAGEL_2CM: '2 cm', // 10 cent Münze
        HAGEL_3CM: '3 cm', // Kronkorken
        HAGEL_5CM: '5 cm', // Golfball
        HAGEL_UEBER_7CM : 'über 7 cm', // Tennisball

        // zusatzatributen hagel
        HAGEL_GESCHLOSSENE_HAGELDECKE: 'geschlossene Hageldecke',
        HAGEL_SCHADEN_PFLANZEN: 'Schäden an Pflenzen',
        HAGEL_SCHADEN_DACHFENSTER: 'Bruch von Dachfenstern und Gewächshäusern',
        HAGEL_SCHADEN_VEREINZELT: 'vereinzelte Schäden an Dachziegel, Fensterscheiben und Fassaden',
        HAGEL_SCHADEN_ZERSTOERERISCH : 'zerstörische Schäden an Dächern, Fenstern und Fahrzeugen',

        // Regen, Intensität des Regens
        REGEN: 'Regen',
        REGEN_LEICHT: 'leicht', // (Niesel- oder Landregen)', 
        REGEN_MITTEL: 'mittel', // (Pfützenbildung in Senken)
        REGEN_KRAEFTIG: 'kräftig', // (Wasserschicht auf Straßen)
        REGEN_STARK: 'stark', // Überschwemmungen
        REGEN_EXTREM: 'extrem', // Sturzbäche

        // Glätte, Ursache der Glätte
        GLAETTE: 'Glätte',
        GLAETTE_REIF: 'Reifglätte', //
        GLAETTE_SCHNEE: 'Schneeglätte', //
        GLAETTE_UEBERFRIERENDE_NAESSE: 'überfrierende Nässe', //
        GLAETTE_GEFRIERENDER_REGEN: 'gefrierender Regen', //

        GLAETTE_GESCHLOSSENE_SCHICHT: 'geschlossene Schicht',
        GLAETTE_DICKE_ICE_UEBER_1CM: 'über 1 cm (Fingerdick',
        GLAETTE_DICKE_ICE_BIS_1CM: 'unter 1 cm (Wellpappe)',
        GLAETTE_DICKE_SNOW_BIS_5CM: 'unter 5 cm',
        GLAETTE_DICKE_SNOW_BIS_20CM: 'unter 20 cm',
        GLAETTE_DICKE_SNOW_BIS_50CM: 'unter 50 cm',
        GLAETTE_DICKE_SNOW_UEBER_50CM: 'über 50 cm',

        // Schneefall
        SCHNEEFALL: 'Schneefall',
        SCHNEEFALL_WENIGE_FLOCKEN: 'wenige Flocken', //
        SCHNEEFALL_LEICHT: 'leicht', // kaum Sicheinschränkungen
        SCHNEEFALL_MITTEL: 'mittel', // Sich durch Schnee eingeschränkt
        SCHNEEFALL_STARK : 'stark', // keine Sicht mehr

        // Schneedecke
        SCHNEEDECKE: 'Schneedecke',
        SCHNEEDECKE_SCHNEEMATSCH: 'Schneematsch', //
        SCHNEEDECKE_BIS_1CM: 'bis 1 cm', //
        SCHNEEDECKE_BIS_3CM: 'bis zu 3 cm', //
        SCHNEEDECKE_BIS_5CM: 'bis zu 5 cm', //
        SCHNEEDECKE_BIS_10CM: 'bis zu 10 cm', //
        SCHNEEDECKE_BIS_20CM: 'bis zu 20 cm', //
        SCHNEEDECKE_BIS_50CM: 'bis zu 50 cm', //
        SCHNEEDECKE_UEBER_50CM: 'über 50 cm', //

        SCHNEEDECKE_FLECKWEISE: 'Schneeflecken',
        SCHNEEDECKE_GESCHLOSSENE_SCHNEEDECKE : 'geschlossene Schneedecke',

        // Bewölkung
        BEWOELKUNG: 'Bewölkung',
        BEWOELKUNG_WOLKENLOS: 'wolkenlos',
        BEWOELKUNG_LEICHT_BEWOELKT: 'leicht bewölkt',
        BEWOELKUNG_WOLKIG: 'wolkig',
        BEWOELKUNG_BEDECKT: 'bedeckt',

        // Nebel, Sichtweite
        NEBEL: 'Nebel',
        NEBEL_LEICHT: 'unter 1000 m', // leichter Nebel
        NEBEL_DICHT: 'unter 200 m', // dichter Nebel
        NEBEL_EXTREM: 'unter 50 m', // extrem dichter Nebel

        // Tornado
        TORNADO: 'Tornado',
        TORNADO_NO_VISIBLE_DAMAGE: 'keine Schäden sichtbar',
        TORNADO_F0: 'leicht', //F0: Schäden an Dächern und Bäumen
        TORNADO_F1: 'moderat', //F1: Dächer abgedeckt, Bäume umgeworfen
        TORNADO_F2: 'signifikant', //F2: Große Bäume entwurzelt
        TORNADO_F3: 'schwer', //F3: Wände zerstört, Autos bewegt
        TORNADO_F4: 'verheerend', //F4: Häuser zerstört, große Gegenstände aufgewirbelt

    },


    
    getParameterKeys = () => {
        return Object.keys(AUSPRAEGUNGEN_STRINGS) as (keyof typeof AUSPRAEGUNGEN_STRINGS)[];
    },

    getParameterString = (key: string): string => {
        return AUSPRAEGUNGEN_STRINGS[key] || key;
    }

