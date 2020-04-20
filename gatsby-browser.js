import React from 'react';

import App from './src/components/App';

import './src/themes/light.css';
import './src/themes/dark.css';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
