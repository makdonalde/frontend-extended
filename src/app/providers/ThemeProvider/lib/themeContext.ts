import { createContext } from 'react';

export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
export const ThemeContext = createContext<ThemeContextProps>({});

export const THEME_LOCAL_STORAGE = 'theme';
