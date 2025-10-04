/**
 * Merge class names conditionally
 * @param classes - list of class names (strings, undefined, boolean)
 * @returns merged class names string
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
    return classes.filter(Boolean).join(' ');
}
