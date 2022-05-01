import React, { Dispatch, SetStateAction } from 'react';
import { THEME_OPTIONS } from '../Constants/Enum';

interface ThemeContext {
  theme: THEME_OPTIONS;
  setTheme?: Dispatch<SetStateAction<THEME_OPTIONS>>;
}

export const initialThemeState: ThemeContext = {
  theme: THEME_OPTIONS.LIGHT, // default theme
};

const ThemeContext = React.createContext<ThemeContext>(initialThemeState); // passing initial theme state to context
export default ThemeContext;
