/**
 * Manage All the state of the nodes
 * - atom operations
 * -
 */

import { createStore } from '@viness/store';
import { INode } from '../node/node';

export interface IBoardState {
    root: string;
    tree: Record<string, Record<string, string>>;
}

const defaultBoardState: IBoardState = {
    root: '',
    tree: {},
};

export const boardStore = createStore<IBoardState>({ defaultState: defaultBoardState }).withActions(() => ({
    changeNodeData: () => {},
}));
