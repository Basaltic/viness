import { AppController } from './app.controller';
import { CreativeBoardController } from './creative-board.controller';
import { CreativeLibraryController } from './library.controller';

/** 和IO系统的一套交互，和视图隔离开来 */
export * from './app.controller';
export * from './creative-board.controller';
export * from './library.controller';

export const controllers = {
    app: new AppController(),
    board: new CreativeBoardController(),
    library: new CreativeLibraryController(),
};
