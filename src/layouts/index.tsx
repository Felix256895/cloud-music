import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';

const Layout: React.FC<{route: Global.Routes}> = ({ route }) => <Fragment> {renderRoutes(route.routes)} </Fragment>;

export default Layout;
