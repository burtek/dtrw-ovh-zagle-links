import { Link } from "./data/dataTypes";

export function isLink(link: string | Link): link is Link {
    return typeof link !== 'string' && 'href' in link && 'label' in link;
}