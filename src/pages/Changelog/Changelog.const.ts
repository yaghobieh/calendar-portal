import type { ChangelogRelease } from './Changelog.types';

export const CHANGELOG_DOT_COLOR = '#0d9488';

export const RELEASES: ChangelogRelease[] = [
  {
    version: '1.0.1',
    date: 'Unreleased',
    latest: false,
    highlights: [
      'Hover an event chip for a popover (title, subtitle, time, Join meeting)',
      'Click popup is a wider Outlook-style card; edit and create are full size with Ink filling notes',
      'Save and Cancel stay in the footer under the editor',
      'Bear invite, relation, and recurrence dropdowns overlay the field instead of expanding the form',
      'Right-click a slot or event for Create event, Mark as busy day, and Open event (Bear ContextMenu)',
      'Demos are split into tabs, including a resize demo on week view',
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
