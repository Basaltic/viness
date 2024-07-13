import { CreativeLibrary, CreativeLibraryInfo } from './domain/library';

/**
 *
 */
export class CreativeLibraryController {
    /**
     * get all the creative libraries
     */
    async list(): Promise<CreativeLibraryInfo[]> {
        // get

        return [];
    }

    /**
     * get the latest recent used library
     */
    async getRecentUsed(): Promise<CreativeLibraryInfo | null> {
        return null;
    }

    /**
     *
     */
    async open(path: string) {
        // validate
        // set to history
        // set to current state

        const currentLibrary = new CreativeLibrary(path);
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
}
