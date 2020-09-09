import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../layouts';

const SuspenseComponent = (Component: React.FC) => (props: any) => {
  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = lazy(() => import('views/Home'));
const My = lazy(() => import('views/My'));
const Friend = lazy(() => import('views/Friend'));
const Store = lazy(() => import('views/Store'));
const Musicman = lazy(() => import('views/Musicman'));
const Download = lazy(() => import('views/Download'));

const Routes: Global.Routes[] = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/home'} />,
      },
      {
        path: '/home',
        component: SuspenseComponent(Home),
      },
      {
        path: '/my',
        component: SuspenseComponent(My),
      },
      {
        path: '/friend',
        component: SuspenseComponent(Friend),
      },
      {
        path: '/store',
        component: SuspenseComponent(Store),
      },
      {
        path: '/musicman',
        component: SuspenseComponent(Musicman),
      },
      {
        path: '/download',
        component: SuspenseComponent(Download),
      },
    ],
  },
];

export default Routes;
