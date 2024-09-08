import { ETheme, IAppSettings } from '../interfaces'

declare global {
  interface Window {
    appSettings: IAppSettings;
  }
}

export const loadSettings = (): void => {
  try {
    const rawSettings = localStorage.getItem('app-settings');
    if (rawSettings == null) throw new Error();

    window.appSettings = JSON.parse(rawSettings);
  } catch(error: unknown) {
    window.appSettings = {
      theme: ETheme.Light,
      requestDelay: 1000,
      requestChanceToSuccess: 0.4,
    };
  }
};

export const saveSettings = <K extends keyof IAppSettings>(key: K, settings: IAppSettings[K]): void => {
  window.appSettings[key] = settings;
  localStorage.setItem('app-settings', JSON.stringify(window.appSettings));
};
