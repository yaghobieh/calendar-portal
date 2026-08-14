export type NavLinkId = 'getStarted' | 'demos' | 'api' | 'changelog';

export interface NavItem {
  id: NavLinkId;
  href: string;
}
