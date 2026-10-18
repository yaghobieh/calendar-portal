import type { CalendarEvent } from '@forgedevstack/calendar';

export const SCHEDULER_PACKAGE_URL = 'https://www.npmjs.com/package/@forgedevstack/calendar';
export const SCHEDULER_DATE = new Date(2025, 6, 1);

export const SCHEDULER_EVENTS: CalendarEvent[] = [
  { id: 'run', title: 'Morning Run', start: '2025-07-07T07:00:00', end: '2025-07-07T07:45:00', resourceId: 'health' },
  { id: 'team', title: 'Team Meeting', start: '2025-07-07T09:30:00', end: '2025-07-07T10:30:00', resourceId: 'work' },
  { id: 'birthday', title: 'Alice Birthday', start: '2025-07-03', end: '2025-07-04', allDay: true, resourceId: 'family' },
  { id: 'dashboard', title: 'Analytics Dashboard', start: '2025-07-01', end: '2025-08-20', resourceId: 'work' },
  { id: 'campaign', title: 'Q3 Campaign', start: '2025-07-01', end: '2025-07-31', resourceId: 'social' },
];

export const SCHEDULER_CODE = `npm install @forgedevstack/bear @forgedevstack/calendar

import { EventCalendar, EventTimeline } from '@forgedevstack/calendar';
import '@forgedevstack/calendar/styles.css';
import '@forgedevstack/bear/styles.css';

<EventCalendar events={events} mode="dark" />
<EventTimeline events={events} />`;
