import { ANVIL_URL, BEAR_URL, CALENDAR_URL, FORGESTACK_URL, GRID_TABLE_URL, RAIL_URL } from '@/constants';
import { DEMO_EVENTS } from '../Demos/Demos.const';
import type { FeatureKey, HomeEcosystemCard, StatLabelKey } from './Home.types';

export const SAMPLE_EVENTS = DEMO_EVENTS;

export const FEATURE_KEYS: FeatureKey[] = [
  'month',
  'week',
  'day',
  'agenda',
  'keyboard',
  'darkMode',
];

export const HERO_STATS: { value: string; labelKey: StatLabelKey }[] = [
  { value: '4', labelKey: 'views' },
  { value: '∞', labelKey: 'events' },
  { value: 'TS', labelKey: 'typescript' },
  { value: 'MIT', labelKey: 'mit' },
];

export const ECOSYSTEM_CARDS: HomeEcosystemCard[] = [
  { key: 'calendar', href: CALENDAR_URL, color: '#14b8a6' },
  { key: 'bear', href: BEAR_URL, color: '#f59e0b' },
  { key: 'gridTable', href: GRID_TABLE_URL, color: '#22c55e' },
  { key: 'anvil', href: ANVIL_URL, color: '#ef4444' },
  { key: 'compass', href: FORGESTACK_URL, color: '#8b5cf6' },
  { key: 'rail', href: RAIL_URL, color: '#06b6d4' },
];

export const QUICK_START_CODE = `import { Calendar } from '@forgedevstack/calendar';
import type { CalendarEvent } from '@forgedevstack/calendar';
import '@forgedevstack/calendar/styles.css';

const events: CalendarEvent[] = [
  {
    id: 'standup',
    title: 'Standup',
    start: '2026-08-14T09:00:00',
    end: '2026-08-14T09:30:00',
  },
];

export function App() {
  return <Calendar defaultView="month" events={events} />;
}`;

export const INSTALL_HINT = 'npm i @forgedevstack/calendar';
