import { Link } from "./dataTypes";

export function createLink(url: string, part: 'origin' | 'pathname' = 'origin'): Link {
    return {
        href: url,
        label: new URL(url)[part]
    }
}