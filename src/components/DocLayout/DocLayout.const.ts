import { ROUTE_PATHS } from '@/constants';
import type { DocNavItem } from './DocLayout.types';

export const DOC_NAV: DocNavItem[] = [
  { id: 'getStarted', href: ROUTE_PATHS.GET_STARTED },
  { id: 'demos', href: ROUTE_PATHS.DEMOS },
  { id: 'api', href: ROUTE_PATHS.API },
  { id: 'changelog', href: ROUTE_PATHS.CHANGELOG },
];
