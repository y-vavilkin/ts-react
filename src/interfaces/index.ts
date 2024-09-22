export enum ETheme { Light, Dark }

export interface IAppSettings {
  theme: ETheme;
  requestDelay: number;
  requestChanceToSuccess: number;
}

export interface IOption {
  readonly id: number;
  value: string | number;
}

export interface IOptionWithLabel extends IOption {
  label: string;
}

export interface IOptionWithName extends IOption {
  name: string;
}
