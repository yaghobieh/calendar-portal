import type { DocNavId } from '@/constants';
import type { ReactNode } from 'react';

export interface TocItem {
  id: string;
  label: string;
  href?: string;
}

export interface DocLayoutProps {
  title: string;
  description: string;
  toc: TocItem[];
  children: ReactNode;
}

export interface DocNavItem {
  id: DocNavId;
  href: string;
}
