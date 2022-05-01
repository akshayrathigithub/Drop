import React, { useState, useEffect, ReactNode } from 'react';
import { THEME_OPTIONS } from '../Constants/Enum';
import ThemeContext, { initialThemeState } from './ThemeContext';

// access localStorage of browser
const localStorage = window.localStorage;

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // setting default theme
  const [theme, setTheme] = useState(initialThemeState.theme);

  useEffect(() => {
    const savedThemeLocal = localStorage.getItem('globalTheme');
    let savedTheme: THEME_OPTIONS = THEME_OPTIONS.LIGHT;
    if (savedThemeLocal === THEME_OPTIONS.DARK) {
      savedTheme = THEME_OPTIONS.DARK;
    } else {
      savedTheme = THEME_OPTIONS.LIGHT;
    }
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    // update local storage
    localStorage.setItem('globalTheme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
