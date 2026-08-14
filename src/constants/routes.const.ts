import type { NavItem } from './routes.types';

export const ROUTE_PATHS = {
  HOME: '/',
  GET_STARTED: '/get-started',
  DOCS_VIEWS: '/docs/views',
  DOCS_EVENTS: '/docs/events',
  DOCS_THEMING: '/docs/theming',
  DOCS_CONFIG: '/docs/config',
  DOCS_RELATIONS: '/docs/relations',
  DOCS_TOOLBAR: '/docs/toolbar',
  DEMOS: '/demos',
  API: '/api',
  CHANGELOG: '/changelog',
} as const;

export const NAV_LINKS: NavItem[] = [
  { id: 'getStarted', href: ROUTE_PATHS.GET_STARTED },
  { id: 'demos', href: ROUTE_PATHS.DEMOS },
  { id: 'api', href: ROUTE_PATHS.API },
  { id: 'changelog', href: ROUTE_PATHS.CHANGELOG },
];
