import { app } from 'electron';

import { MainWindowController, envDetector, ErrorWrapper } from '@alandrade21/electron-arch';
import { InitializationController } from './initialization/InitializationController';
import { DEV_CONFIG_FOLDER_PATH } from './constants';
import { MenuBuilder } from './menu/MenuBuilder';

app.on('ready', () => {

  try {

    // envDetector.printEnvironment();

    // It is necessary to create the window first in order to show the dialogs.
    MainWindowController.initialize();
    MenuBuilder.createMenu();

    // Do the app initialization.
    const initController = new InitializationController('exConsilia', DEV_CONFIG_FOLDER_PATH);
    initController.doConfig();

    if (MainWindowController.mainWindow) {
      MainWindowController.mainWindow.show();
    }
  } catch (e) {
    if (e instanceof ErrorWrapper) {
      (<ErrorWrapper>e).consoleLog();
    } else {
      console.log(e);
    }

    app.quit();
  }
});
