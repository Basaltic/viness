import { mkdir } from '@tauri-apps/plugin-fs';
import { JSONDB } from '../common/database';

/**
 *
 */
export type CreativeLibraryInfo = {
    id: string;
    name: string;
};

export type CreativeLibrarySettings = {};

export type CreativeLibraryState = {};

export type LibraryNodeEntity = {
    id: string;
};

class LibraryNodes {
    private repo: JSONDB<{ data: LibraryNodeEntity[] }>;

    constructor(path: string) {
        this.repo = new JSONDB<{ data: LibraryNodeEntity[] }>(path, { data: [] });
    }
}

export class CreativeLibrary {
    private nodesFileName = 'nodes.json';
    private settingFileName = 'setting.json';
    private rawFileStorageFolder = 'assets';

    private basePath = '';

    private nodes: LibraryNodes;

    constructor(basePath: string) {
        this.basePath = basePath;

        this.nodes = new LibraryNodes(``);
    }

    async initialize() {
        //
        const assetFolderPath = `${this.basePath}/${this.rawFileStorageFolder}`;
        await mkdir(assetFolderPath, {});

        //
    }
}
