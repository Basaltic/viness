import { createStore } from '@/common/ui-state/store';

/**
 * App Global State
 */
export type AppState = {
    storagePath: string;
};

export const defaultAppState: AppState = {
    storagePath: '',
};

export const appStore = createStore(defaultAppState);
