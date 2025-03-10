export function maybe<T, R>(
    target: T | null | undefined,
    resultCall: (target: T) => R,
): R | null {
    return target ? resultCall(target) : null;
}
