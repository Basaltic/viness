import { Store } from '@tauri-apps/plugin-store';

export class AppSettingRepo {
    private store = new Store('viness-app-setting.bin');

    constructor() {}
}
