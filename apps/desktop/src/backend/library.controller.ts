import { mkdir } from '@tauri-apps/plugin-fs';
import { open } from '@tauri-apps/plugin-dialog';
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
    async create(params: { name: string }) {
        const result = await open({ directory: true, multiple: false, canCreateDirectories: true, title: 'create new library' });

        if (!result) return;

        const { name } = params;
        const path = `${result}/${name}`;

        await mkdir(path);

        const library = new CreativeLibrary(path);
    }

    /**
     * delete the createive library
     */
    delete() {}
}
