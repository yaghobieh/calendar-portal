export type NavLinkId = 'getStarted' | 'demos' | 'api' | 'changelog';
export type DocNavId =
  | 'getStarted'
  | 'views'
  | 'events'
  | 'theming'
  | 'config'
  | 'relations'
  | 'demos'
  | 'api'
  | 'changelog';

export interface NavItem {
  id: NavLinkId;
  href: string;
}
