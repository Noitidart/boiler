// @flow

export function byAlphaAsc(a: string, b: string): number {
    return a.localeCompare(b);
}
