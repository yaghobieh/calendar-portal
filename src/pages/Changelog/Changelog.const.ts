import type { ChangelogRelease } from './Changelog.types';

export const CHANGELOG_DOT_COLOR = '#0d9488';

export const RELEASES: ChangelogRelease[] = [
  {
    version: '1.0.1',
    date: 'Unreleased',
    latest: false,
    highlights: [
      'Resize timed week and day events from the bottom edge; duration saves through onEventChange',
      'Event popup flips from view to edit',
      'Contained or full-page layout with a header icon you can replace',
      'Popup can stay inside the calendar or cover the page',
      'Mobile header, month cells, week scroll, and full-width popup',
      'Today uses a primary date badge instead of a mint cell fill',
      'Relation lines with always / onClick / never; Relation with search draws ribbons immediately',
      'Click a month day to create; edit fields are configurable including recurrence',
      'Repeat: every day, every week at this time, every month, every X months, every year',
      'Date picker calendars and hour inputs; all-day hides times; invite search dropdown (no checkboxes)',
      'People collection: avatar, name, fullName, email, phone, LinkedIn, Facebook, profile; hover peek and click card',
      'Configurable personIcons and severityIcons (urgent, high, and the rest)',
      'Compact Outlook-style click popup: title, subtitle, time, severity, people, description',
      'Hover a relation ribbon to see both event titles and times',
      'Modal open/close effects (fade, scale, slideUp, none) and CSS variables',
    ],
  },
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
