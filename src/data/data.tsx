import { createLink } from "./createLink";
import { Data, MobileType } from "./dataTypes";

export const data: Data[] = [
    {
        title: "Informacje o portach",
        legend: [
            {
                key: '⊕',
                item: "dodatkowo niektóre mariny w niektórych innych rejonach"
            },
            {
                key: 'PL',
                item: "dotyczy tylko danego kraju"
            }
        ],
        data: [
            {
                link: "https://portuj.pl/",
                desc: {
                    marines: {
                        inland: true
                    },
                    area: "Polska"
                },
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "pl.portuj.portujpl"
                    },
                    {
                        type: MobileType.iOS,
                        id: "portuj.pl/id1123472445"
                    }
                ],
                star: true,
                modifiedDate: new Date().toISOString()
            },
            {
                link: createLink("https://marinaguide.adac.de/marinas"),
                desc: {
                    marines: 'all',
                    area: "Europa i terytoria krajów europejskich"
                },
                star: true
            },
            {
                link: createLink("http://www.svenskagasthamnar.se/se/sok-via-karta"),
                desc: {
                    marines: 'all',
                    area: "Szwecja i wyspy szwedzkie"
                }
            },
            {
                link: "http://marinasguide.com.au",
                desc: {
                    marines: 'all',
                    area: "Australia i Oceania"
                }
            },
            {
                link: createLink("http://which-marina.com/International.asp?SAS=International"),
                desc: {
                    marines: {
                        inland: 'GB',
                        sea: true
                    },
                    area: {
                        area: 'Wyspy Brytyjskie i południowa Europa',
                        legendItems: ['⊕']
                    }
                }
            },
            {
                link: createLink("https://marina-guide.de/advanced-search/"),
                desc: {
                    marines: 'all',
                    area: {
                        area: 'Europa i terytoria krajów europejskich',
                        legendItems: ['⊕']
                    }
                },
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "de.stasch.marina_guide"
                    },
                    {
                        type: MobileType.iOS,
                        id: "marina-guide/id1133291133"
                    }
                ]
            },
            {
                link: "http://marinas.pboextra.co.uk",
                desc: {
                    marines: 'all',
                    area: "Wyspy Brytyjskie"
                },
                subItems: [
                    {
                        desc: "Mapa",
                        link: createLink("http://marinas.pboextra.co.uk/charts.php", 'pathname')
                    }
                ]
            },
            {
                link: "http://www.danskehavnelods.dk",
                desc: {
                    marines: 'all',
                    area: "Dania"
                }
            },
            {
                link: "https://marinas.com",
                desc: {
                    marines: 'all',
                    area: "prawie cały Świat (bez Polski)"
                },
                subItems: [
                    {
                        desc: "Mapa",
                        link: createLink("https://marinas.com/map?lat=55.29191668658319&lon=4.807571007164512&zoom=3.315265552181933", 'pathname')
                    }
                ]
            }
        ]
    },
    {
        title: "Meteo i inne prognozy",
        data: [
            {
                link: "https://windy.com",
                desc: "Prognozy wiatrowe i meteo w formie mapy interaktywnej",
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "com.windyty.android"
                    },
                    {
                        type: MobileType.iOS,
                        id: "windytv-windyty/id1161387262"
                    }
                ],
                star: true
            },
            {
                link: "http://pogodynka.pl",
                desc: "Prognozy meteo i specjalistyczne, radary pogodowe, mapy synoptyczne",
                subItems: [
                    {
                        desc: "Radar na Polskę",
                        link: createLink("http://pogodynka.pl/polska/radary", 'pathname')
                    },
                    {
                        desc: "Radar na Europę",
                        link: createLink("http://pogodynka.pl/radareuro", 'pathname')
                    },
                    {
                        desc: "Mapa synoptyczna PL",
                        link: createLink("http://pogodynka.pl/polska/mapa_synoptyczna", 'pathname')
                    },
                    {
                        desc: "Prognozy żeglarskie",
                        link: "http://zagle.pogodynka.pl/"
                    },
                    {
                        desc: "Prognozy morskie",
                        link: "http://baltyk.pogodynka.pl/"
                    }
                ],
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "com.pentacomp.pogodynkapogoda",
                        hint: "- pogoda IMGW"
                    },
                    {
                        type: MobileType.Android,
                        id: "com.pentacomp.pogodynkaalert",
                        hint: "- ostrzeżenia IMGW"
                    }
                ],
                star: true
            },
            {
                link: "https://www.ventusky.com",
                desc: "Prognozy wiatrowe i meteo w formie mapy interaktywnej",
                star: true
            },
            {
                link: "http://model.ocean.univ.gda.pl/php/frame.php?area=Baltyk",
                desc: "Prognoza ekohydrodynamiczna (m.in. prądy) na Bałtyk i Zatoki polskie"
            },
            {
                link: "https://windguru.cz",
                desc: "Prognozy wiatrowe i meteo",
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "cz.windguru.wgapp"
                    }
                ],
                subItems: [
                    {
                        desc: "Mapa",
                        link: createLink("https://windguru.cz/map", 'pathname')
                    }
                ]
            },
            {
                link: "https://meteoblue.com/pl/",
                desc: "Prognozy numeryczne dla dowolnego miejsca na świecie",
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "com.meteoblue.droid"
                    },
                    {
                        type: MobileType.iOS,
                        id: "meteoblue/id994459137"
                    }
                ]
            },
            {
                link: "https://meteo.pl",
                desc: "Prognozy numeryczne na Europę Centralną i Północną",
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "pl.atk.meteo"
                    }
                ],
                subItems: [
                    {
                        desc: "Mapa interaktywna",
                        link: "http://mapy.meteo.pl/"
                    }
                ]
            },
            {
                link: "https://blids.de",
                desc: "Niemiecka mapa wyładowań atmosferycznych na Polskę, UK, Niemcy itd."
            },
            {
                link: "https://yr.no",
                desc: "Norweski portal pogodowy",
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "no.nrk.yr"
                    },
                    {
                        type: MobileType.iOS,
                        id: "yr.no/id490989206"
                    }
                ]
            }
        ]
    },
    {
        title: "Mapy na urządzenia mobilne",
        data: [
            {
                link: "http://navionics.com",
                desc: "Navionics Boating",
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "it.navionics.singleAppMarineLakes"
                    },
                    {
                        type: MobileType.Android,
                        id: "it.navionics.singleAppMarineLakesHD",
                        hint: "Tablet"
                    },
                    {
                        type: MobileType.iOS,
                        id: "boating-marine-lakes/id744920098"
                    }
                ],
                star: true
            },
            {
                link: "https://opencpn.org",
                desc: 'Otwarte mapy nawigacyjne<br />(Wymaga osobnego pobrania map z internetu)',
                mobile: [
                    {
                        type: MobileType.PC,
                        href: "https://opencpn.org/OpenCPN/info/downloadopencpn.html"
                    },
                    {
                        type: MobileType.Android,
                        id: "org.opencpn.opencpn"
                    },
                    {
                        type: MobileType.Android,
                        id: "org.opencpn.opencpn_free",
                        hint: "- darmowa"
                    }
                ],
                star: true
            },
            {
                link: "http://taider.pl",
                desc: "Taider.pl - mapy mazurskie",
                mobile: [
                    {
                        type: MobileType.Apk,
                        href: "http://www.taider.pl/pliki/Taider.apk"
                    }
                ]
            }
        ]
    },
    {
        title: "Mapy w przeglądarce",
        data: [
            {
                link: "https://webapp.navionics.com",
                desc: "Navionics Boating za darmo w przeglądarce - mapa interaktywna",
                mobile: [
                    {
                        type: MobileType.Android,
                        id: "it.navionics.singleAppMarineLakes"
                    },
                    {
                        type: MobileType.Android,
                        id: "it.navionics.singleAppMarineLakesHD",
                        hint: "Tablet"
                    },
                    {
                        type: MobileType.iOS,
                        id: "boating-marine-lakes/id744920098"
                    }
                ]
            }
        ]
    },
    {
        title: "Ostrzeżenia nawigacyjne na Bałtyk",
        desc: 'Ostrzeżenia NAVTEX na rejon Bałtyku można znaleźć <a href="http://www.sjofartsverket.se/baltico">pod tym adresem (strona Szwedzkiego Urzędu Morskiego)</a>',
        data: [
            {
                link: createLink("http://www.bhmw.mw.mil.pl/index.php?akcja=on"),
                desc: {
                    code: "PL",
                    label: "strona Biura Hydrograficznego Marynarki Wojennej"
                }
            },
            {
                link: createLink("https://www.dma.dk/SikkerhedTilSoes/Sejladsinformation/nautisk_information/Sider/nautisk_information.aspx"),
                desc: {
                    code: "DK",
                    label: "strona Duńskiego Urzędu Morskiego"
                }
            },
            {
                link: {
                    href: "http://adam.vta.ee/teenused/tm/KehtivadNavigatsioonihoiatused/KehtivadNavigatsioonihoiatused.txt",
                    label: "http://www.vta.ee"
                },
                desc: {
                    code: "EE",
                    label: "strona Estońskiego Urzędu Morskiego"
                }
            },
            {
                link: createLink("https://extranet.liikennevirasto.fi/pooki_www/merivaroitukset/list_en.html"),
                desc: {
                    code: "FI",
                    label: "strona Fińskiego Urzędu Morskiego"
                }
            },
            {
                link: createLink("http://www.msa.lt/en/hydrography/navigational-warnings-and-kq74/notices-to-mariners-scx9.html"),
                desc: {
                    code: "LT",
                    label: "strona Litewskiego Urzędu Bezpieczeństwa Morskiego"
                }
            },
            {
                link: createLink("http://www.navtex.lv/index.php?msgarea%5B7%5D=on&msgarea%5B8%5D=on&msgarea%5B9%5D=on&msgarea%5B12%5D=on&msgarea%5B20%5D=on&msggroup%5B0%5D=on&msggroup%5B1%5D=on&msggroup%5B2%5D=on&pp=10&p=1"),
                desc: {
                    code: "LV",
                    label: "lista łotewskich ostrzeżeń NAVTEX"
                }
            },
            {
                link: createLink("http://www.bsh.de/aktdat/nwn/nwn-ost.pdf"),
                desc: {
                    code: "DE",
                    label: "strona Niemieckiego Urzędu Transportu Morskiego i Hydrografii [PDF]"
                }
            },
            {
                link: createLink("http://kyvreports.kystverket.no/NavcoReport/navigasjonsvarsler.aspx"),
                desc: {
                    code: "NO",
                    label: "strona Norweskiego Urzędu Morskiego"
                }
            },
            {
                link: createLink("http://www.sjofartsverket.se/navwarneng"),
                desc: {
                    code: "SE",
                    label: "strona Szwedzkiego Urzędu Morskiego"
                }
            }
        ]
    },
    {
        title: "Łączność VHF",
        data: [
            {
                link: "http://www.dkscan.dk/maritim.htm",
                desc: {
                    code: "DK",
                    label: "Lista używanych kanałów VHF na terytorium Danii"
                }
            }
        ]
    },
    {
        title: "Inne strony warte uwagi",
        desc: "Strony tu zawarte są wyłącznie moim subiektywnym wyborem; ich twórcy (o ile nie wskazano inaczej) nie mieli wpływu na pojawienie się tu tych stron.",
        data: [
            {
                link: "https://www.sailforum.pl",
                desc: "Żeglarskie forum dyskusyjne",
                star: true
            },
			{
				link: "http://navipedia.pl",
				desc: "Navipedia - żeglarska encyklopedia",
				star: true
			},
            {
                link: "http://www.kulinski.navsim.pl",
                desc: "Subiektywny Serwis Internetowy Jerzego Kulińskiego"
            },
            {
                link: "http://seatracker.ru",
                desc: "Marine Torrent Tracker"
            }
        ]
    }
];
