import { AppConfigurator } from '@alandrade21/electron-arch';
import { ConfigOptions } from './ConfigOptions';

export class InitializationController extends AppConfigurator<ConfigOptions> {

  // Override
  public doConfig(): void {
    super.doConfig();
  }

  // Override
  protected createConfigFile(): void {
    this.appOptions = new ConfigOptions();
    try {
      this.cfm.writeFile(this.appOptions);
    } catch (error) {
      this.errorDialog(error);
      throw error;
    }
  }

}
