import { Low, Adapter } from 'lowdb';
import { writeTextFile, readTextFile } from '@tauri-apps/plugin-fs';

export class TauriFileAdapter<T> implements Adapter<T> {
    constructor(private path: string) {}

    async read(): Promise<T | null> {
        const rawData = await readTextFile(this.path);
        if (rawData) {
            const data = JSON.parse(rawData);
            return data;
        }

        return null;
    }
    async write(data: T): Promise<void> {
        const rawData = JSON.stringify(data);
        return writeTextFile(this.path, rawData);
    }
}

export class JSONDB<Data = unknown> {
    db: Low<Data>;
    constructor(path: string, defaultData: Data) {
        const adapter = new TauriFileAdapter<Data>(path);
        this.db = new Low<Data>(adapter, defaultData);
    }
}
