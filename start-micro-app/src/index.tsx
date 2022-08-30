import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from '../config/routes';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!);

import microApp from '@micro-zoe/micro-app';

microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      'svelte-child': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/basename\/)/g, (all) => {
                return all.replace('/basename/', '子应用域名/basename/');
              });
            }

            return code;
          },
        },
      ],
    },
  },
});

const App: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
