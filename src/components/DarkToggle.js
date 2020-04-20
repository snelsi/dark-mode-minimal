import React from 'react';

import { useTheme } from '../scripts/useTheme';

const DarkToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />{' '}
      Dark
    </label>
  );
};

export default DarkToggle;
