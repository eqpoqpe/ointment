export interface CreateStorageOptions<G, S> {
    getAdapter: GetStorageAdapter<G>;
    setAdapter: SetStorageAdapter<S>;
}

export type Constant = Record<string, string>;
export type GetStorageAdapter<RG> = (key: string) => RG;
export type SetStorageAdapter<RS> = (key: string, value: string) => RS;

/**
 * Retrieves a stored value from localStorage.
 */
export function fetchStorage<T extends Constant>(constants: T, key: keyof T) {
    return localStorage.getItem(constants[key]);
}

/**
 * Stores a value in localStorage.
 */
export function updateStorage<T extends Constant>(constants: T, key: keyof T, value: string) {
    return localStorage.setItem(constants[key], value);
}

/**
 * Creates a storage with custom adapters.
 */
export function createStorage<T extends Constant, RG, RS>(constants: T, { getAdapter, setAdapter }: CreateStorageOptions<RG, RS>) {
    return {
        fetchStorage(key: keyof T) {
            return getAdapter(constants[key]);
        },
        updateStorage(key: keyof T, value: string) {
            return setAdapter(constants[key], value);
        }
    }
}
