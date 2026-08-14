import { ROUTE_PATHS } from '@/constants';
import type { DocNavItem } from './DocLayout.types';

export const DOC_NAV: DocNavItem[] = [
  { id: 'getStarted', href: ROUTE_PATHS.GET_STARTED },
  { id: 'views', href: ROUTE_PATHS.DOCS_VIEWS },
  { id: 'events', href: ROUTE_PATHS.DOCS_EVENTS },
  { id: 'theming', href: ROUTE_PATHS.DOCS_THEMING },
  { id: 'config', href: ROUTE_PATHS.DOCS_CONFIG },
  { id: 'relations', href: ROUTE_PATHS.DOCS_RELATIONS },
  { id: 'demos', href: ROUTE_PATHS.DEMOS },
  { id: 'api', href: ROUTE_PATHS.API },
  { id: 'changelog', href: ROUTE_PATHS.CHANGELOG },
];
