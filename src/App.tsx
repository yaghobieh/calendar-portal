import { CompassProvider, Routes } from '@forgedevstack/forge-compass/react';
import { ROUTE_PATHS } from './constants';
import { Home } from './pages/Home';
import { GetStarted } from './pages/GetStarted';
import { Demos } from './pages/Demos';
import { ApiReference } from './pages/ApiReference';
import { Changelog } from './pages/Changelog';

const routes = [
  { path: ROUTE_PATHS.HOME, name: 'home', component: Home },
  { path: ROUTE_PATHS.GET_STARTED, name: 'get-started', component: GetStarted },
  { path: ROUTE_PATHS.DEMOS, name: 'demos', component: Demos },
  { path: ROUTE_PATHS.API, name: 'api', component: ApiReference },
  { path: ROUTE_PATHS.CHANGELOG, name: 'changelog', component: Changelog },
];

export const App = () => (
  <CompassProvider routes={routes}>
    <Routes />
  </CompassProvider>
);
