import type { CalendarEvent, CalendarSlot } from '@forgedevstack/calendar';
import { NUMBER_ONE, NUMBER_ZERO } from '@/constants';
import {
  EMPTY_STRING,
  EVENT_ID_PREFIX,
  PAD_LENGTH,
  PAD_ZERO,
  RANGE_SEPARATOR,
} from './AddEventDemo.const';
import type { AddEventFormState } from './AddEventDemo.types';

const pad = (value: number): string => String(value).padStart(PAD_LENGTH, PAD_ZERO);

export const toDateTimeLocalValue = (value: Date | string): string => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return EMPTY_STRING;
  }
  return `${date.getFullYear()}-${pad(date.getMonth() + NUMBER_ONE)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

export const addHours = (date: Date, hours: number): Date => {
  const next = new Date(date);
  next.setHours(next.getHours() + hours, next.getMinutes(), NUMBER_ZERO, NUMBER_ZERO);
  return next;
};

export const createEventId = (): string => `${EVENT_ID_PREFIX}${Date.now()}`;

export const formFromSlot = (slot: CalendarSlot): AddEventFormState => ({
  title: EMPTY_STRING,
  startValue: toDateTimeLocalValue(slot.start),
  endValue: toDateTimeLocalValue(slot.end),
  allDay: slot.allDay,
  description: EMPTY_STRING,
});

export const formFromEvent = (event: CalendarEvent): AddEventFormState => ({
  title: event.title,
  startValue: toDateTimeLocalValue(event.start),
  endValue: toDateTimeLocalValue(event.end),
  allDay: Boolean(event.allDay),
  description: event.description ?? EMPTY_STRING,
});

export const formatEventRange = (event: CalendarEvent): string => {
  const start = event.start instanceof Date ? event.start : new Date(event.start);
  const end = event.end instanceof Date ? event.end : new Date(event.end);
  if (event.allDay) {
    return start.toLocaleDateString();
  }
  return `${start.toLocaleString()}${RANGE_SEPARATOR}${end.toLocaleString()}`;
};

export const buildEventFromForm = (
  form: AddEventFormState,
  color: string,
): CalendarEvent | null => {
  const title = form.title.trim();
  const start = new Date(form.startValue);
  const end = new Date(form.endValue);
  if (!title || Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return null;
  }
  const description = form.description.trim();
  return {
    id: createEventId(),
    title,
    start,
    end,
    allDay: form.allDay,
    color,
    description: description.length > NUMBER_ZERO ? description : undefined,
  };
};
