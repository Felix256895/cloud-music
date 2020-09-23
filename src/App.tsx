import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './routes';
import { Provider } from 'context/';

function App() {
  return (
    <Provider>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </Provider>
  );
}

export default App;
