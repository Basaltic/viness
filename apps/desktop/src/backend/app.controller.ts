import { mkdir } from '@tauri-apps/plugin-fs';
import { open } from '@tauri-apps/plugin-dialog';
import { CreativeLibrary } from './domain/library';
import { LibraryManager } from './domain/library-manager';
import { OpenHistory } from './domain/open-history';
import { Response } from './dto/response';
import { INodeState } from './domain/library-nodes';

/**
 *
 */
export class AppController {
    public openHistory = new OpenHistory();

    private libraryManager = new LibraryManager();

    private currentLibrary?: CreativeLibrary;

    /**
     * create a new creative library in a specific path
     * - create the lib folder & files: meta, state & inner folders: assets
     * - store the new lib id into the history
     */
    async create(params: { name: string }) {
        const basePath = await open({ directory: true, multiple: false, canCreateDirectories: true, title: 'select a folder' });

        if (!basePath) return;

        const { name } = params;
        const path = `${basePath}/${name}`;

        try {
            await mkdir(path);
        } catch (e) {
            console.log(e);
        }

        const library = await CreativeLibrary.initialize(path);
        this.libraryManager.register(library);

        this.openHistory.set(path);

        this.currentLibrary = library;

        return Response.succeed({ id: library.info.data.id });
    }

    /**
     * Open a folder
     */
    async open(path: string | null = null) {
        if (!path) {
            // select library folder
            path = await open({ directory: true, multiple: false, canCreateDirectories: true, title: 'select a library folder' });

            if (!path) return;
        }

        let library = this.libraryManager.get(path);

        // validate
        if (!library) {
            library = await CreativeLibrary.initialize(path);
            this.libraryManager.register(library);
        }

        this.openHistory.set(path);

        this.currentLibrary = library;

        return Response.succeed({ id: library.info.data.id });
    }

    /**
     * load library
     *
     * @param id
     */
    async load(id: string) {
        let library = this.libraryManager.get(id);

        if (library?.basePath) {
            this.openHistory.set(library?.basePath);
        }

        this.currentLibrary = library;

        return Response.succeed({ id: library?.info.data.id });
    }

    async persistBoardState() {}

    async persistNodeState(id: string, node: INodeState) {
        try {
            await this.currentLibrary?.nodes.set(id, node);
            return Response.succeed();
        } catch (e) {}

        return Response.fail();
    }

    async getNodeState(id: string) {
        try {
            await this.currentLibrary?.nodes.get(id);
            return Response.succeed<INodeState>();
        } catch (e) {}

        return Response.fail<INodeState>();
    }

    async removeNodeState(id: string) {}
}
