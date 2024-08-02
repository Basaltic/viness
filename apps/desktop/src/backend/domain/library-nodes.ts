import { exists } from '@tauri-apps/plugin-fs';
import { JSONDB } from '../common/database';

export interface INodeState<T extends object = object> {
    state: any;
    version: number;
}

export interface ILibraryNodes {
    nodes: Record<string, INodeState>;
}

export const DEFAULT_NODES_DATA = {
    nodes: {},
};

export const LIBRARY_NODES_STORE_FILE = 'nodes.json';

export class LibraryNodes {
    private db: JSONDB<ILibraryNodes>;

    constructor(db: JSONDB<ILibraryNodes>) {
        this.db = db;
    }

    static initialize(basePath: string) {
        const path = `${basePath}/${LIBRARY_NODES_STORE_FILE}`;

        const db = new JSONDB<ILibraryNodes>(path, DEFAULT_NODES_DATA);

        const existed = exists(path);
        if (!existed) {
            db.write();
        }

        return new LibraryNodes(db);
    }

    async get(id: string) {
        await this.db.read();
        return this.db.data.nodes[id];
    }

    async set(id: string, node: INodeState) {
        return this.db.update((data) => {
            data.nodes[id] = node;
        });
    }

    async remove(id: string) {
        return this.db.update((data) => {
            delete data.nodes[id];
        });
    }
}
