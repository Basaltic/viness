import { createStoreFactory } from '@viness/store';
import { INode, INodeLocation } from '../node/node';

export type NodeState = INode & {};

export const defaultNodeState: NodeState = {
    id: '',
    type: '',
    data: void 0,
    location: {},
};

export const nodeStoreFactory = createStoreFactory<NodeState>({
    defaultState: defaultNodeState,
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
