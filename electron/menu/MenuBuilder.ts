import { MenuItemConstructorOptions, Menu } from 'electron';

import { MainWindowController, envDetector } from '@alandrade21/electron-arch';

export class MenuBuilder {
  private static menuOptions: MenuItemConstructorOptions[] = [];

  public static createMenu(): void {
    if (envDetector.isDev()) {
      this.menuOptions.push(this.buildDevelopMenu());
    }
    Menu.setApplicationMenu(Menu.buildFromTemplate(this.menuOptions));
  }

  private static buildDevelopMenu(): MenuItemConstructorOptions {
    return {
      type: 'submenu',
      label: 'Development',
      submenu: [
        {
          type: 'normal',
          label: 'Toggle DevTools',
          accelerator: 'CommandOrControl+Shift+T',
          click: () => {
            MainWindowController.mainWindow.webContents.toggleDevTools();
          }
        }
      ]
    };
  }
}
