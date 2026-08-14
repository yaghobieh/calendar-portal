import { CompassProvider, Routes } from '@forgedevstack/forge-compass/react';
import { ROUTE_PATHS } from './constants';
import { Home } from './pages/Home';
import { GetStarted } from './pages/GetStarted';
import { DocsViews } from './pages/Docs/Views';
import { DocsEvents } from './pages/Docs/Events';
import { DocsTheming } from './pages/Docs/Theming';
import { DocsConfig } from './pages/Docs/Config';
import { DocsRelations } from './pages/Docs/Relations';
import { Demos } from './pages/Demos';
import { ApiReference } from './pages/ApiReference';
import { Changelog } from './pages/Changelog';

const routes = [
  { path: ROUTE_PATHS.HOME, name: 'home', component: Home },
  { path: ROUTE_PATHS.GET_STARTED, name: 'get-started', component: GetStarted },
  { path: ROUTE_PATHS.DOCS_VIEWS, name: 'docs-views', component: DocsViews },
  { path: ROUTE_PATHS.DOCS_EVENTS, name: 'docs-events', component: DocsEvents },
  { path: ROUTE_PATHS.DOCS_THEMING, name: 'docs-theming', component: DocsTheming },
  { path: ROUTE_PATHS.DOCS_CONFIG, name: 'docs-config', component: DocsConfig },
  { path: ROUTE_PATHS.DOCS_RELATIONS, name: 'docs-relations', component: DocsRelations },
  { path: ROUTE_PATHS.DOCS_TOOLBAR, name: 'docs-toolbar', component: DocsRelations },
  { path: ROUTE_PATHS.DEMOS, name: 'demos', component: Demos },
  { path: ROUTE_PATHS.API, name: 'api', component: ApiReference },
  { path: ROUTE_PATHS.CHANGELOG, name: 'changelog', component: Changelog },
];

export const App = () => (
  <CompassProvider routes={routes}>
    <Routes />
  </CompassProvider>
);
