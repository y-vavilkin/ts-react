export enum ETheme { Light, Dark }

export interface AppSettings {
  theme: ETheme;
  requestDelay: number;
  requestChanceToSuccess: number;
  [key: string]: unknown;
}

export interface IOption {
  id: number;
  value: string | number;
}

export interface IOptionWithLabel extends IOption {
  label: string;
}

export interface IOptionWithName extends IOption {
  name: string;
}
