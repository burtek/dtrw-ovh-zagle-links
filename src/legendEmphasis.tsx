export const legendEmphasis = (item: string, key: string | number = 0) => <sup key={key}>{item}</sup>

export function LegendEmphasis({ children = null, item = '' }: { children: string; item?: never } | { children?: never; item: string }) {
    return legendEmphasis(children ?? item);
}