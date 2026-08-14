import type { CalendarEvent } from '@forgedevstack/calendar';
import { NUMBER_ONE, NUMBER_ZERO } from '@/constants';
import type { DemoKey } from './Demos.types';

export const DAY_SUNDAY = 0;
export const DAY_MONDAY = 1;
export const DAY_TUESDAY = 2;
export const DAY_WEDNESDAY = 3;
export const DAY_THURSDAY = 4;
export const DAY_FRIDAY = 5;
export const DAY_SATURDAY = 6;
export const DAYS_IN_WEEK = 7;

export const STANDUP_HOUR = 9;
export const STANDUP_MINUTE = 0;
export const STANDUP_END_MINUTE = 30;
export const DESIGN_SYNC_END_HOUR = 10;
export const LIVE_LOOKBACK_MINUTES = 15;
export const LIVE_LOOKAHEAD_MINUTES = 45;

export const SPRINT_PLANNING_HOUR = 10;
export const SPRINT_PLANNING_END_HOUR = 11;
export const SPRINT_PLANNING_END_MINUTE = 30;

export const DESIGN_REVIEW_HOUR = 14;
export const DESIGN_REVIEW_END_HOUR = 15;

export const ONE_ON_ONE_HOUR = 15;
export const ONE_ON_ONE_END_MINUTE = 30;

export const DOCS_PASS_HOUR = 11;
export const DOCS_PASS_END_HOUR = 12;

export const RETRO_HOUR = 16;
export const RETRO_END_HOUR = 17;

export const EVENT_COLOR_PRIMARY = '#0d9488';
export const EVENT_COLOR_INDIGO = '#6366f1';
export const EVENT_COLOR_AMBER = '#f59e0b';
export const EVENT_COLOR_PINK = '#ec4899';
export const EVENT_COLOR_EMERALD = '#10b981';
export const EVENT_COLOR_SKY = '#0ea5e9';

export const TEST_YEAR = 2026;
export const TEST_AUGUST_MONTH = 7;
export const TEST_AUGUST_LAST_DAY = 31;
export const TEST_EVENT_START_HOUR = 9;
export const TEST_EVENT_END_HOUR = 17;
export const TEST_EVENT_ID = 'editor-testing';
export const TEST_EVENT_TITLE = 'Editor testing';
export const TEST_EVENT_SUBTITLE = 'Docs + meeting';
export const TEST_ZOOM_URL = 'https://zoom.us/j/5551234567';
export const TEST_EVENT_DESCRIPTION = `
<p>Forge Calendar <strong>1.0.1</strong> editor testing. Use this long block to test the full-size editor, hover peek, Join meeting, and invite dropdowns.</p>
<h2>What to check</h2>
<ul>
<li>The view popup is wide enough to read title, time, people, and notes.</li>
<li>Edit opens a full-size card and Ink fills the notes area.</li>
<li>Invite and relation overlay the field instead of pushing Save and Cancel.</li>
<li>Hover this chip for a short preview and the dummy Zoom link.</li>
</ul>
<p>Join meeting uses a dummy Zoom URL for portal testing only.</p>
<h2>Notes for the editor</h2>
<p>Keep scrolling. This copy is intentionally long so the notes field can grow and stay readable while you edit.</p>
<p>Checklists, headings, and paragraphs should keep their Ink formatting when you save and open the view card again.</p>
<p>Library version on npm is 1.0.1.</p>
<p>Last day of August 2026 is a full work block from morning through late afternoon so week and day views have a tall event to click.</p>
<p>People on this event should appear as chips. Open invite to add or remove from the dropdown list.</p>
<p>Relation dropdown should list other demo events. Pick one and confirm ribbons still draw after save.</p>
`.trim();

const getWeekStartSunday = (from: Date): Date => {
  const date = new Date(from);
  date.setHours(NUMBER_ZERO, NUMBER_ZERO, NUMBER_ZERO, NUMBER_ZERO);
  date.setDate(date.getDate() - date.getDay());
  return date;
};

const atDay = (weekStart: Date, dayOffset: number, hour: number, minute: number): Date => {
  const date = new Date(weekStart);
  date.setDate(date.getDate() + dayOffset);
  date.setHours(hour, minute, NUMBER_ZERO, NUMBER_ZERO);
  return date;
};

const allDayRange = (weekStart: Date, dayOffset: number): { start: Date; end: Date } => ({
  start: atDay(weekStart, dayOffset, NUMBER_ZERO, NUMBER_ZERO),
  end: atDay(weekStart, dayOffset + NUMBER_ONE, NUMBER_ZERO, NUMBER_ZERO),
});

const weekStart = getWeekStartSunday(new Date());
const now = new Date();
const liveStart = new Date(now);
liveStart.setMinutes(now.getMinutes() - LIVE_LOOKBACK_MINUTES);
const liveEnd = new Date(now);
liveEnd.setMinutes(now.getMinutes() + LIVE_LOOKAHEAD_MINUTES);

const officeHours = allDayRange(weekStart, DAY_WEDNESDAY);
const shipRelease = allDayRange(weekStart, DAY_FRIDAY);

export const DEMO_EVENTS: CalendarEvent[] = [
  {
    id: 'standup',
    title: 'Standup',
    start: atDay(weekStart, DAY_MONDAY, STANDUP_HOUR, STANDUP_MINUTE),
    end: atDay(weekStart, DAY_MONDAY, STANDUP_HOUR, STANDUP_END_MINUTE),
    color: EVENT_COLOR_PRIMARY,
    description: '<p>Daily standup notes in <strong>Ink</strong>.</p>',
    relatedTo: ['design-sync', 'follow-up'],
    peopleIds: ['maya', 'jon'],
    subtitle: 'Daily 15 min',
    severity: 'normal',
    showAs: 'busy',
  },
  {
    id: 'design-sync',
    title: 'Design sync',
    start: atDay(weekStart, DAY_MONDAY, STANDUP_HOUR, STANDUP_MINUTE),
    end: atDay(weekStart, DAY_MONDAY, DESIGN_SYNC_END_HOUR, STANDUP_MINUTE),
    color: EVENT_COLOR_INDIGO,
    description: '<p>Overlaps standup — Outlook-style columns.</p>',
    relatedTo: ['design-review'],
    peopleIds: ['maya', 'priya'],
    showAs: 'busy',
  },
  {
    id: 'in-progress',
    title: 'In progress',
    start: liveStart,
    end: liveEnd,
    color: EVENT_COLOR_AMBER,
    description: '<p>Happening now — look for the alert mark.</p>',
    relatedTo: ['docs-pass'],
    peopleIds: ['jon'],
    subtitle: 'Live block',
    severity: 'high',
    showAs: 'busy',
  },
  {
    id: 'sprint-planning',
    title: 'Sprint planning',
    start: atDay(weekStart, DAY_MONDAY, SPRINT_PLANNING_HOUR, NUMBER_ZERO),
    end: atDay(weekStart, DAY_MONDAY, SPRINT_PLANNING_END_HOUR, SPRINT_PLANNING_END_MINUTE),
    color: EVENT_COLOR_SKY,
    relatedTo: ['retro'],
    peopleIds: ['maya', 'jon', 'priya'],
    showAs: 'tentative',
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: atDay(weekStart, DAY_TUESDAY, DESIGN_REVIEW_HOUR, NUMBER_ZERO),
    end: atDay(weekStart, DAY_TUESDAY, DESIGN_REVIEW_END_HOUR, NUMBER_ZERO),
    color: EVENT_COLOR_INDIGO,
    relatedTo: ['one-on-one'],
    peopleIds: ['maya', 'priya'],
    subtitle: 'Figma walkthrough',
  },
  {
    id: 'one-on-one',
    title: '1:1',
    start: atDay(weekStart, DAY_WEDNESDAY, ONE_ON_ONE_HOUR, NUMBER_ZERO),
    end: atDay(weekStart, DAY_WEDNESDAY, ONE_ON_ONE_HOUR, ONE_ON_ONE_END_MINUTE),
    color: EVENT_COLOR_PINK,
  },
  {
    id: 'office-hours',
    title: 'Office hours',
    start: officeHours.start,
    end: officeHours.end,
    allDay: true,
    color: EVENT_COLOR_EMERALD,
    showAs: 'free',
  },
  {
    id: 'docs-pass',
    title: 'Docs pass',
    start: atDay(weekStart, DAY_THURSDAY, DOCS_PASS_HOUR, NUMBER_ZERO),
    end: atDay(weekStart, DAY_THURSDAY, DOCS_PASS_END_HOUR, NUMBER_ZERO),
    color: EVENT_COLOR_SKY,
    relatedTo: ['ship'],
    peopleIds: ['luis'],
  },
  {
    id: 'ship',
    title: 'Ship 1.0.0',
    start: shipRelease.start,
    end: shipRelease.end,
    allDay: true,
    color: EVENT_COLOR_AMBER,
    peopleIds: ['maya', 'jon', 'priya', 'luis'],
    subtitle: 'Release gate',
    severity: 'urgent',
    showAs: 'busy',
  },
  {
    id: 'retro',
    title: 'Retro',
    start: atDay(weekStart, DAY_FRIDAY, RETRO_HOUR, NUMBER_ZERO),
    end: atDay(weekStart, DAY_FRIDAY, RETRO_END_HOUR, NUMBER_ZERO),
    color: EVENT_COLOR_PRIMARY,
  },
  {
    id: 'follow-up',
    title: 'Follow up',
    start: atDay(weekStart, DAY_MONDAY + DAYS_IN_WEEK, STANDUP_HOUR, STANDUP_MINUTE),
    end: atDay(weekStart, DAY_MONDAY + DAYS_IN_WEEK, STANDUP_HOUR, STANDUP_END_MINUTE),
    color: EVENT_COLOR_PRIMARY,
    relatedTo: ['standup'],
    peopleIds: ['maya', 'jon'],
  },
  {
    id: TEST_EVENT_ID,
    title: TEST_EVENT_TITLE,
    start: new Date(TEST_YEAR, TEST_AUGUST_MONTH, TEST_AUGUST_LAST_DAY, TEST_EVENT_START_HOUR, NUMBER_ZERO),
    end: new Date(TEST_YEAR, TEST_AUGUST_MONTH, TEST_AUGUST_LAST_DAY, TEST_EVENT_END_HOUR, NUMBER_ZERO),
    color: EVENT_COLOR_SKY,
    description: TEST_EVENT_DESCRIPTION,
    meetingUrl: TEST_ZOOM_URL,
    peopleIds: ['maya', 'jon', 'priya', 'luis'],
    relatedTo: ['docs-pass'],
    subtitle: TEST_EVENT_SUBTITLE,
    severity: 'high',
    showAs: 'busy',
  },
];

export const TAB_MONTH = 'month';
export const TAB_WEEK = 'week';
export const TAB_DAY = 'day';
export const TAB_AGENDA = 'agenda';
export const TAB_ADD = 'add';
export const TAB_RESIZE = 'resize';
export const DEFAULT_DEMO_TAB = TAB_MONTH;
export const RESIZE_DEMO_VIEW = 'week' as const;

export const DEMO_KEYS: DemoKey[] = ['month', 'week', 'day', 'agenda'];

export const DEMO_CODES: Record<DemoKey, string> = {
  month: `import { Calendar } from '@forgedevstack/calendar';
import '@forgedevstack/calendar/styles.css';

<Calendar defaultView="month" events={events} />`,
  week: `import { Calendar } from '@forgedevstack/calendar';
import '@forgedevstack/calendar/styles.css';

<Calendar defaultView="week" events={events} />`,
  day: `import { Calendar } from '@forgedevstack/calendar';
import '@forgedevstack/calendar/styles.css';

<Calendar defaultView="day" events={events} />`,
  agenda: `import { Calendar } from '@forgedevstack/calendar';
import '@forgedevstack/calendar/styles.css';

<Calendar defaultView="agenda" events={events} />`,
};

export const RESIZE_CODE = `import { Calendar } from '@forgedevstack/calendar';
import '@forgedevstack/calendar/styles.css';

<Calendar
  defaultView="week"
  events={events}
  editModal={{ resizable: true }}
/>`;
