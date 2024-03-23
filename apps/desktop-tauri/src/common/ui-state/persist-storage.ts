import { createJSONStorage, StateStorage } from 'zustand/middleware';
import {} from '@tauri-apps/api';

/**
 * Local Storage Persist
 */
export function createLocalStorage<Store = any>(option: { omitKeys?: string[] }) {
    const persistentStorage: StateStorage = {
        getItem: (name: string): string => {
            const storedValue = localStorage.getItem(`persist_${name}`);

            const state = JSON.parse(storedValue as string);

            if (option.omitKeys) {
                for (const omitKey of option.omitKeys) {
                    delete state[omitKey];
                }
            }

            return state;
        },
        setItem: (name, newValue): void => {
            const key = `persist_${name}`;
            const jsonValue = JSON.stringify(newValue);
            localStorage.setItem(key, jsonValue);
        },
        removeItem: (name): void => {
            const key = `persist_${name}`;
            localStorage.removeItem(key);
        },
    };

    return createJSONStorage<Store>(() => persistentStorage, {
        replacer: (key: string, value: any) => {
            if (option?.omitKeys?.includes(key)) {
                return undefined;
            }

            return value;
        },
    });
}

/**
 * local json file storage
 *
 * TODO: storage path is need to be dynamicly generated
 *
 * @param option
 * @returns
 */
export function createLocalJsonFileStorage<Store = any>(option: { path: string; omitKeys?: string[] }) {
    const persistentStorage: StateStorage = {
        getItem: (name: string): string => {
            const storedValue = localStorage.getItem(`persist_${name}`);

            const state = JSON.parse(storedValue as string);

            if (option.omitKeys) {
                for (const omitKey of option.omitKeys) {
                    delete state[omitKey];
                }
            }

            return state;
        },
        setItem: (name, newValue): void => {
            const key = `persist_${name}`;
            const jsonValue = JSON.stringify(newValue);
            localStorage.setItem(key, jsonValue);
        },
        removeItem: (name): void => {
            const key = `persist_${name}`;
            localStorage.removeItem(key);
        },
    };

    return createJSONStorage<Store>(() => persistentStorage, {
        replacer: (key: string, value: any) => {
            if (option?.omitKeys?.includes(key)) {
                return undefined;
            }

            return value;
        },
    });
}
