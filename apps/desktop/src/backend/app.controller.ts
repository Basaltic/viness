import * as dialog from '@tauri-apps/plugin-dialog';

/**
 *
 */
export class AppController {
    /**
     *
     */
    getAppInfo() {}

    /**
     *
     */
    async getUsageHistory() {}

    /**
     *
     */
    async selectLibraryFolder() {
        const result = await dialog.open({ canCreateDirectories: true, directory: true, multiple: false, title: '选择' });

        console.log(result);
    }
}
