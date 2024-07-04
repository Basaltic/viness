/**
 *
 */
export type CreativeLibraryInfo = {
    id: string;
    name: string;
};

export type CreativeLibrarySettings = {};

export type CreativeLibraryState = {};

export class CreativeLibrary {
    private metaFileName = 'meta.json';
    private nodesFileName = 'nodes.json';
    private settingFileName = 'setting.json';
    private rawFileStorageFolder = 'assets';

    private locationPath = '';

    constructor(locationPath: string) {
        this.locationPath = locationPath;
    }
}
