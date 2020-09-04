import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './routes';


function App() {
  return (
  <BrowserRouter>
    {renderRoutes(Routes)}
  </BrowserRouter>
  );
}

export default App;
