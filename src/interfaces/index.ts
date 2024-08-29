export enum ETheme { Light, Dark };

export interface AppSettings {
  theme: ETheme;
  requestDelay: number;
  requestChanceToSuccess: number;
  [key: string]: unknown;
}

export interface IOption {
  id: number;
  name?: string;
  label?: string;
  value: string | number;
}
