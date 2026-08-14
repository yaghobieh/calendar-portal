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
  },
  {
    id: 'sprint-planning',
    title: 'Sprint planning',
    start: atDay(weekStart, DAY_MONDAY, SPRINT_PLANNING_HOUR, NUMBER_ZERO),
    end: atDay(weekStart, DAY_MONDAY, SPRINT_PLANNING_END_HOUR, SPRINT_PLANNING_END_MINUTE),
    color: EVENT_COLOR_SKY,
    relatedTo: ['retro'],
    peopleIds: ['maya', 'jon', 'priya'],
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
];

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
