/**
 * Manage All the state of the nodes
 * - atom operations
 * -
 */

import { createStore } from '@viness/store';
import { createStatePersisiStorage } from './persist/storage';
import { nodeStoreFactory } from './node.store';

export interface IBoardState {
    root: string | null;
    current: string | null;
}

const defaultBoardState: IBoardState = {
    root: null,
    current: null,
};

export const boardStore = createStore<IBoardState>({
    defaultState: defaultBoardState,
    persist: () => ({
        storage: () => createStatePersisiStorage('board'),
    }),
}).withActions(({ set }) => ({
    changeRoot: (root: string) =>
        set((s) => {
            s.root = root;
        }),
    changeCurrent: (current: string) =>
        set((s) => {
            s.current = current;
        }),
}));

export const getCurrentNodeStore = () => {
    const { current } = boardStore.state.get();

    return current ? nodeStoreFactory(current) : null;
};

export const useCurrentNodeStore = getCurrentNodeStore;

export const getRootNodeStore = () => {
    const { root } = boardStore.state.get();

    return root ? nodeStoreFactory(root) : null;
};

export const useRootNodeStore = getRootNodeStore;
