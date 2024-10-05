/**
 * Return str with the first letter capitalized.
 * @param str
 */
export function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
