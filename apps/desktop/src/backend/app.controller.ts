import * as dialog from '@tauri-apps/plugin-dialog';
import { AppSetting } from './domain/app-setting';

/**
 *
 */
export class AppController {
    private setting = new AppSetting();

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
