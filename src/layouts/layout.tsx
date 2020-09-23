import React from 'react';
import { renderRoutes } from 'react-router-config';

const LayoutChild: React.FC<{ route: Global.Routes }> = ({ route }) => {
  return <React.Fragment>{renderRoutes(route.routes)}</React.Fragment>;
};

export default LayoutChild;
