import { CountryCode } from "./countries";

export interface Data {
    title: string;
    desc?: string;
    legend?: LegendItem[];
    data: DataItem[];
}

export interface Link {
    href: string;
    label: string;
}

export interface Area {
    area: string;
    legendItems: string[];
}

export interface AreaDescription {
    marines: 'all' | Marines;
    area: string | Area;
}

export type Marines = Partial<Record<'inland' | 'sea', true | CountryCode>>;

export interface CountryDescription {
    code: CountryCode;
    label: string;
}

export interface DataItem {
    link: string | Link;
    desc: string | AreaDescription | CountryDescription;
    star?: boolean;
    subItems?: SubItem[];
    mobile?: Array<AppById | AppByHref>;
    createdDate?: string;
    modifiedDate?: string;
}
export interface SubItem {
    desc: string;
    link: string | Link;
}

export interface AppById {
    type: MobileType.Android | MobileType.iOS | MobileType.Windows;
    id: string;
    hint?: string;
}
export interface AppByHref {
    type: MobileType.Apk | MobileType.PC;
    href: string;
    hint?: string;
}

export enum MobileType {
    Android = 'android',
    Apk = 'apk',
    iOS = 'ios',
    PC = 'PC',
    Windows = 'windows'
}

export interface LegendItem {
    key: string;
    item: string;
}
