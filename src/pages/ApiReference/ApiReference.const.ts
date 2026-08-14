import type { CalendarPropRow } from './ApiReference.types';

export const CALENDAR_PROPS: CalendarPropRow[] = [
  {
    prop: 'id',
    type: 'string',
    defaultValue: '—',
    description: 'Root element id',
  },
  {
    prop: 'testId',
    type: 'string',
    defaultValue: '—',
    description: 'data-testid on the root',
  },
  {
    prop: 'className',
    type: 'string',
    defaultValue: '—',
    description: 'Extra class on the root',
  },
  {
    prop: 'view',
    type: "'month' | 'week' | 'day' | 'agenda'",
    defaultValue: '—',
    description: 'Controlled visible view',
  },
  {
    prop: 'defaultView',
    type: 'CalendarView',
    defaultValue: "'month'",
    description: 'Uncontrolled initial view',
  },
  {
    prop: 'onViewChange',
    type: '(view: CalendarView) => void',
    defaultValue: '—',
    description: 'Fires when the view changes',
  },
  {
    prop: 'date',
    type: 'Date',
    defaultValue: '—',
    description: 'Controlled visible date',
  },
  {
    prop: 'defaultDate',
    type: 'Date',
    defaultValue: 'today',
    description: 'Uncontrolled initial date',
  },
  {
    prop: 'onDateChange',
    type: '(date: Date) => void',
    defaultValue: '—',
    description: 'Fires when the visible date changes',
  },
  {
    prop: 'events',
    type: 'CalendarEvent[]',
    defaultValue: '[]',
    description: 'Timed and all-day events',
  },
  {
    prop: 'onEventClick',
    type: '(event: CalendarEvent) => void',
    defaultValue: '—',
    description: 'Event chip click',
  },
  {
    prop: 'onSlotClick',
    type: '(slot: CalendarSlot) => void',
    defaultValue: '—',
    description: 'Empty day or hour click',
  },
  {
    prop: 'firstDayOfWeek',
    type: '0 | 1',
    defaultValue: '0',
    description: 'Sunday or Monday as first weekday',
  },
  {
    prop: 'translations',
    type: 'Partial<CalendarTranslations>',
    defaultValue: 'en',
    description: 'Replaceable labels and weekdays',
  },
  {
    prop: 'mode',
    type: "'light' | 'dark'",
    defaultValue: 'system',
    description: 'Sets data-cal-mode on the root',
  },
];
