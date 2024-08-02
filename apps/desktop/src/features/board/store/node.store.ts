import { createStoreFactory, PersistStorage } from '@viness/store';
import { INode, INodeLocation } from '../node/node';
import { controllers } from '@/backend';

export type NodeState = INode & {
    selected: boolean;
};

export const defaultNodeState: NodeState = {
    id: '',
    type: '',
    data: void 0,
    location: {},

    selected: false,
};
// every node instance has a individual state store instance
export const nodeStoreFactory = createStoreFactory<NodeState>({
    defaultState: defaultNodeState,
    persist: (id: string) => {
        return {
            storage: createNodeStatePersisiStorage(id),
        };
    },
}).withActions(({ set }) => ({
    changeData: (data: any) =>
        set((s) => {
            s.data = data;
        }),
    updateLocation: (location: Partial<INodeLocation>) =>
        set((s) => {
            const sLocation = s.location;
            Object.assign(sLocation, location);
        }),
}));

// other state store

/**
 *
 */
export function createNodeStatePersisiStorage(id: string) {
    const persistentStorage: PersistStorage<INode> = {
        getItem: async () => {
            const res = await controllers.app.getNodeState(id);
            if (res.success) {
                return res.data || { state: {} as any, version: 1 };
            } else {
                return { state: {} as any, version: 1 };
            }
        },
        setItem: (key, value) => {
            controllers.app.persistNodeState(id, { state: value, version: 1 });
        },
        removeItem: (key) => {},
    };

    return persistentStorage;
}
