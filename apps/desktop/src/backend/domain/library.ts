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
    private metaFileName = 'meta.json';
    private nodesFileName = 'nodes.json';
    private settingFileName = 'setting.json';
    private rawFileStorageFolder = 'assets';

    private locationPath = '';

    private nodes: LibraryNodes;

    constructor(locationPath: string) {
        this.locationPath = locationPath;

        this.nodes = new LibraryNodes(``);
    }
}
