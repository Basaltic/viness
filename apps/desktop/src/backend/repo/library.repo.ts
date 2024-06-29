import { CREATIVE_LIBRARY_CONSTS } from '../common/constants';
import { JSONDB } from '../common/database';

/**
 * save，load，manupulate meta info
 */
export class CreativeLibraryMetaRepo {
    private fullPath: string;

    constructor(folderPath: string) {
        this.fullPath = `${folderPath}/${CREATIVE_LIBRARY_CONSTS.MetaFileName}`;
    }

    save() {}
}
