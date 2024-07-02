import { createStore, PersistStorage } from '@viness/store';

type NodeState = {
    id: string;
    data: any;
};

const defaultNodeState = {
    id: '',
    data: void 0,
};

export const nodeStoreFactory = createStore<NodeState>({
    defaultState: defaultNodeState,
    persist: createNodeStorePersist,
});

function createNodeStorePersist(id: string) {
    const persistentStorage: PersistStorage<NodeState> = {
        getItem: (name: string) => {
            return {
                state: {
                    id: 'test',
                    data: {},
                },
            };
        },
        setItem: () => {},
        removeItem: () => {},
    };

    return {
        name: id,
        storage: persistentStorage,
    };
}
