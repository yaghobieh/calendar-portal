import type { CalendarTheme } from '@forgedevstack/calendar';

export const DEFAULT_THEME: CalendarTheme = {
  primary: '#0d9488',
  event: '#14b8a6',
  today: '#ccfbf1',
  text: '#0f172a',
  background: '#ffffff',
  border: '#e2e8f0',
  muted: '#64748b',
};

export const THEME_FIELDS: { key: keyof CalendarTheme; label: string; fallback: string }[] = [
  { key: 'primary', label: 'primary', fallback: '#0d9488' },
  { key: 'event', label: 'event', fallback: '#14b8a6' },
  { key: 'today', label: 'today', fallback: '#ccfbf1' },
  { key: 'text', label: 'text', fallback: '#0f172a' },
  { key: 'background', label: 'background', fallback: '#ffffff' },
  { key: 'border', label: 'border', fallback: '#e2e8f0' },
];
