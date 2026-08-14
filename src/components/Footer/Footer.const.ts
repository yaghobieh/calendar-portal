import {
  ANVIL_URL,
  BEAR_URL,
  CALENDAR_URL,
  FORGESTACK_URL,
  GRID_TABLE_URL,
  RAIL_URL,
} from '@/constants';
import type { EcosystemLib } from './Footer.types';

export const ECOSYSTEM_LIBS: EcosystemLib[] = [
  { key: 'calendar', href: CALENDAR_URL, color: '#14b8a6' },
  { key: 'bear', href: BEAR_URL, color: '#f59e0b' },
  { key: 'gridTable', href: GRID_TABLE_URL, color: '#22c55e' },
  { key: 'anvil', href: ANVIL_URL, color: '#ef4444' },
  { key: 'compass', href: FORGESTACK_URL, color: '#8b5cf6' },
  { key: 'rail', href: RAIL_URL, color: '#06b6d4' },
];
