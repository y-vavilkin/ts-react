import { createContext } from 'react';
import { ETheme } from '../interfaces';

export type TSetTheme = (theme: ETheme) => void;

export const ThemeContext = createContext<[ETheme, TSetTheme]>([
  ETheme.Light,
  () => null,
]);

export const ThemeProvider = ThemeContext.Provider;
