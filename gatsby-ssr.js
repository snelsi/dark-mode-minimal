import React from 'react';
import Terser from 'terser';

import App from './src/components/App';

const codeToRunOnClient = `
(function() {
  try {
    const theme = JSON.parse(localStorage.getItem("preffered-theme"));

    if (theme) {
      document.documentElement.dataset.theme = theme;
    }
  } catch {
    localStorage.removeItem('preffered-theme');
  }
})()
`;

const MagicScriptTag = () => {
  const calledFunction = Terser.minify(codeToRunOnClient).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>;
};
