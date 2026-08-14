import type { ChangelogRelease } from './Changelog.types';

export const CHANGELOG_DOT_COLOR = '#0d9488';

export const RELEASES: ChangelogRelease[] = [
  {
    version: '1.0.0',
    date: '2026-08-14',
    latest: true,
    highlights: [
      'Month, week, day, and agenda views',
      'Event model with timed and all-day events',
      'Previous, next, and today navigation',
      'Keyboard arrows and t for today',
      'Light and dark mode via data-cal-mode',
      'Replaceable translations for view labels and weekdays',
      'useCalendar hook for view and date state',
    ],
  },
];
