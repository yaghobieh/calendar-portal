import type { NavItem } from './routes.types';

export const ROUTE_PATHS = {
  HOME: '/',
  GET_STARTED: '/get-started',
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
