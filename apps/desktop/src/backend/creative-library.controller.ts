import { CreativeLibraryInfo } from './domain/creative-library';

/**
 *
 */
export class CreativeLibraryController {
    /**
     * get all the creative libraries
     */
    async getCreativeLibraryList(): Promise<CreativeLibraryInfo[]> {
        // get

        return [];
    }

    /**
     * get the latest recent used library
     */
    async getRecentUsedLibrary(): Promise<CreativeLibraryInfo | null> {
        return null;
    }

    /**
     * create a new creative library in a specific path
     * - create the lib folder & files: meta, state & inner folders: assets
     * - store the new lib id into the history
     */
    create(params: { path: string; name: string }) {}

    /**
     * delete the createive library
     */
    delete() {}

    /**
     *
     */
    updateState() {}

    getNodes() {}
}
