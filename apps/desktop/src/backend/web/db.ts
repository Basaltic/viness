import Dexie, { type EntityTable } from 'dexie';

interface NodeEntity {
    id: number;
    upperId: string;
    name: string;
    type: string;
    data: string;
    x: number;
    y: number;
    order: string;
    ctime: number;
    utime: number;
}

const db = new Dexie('viness-database') as Dexie & {
    nodes: EntityTable<NodeEntity, 'id'>;
};

// Schema declaration:
db.version(1).stores({
    nodes: '++id, &upperId, name, type, data, x, y, order, ctime, utime',
});

export type { NodeEntity };
export { db };
