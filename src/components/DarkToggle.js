import React from 'react';
import styled from 'styled-components';

import { useTheme } from '../scripts/useTheme';

const ThemeSelection = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Container>
      <label>
        <input
          type="radio"
          name="theme-select"
          checked={theme === 'light'}
          onChange={() => setTheme('light')}
        />{' '}
        Light
      </label>
      <label>
        <input
          type="radio"
          name="theme-select"
          checked={theme === 'dark'}
          onChange={() => setTheme('dark')}
        />{' '}
        Dark
      </label>
      <label>
        <input
          type="radio"
          name="theme-select"
          checked={!theme || theme === 'system'}
          onChange={() => setTheme('system')}
        />{' '}
        System
      </label>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 1em;
`;

export default ThemeSelection;
