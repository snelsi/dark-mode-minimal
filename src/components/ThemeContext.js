import React from 'react';

import { useTheme } from '../scripts/useTheme';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;

    return () => {
      document.documentElement.dataset.theme = undefined;
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
