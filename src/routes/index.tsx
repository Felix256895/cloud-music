import React, { lazy, Suspense}from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../layouts';


const SuspenseComponent = (Component: React.FC) => (props: any) => {
  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  )
}

const Home = lazy(() => import('views/Home'));

const Routes: Global.Routes[] = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/home'} />
      },
      {
        path: '/home',
        component: SuspenseComponent(Home)
      }
    ]
  }
]

export default Routes;
