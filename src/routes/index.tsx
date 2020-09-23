import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../layouts';
import LayoutHome from '../layouts/layoutHome';
import LayoutChild from '../layouts/layout';

const SuspenseComponent = (Component: React.ComponentType) => (props: any) => {
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
const ToList = lazy(() => import('views/ToList'));
const SongList = lazy(() => import('views/SongList'));
const Station = lazy(() => import('views/Station'));
const Singer = lazy(() => import('views/Singer'));
const News = lazy(() => import('views/News'));
const Create = lazy(() => import('views/Create'));

const Routes: Global.Routes[] = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        component: LayoutHome,
        routes: [
          {
            path: '/home',
            component: LayoutChild,
            routes: [
              {
                path: '/home',
                exact: true,
                render: () => <Redirect to={'/home/recommend'} />
              },
              {
                path: '/home/recommend',
                component: SuspenseComponent(Home)
              },
              {
                path: '/home/to-list',
                component: SuspenseComponent(ToList)
              },
              {
                path: '/home/song-list',
                component: SuspenseComponent(SongList)
              },
              {
                path: '/home/anchor-station',
                component: SuspenseComponent(Station)
              },
              {
                path: '/home/singer',
                component: SuspenseComponent(Singer)
              },
              {
                path: '/home/news',
                component: SuspenseComponent(News)
              }
            ]
          },
          {
            path: '/home',
            component: LayoutChild
          },
          {
            path: '/my',
            component: SuspenseComponent(My)
          },
          {
            path: '/friend',
            component: SuspenseComponent(Friend)
          },
          {
            path: '/store',
            component: SuspenseComponent(Store)
          },
          {
            path: '/musicman',
            component: SuspenseComponent(Musicman)
          },
          {
            path: '/download',
            component: SuspenseComponent(Download)
          },
          {
            path: '/create',
            component: SuspenseComponent(Create)
          }
        ]
      }
    ]
  }
];

export default Routes;
