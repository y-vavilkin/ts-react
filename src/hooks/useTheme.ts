import { useContext } from 'react';

import { ThemeContext, TSetTheme } from '../context/theme';
import { ETheme } from '../interfaces';

type ThemeContextType = [ETheme, TSetTheme];
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
