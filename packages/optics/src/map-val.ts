export interface MapValNext<T, R> {
  (value: T): R;
}

export function mapVal<T, R>(
  target: T | null | undefined,
  fn: MapValNext<T, R>
): R | null {
  if (target === null || target === undefined) return null;
  return fn(target);
}
