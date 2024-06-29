import { ID } from './types';
import { UIStore } from './ui-store';

function createStoreManager() {
    const storeRegistry = new Map<ID, UIStore<any, any>>();

    return {
        register<S extends object, T extends Record<string, Function>>(id: ID, store: UIStore<S, T>) {
            storeRegistry.set(id, store);
        },
        get<S extends object, T extends Record<string, Function>>(id: ID): UIStore<S, T> | undefined {
            const store = storeRegistry.get(id);
            return store;
        },
        remove(id: ID) {
            storeRegistry.delete(id);
        },
    };
}

export const storeManager = createStoreManager();
