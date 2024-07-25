import { exists } from '@tauri-apps/plugin-fs';
import { JSONDB } from '../common/database';

export interface INode {}

export interface ILibraryNodes {
    nodes: INode[];
}

export const DEFAULT_NODES_DATA = {
    nodes: [],
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
            const db = new JSONDB<ILibraryNodes>(path, DEFAULT_NODES_DATA);
            db.write();
        }

        return new LibraryNodes(path);
    }
}
