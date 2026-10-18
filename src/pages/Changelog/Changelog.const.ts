import type { ChangelogRelease } from './Changelog.types';

export const CHANGELOG_DOT_COLOR = '#0d9488';

export const RELEASES: ChangelogRelease[] = [
  {
    version: '1.0.2',
    date: '2026-10-18',
    latest: true,
    highlights: [
      'Event calendar with month, day, year, and a from–to range',
      'Theme follows light and dark, and settings cover the sidebar and week start',
      'Resource filter for Work, Health, Social, Personal, Travel, and Family',
      'Editor sits beside the calendar so an event can be changed in place',
      'Timeline with one row per resource across seven months',
    ],
  },
  {
    version: '1.0.1',
    date: '2026-08-14',
    latest: false,
    highlights: [
      'Hover an event chip for a popover (title, subtitle, time, Join meeting)',
      'Click popup is a wider Outlook-style card; edit scrolls and keeps Save and Cancel in the footer',
      'Hover peek is a solid card above the grid; Ink notes keep their HTML in edit and view',
      'Relation lines go from event chip to event chip with a thinner stroke',
      'Show as (free, busy, tentative, out of office) and severity are on the event and in the editor',
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
    latest: false,
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
