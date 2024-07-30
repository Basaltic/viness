import { exists } from '@tauri-apps/plugin-fs';
import { JSONDB } from '../common/database';
import { Patch } from '@viness/store';
import { generateId } from '@/common/util/id';

export interface INode<T extends object = object> {
    id: string;
    type: string;
    data: T;
    location: {
        x?: number;
        y?: number;
        order: string;
    };
}

export interface ILibraryNodes {
    root: string;
    tree: Record<string, Record<string, string>>;
    nodes: Record<string, INode>;
}

export interface INodeLocation {
    /**
     * x
     */
    x?: number;
    /**
     * y
     */
    y?: number;
    /**
     * Previous sibling node id
     */
    prevId?: string | null;
    /**
     * Next sibling node id
     */
    nextId?: string | null;
    /**
     * Parent node id
     */
    parentId?: string | null;
    /**
     * The order in the node list
     */
    order?: string;

    [key: string]: any;
}

export enum OperationType {
    INSERT = 'insert',
    DELETE = 'delete',
    UPDATE = 'update',
    NAVIGATE = 'navigate',
    MOVE = 'move',
}

export interface IOperation<O = OperationType, P = {}> {
    id: string;
    type: O;
    payload: P;
}

export type IMoveOperation = IOperation<OperationType.MOVE, { nodeId: string; to: INodeLocation }>;
export type IInsertOperation = IOperation<OperationType.INSERT, INode>;
export type IDeleteOperation = IOperation<OperationType.DELETE, { nodeId: string }>;
export type IUpdateOperation = IOperation<OperationType.UPDATE, { nodeId: string; changes: Patch[] }>;
export type INavigateOperation = IOperation<OperationType.NAVIGATE, { nodeId: string }>;

// [redo, undo]
export type IOperationGroup = [IOperation, IOperation];
export type IMutation = IOperationGroup[];

export const DEFAULT_NODES_DATA = {
    root: '',
    tree: {},
    nodes: {},
};

export const LIBRARY_NODES_STORE_FILE = 'nodes.json';

export class LibraryNodes {
    private db: JSONDB<ILibraryNodes>;

    constructor(path: string) {
        this.db = new JSONDB<ILibraryNodes>(path, DEFAULT_NODES_DATA);
    }

    static initialize(basePath: string) {
        const path = `${basePath}/${LIBRARY_NODES_STORE_FILE}`;

        const existed = exists(path);
        if (!existed) {
            // create a root node
            const rootNode = { id: generateId(), type: 'root' };

            const db = new JSONDB<ILibraryNodes>(path, DEFAULT_NODES_DATA);
            db.write();
        }

        return new LibraryNodes(path);
    }

    insert(params: INode) {}

    delete(params: { nodeId: string }) {}

    move(params: { nodeId: string; to: INodeLocation }) {}

    update(params: { nodeId: string; changes: Patch[] }) {}
}
