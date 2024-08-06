import { IAppController } from './app.interface';
import { TauriAppController } from './local/app.controller';
import { WebAppController } from './web/app.controller';

export const controllers: {
    app: IAppController;
} = {
    app: window.__TAURI__ ? new TauriAppController() : new WebAppController(),
};
