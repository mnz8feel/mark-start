import type { RouteObject } from 'react-router-dom';
import Layout from '@/components/Layout';
import SvelteChild from '@/pages/SvelteChild';
import SolidChild from '@/pages/Solid-windicss-Child';

// 通过交叉类型扩展
export type typeMyRoute = Omit<{ [K in keyof RouteObject]: RouteObject[K] }, 'children'> & {
  name?: string;
  children?: typeMyRoute[];
};

const routes: typeMyRoute[] = [
  {
    path: '/',
    name: 'Home',
    element: <Layout />,
    children: [
      {
        path: '/svelte-child',
        name: 'SvelteChild',
        element: <SvelteChild />,
      },
      {
        path: '/solid-child',
        name: 'SolidChild',
        element: <SolidChild />,
      },
    ],
  },
];

export default routes;
