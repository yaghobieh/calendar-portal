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

export const STANDUP_HOUR = 9;
export const STANDUP_MINUTE = 0;
export const STANDUP_END_MINUTE = 30;

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

const officeHours = allDayRange(weekStart, DAY_WEDNESDAY);
const shipRelease = allDayRange(weekStart, DAY_FRIDAY);

export const DEMO_EVENTS: CalendarEvent[] = [
  {
    id: 'standup',
    title: 'Standup',
    start: atDay(weekStart, DAY_MONDAY, STANDUP_HOUR, STANDUP_MINUTE),
    end: atDay(weekStart, DAY_MONDAY, STANDUP_HOUR, STANDUP_END_MINUTE),
    color: EVENT_COLOR_PRIMARY,
  },
  {
    id: 'sprint-planning',
    title: 'Sprint planning',
    start: atDay(weekStart, DAY_MONDAY, SPRINT_PLANNING_HOUR, NUMBER_ZERO),
    end: atDay(weekStart, DAY_MONDAY, SPRINT_PLANNING_END_HOUR, SPRINT_PLANNING_END_MINUTE),
    color: EVENT_COLOR_SKY,
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: atDay(weekStart, DAY_TUESDAY, DESIGN_REVIEW_HOUR, NUMBER_ZERO),
    end: atDay(weekStart, DAY_TUESDAY, DESIGN_REVIEW_END_HOUR, NUMBER_ZERO),
    color: EVENT_COLOR_INDIGO,
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
  },
  {
    id: 'ship',
    title: 'Ship 1.0.0',
    start: shipRelease.start,
    end: shipRelease.end,
    allDay: true,
    color: EVENT_COLOR_AMBER,
  },
  {
    id: 'retro',
    title: 'Retro',
    start: atDay(weekStart, DAY_FRIDAY, RETRO_HOUR, NUMBER_ZERO),
    end: atDay(weekStart, DAY_FRIDAY, RETRO_END_HOUR, NUMBER_ZERO),
    color: EVENT_COLOR_PRIMARY,
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
