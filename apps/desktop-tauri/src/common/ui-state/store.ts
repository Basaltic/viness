/* eslint-disable @typescript-eslint/ban-types */
import { create, StoreApi, UseBoundStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createLocalStorage } from './persist-storage';

type WithSelectors<S> = S extends { getState: () => infer T } ? S & { use: { [K in keyof T]: () => T[K] } } : never;

// eslint-disable-next-line @typescript-eslint/ban-types
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
    const store = _store as WithSelectors<typeof _store>;

    store.use = {};

    for (const k of Object.keys(store.getState())) {
        (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
    }

    return store;
};

/**
 * 创建一个 Store
 *
 * @param state
 * @returns
 */
export const createStore = <S extends object>(
    state: S,
    options?: {
        persist?: {
            name: string;
            omitKeys?: string[];
        };
    },
) => {
    let store = options?.persist
        ? persist(() => state, {
              name: options?.persist.name,
              storage: createLocalStorage({ omitKeys: options?.persist?.omitKeys }),
          })
        : () => state;

    return createSelectors(create(immer(store)));
};
