export interface StoreAdapter<G, S, R> {
  getAdapter: GetStorageAdapter<G>;
  setAdapter: SetStorageAdapter<S>;
  removeAdapter: RemoveStorageAdapter<R>;
}
export interface CreateStorageOptions<G, S, R> {
  storeAdapter: StoreAdapter<G, S, R>;
}

export type Constant = Record<string, string>;
export type GetStorageAdapter<RG> = (key: string) => RG;
export type SetStorageAdapter<RS> = (key: string, value: string) => RS;
export type RemoveStorageAdapter<RR> = (key: string) => RR;

/**
 * Retrieves a stored value from localStorage.
 */
export function fetchStorage<T extends Constant>(constants: T, key: keyof T) {
  return localStorage.getItem(constants[key]);
}

/**
 * Stores a value in localStorage.
 */
export function updateStorage<T extends Constant>(
  constants: T,
  key: keyof T,
  value: string
) {
  return localStorage.setItem(constants[key], value);
}

/**
 * Creates a storage with custom adapters.
 */
export function createStorage<T extends Constant, RG, RS, GR>(
  constants: T,
  {
    storeAdapter: { getAdapter, setAdapter, removeAdapter },
  }: CreateStorageOptions<RG, RS, GR>
) {
  return {
    fetchStorage(key: keyof T) {
      return getAdapter(constants[key]);
    },
    updateStorage(key: keyof T, value: string) {
      return setAdapter(constants[key], value);
    },
    removeStorage(key: keyof T) {
      return removeAdapter(constants[key]);
    },
  };
}
