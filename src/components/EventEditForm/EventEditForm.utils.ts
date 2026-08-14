import type {
  CalendarEvent,
  CalendarPerson,
  CalendarRecurrence,
  CalendarRecurrenceFreq,
} from '@forgedevstack/calendar';
import {
  DEFAULT_INTERVAL,
  EMPTY_STRING,
  HOUR_PAD,
  NUMBER_ZERO,
  PAD_ZERO,
  RECURRENCE_EVERY_X_MONTHS,
  RECURRENCE_NONE,
  TIME_SEPARATOR,
} from './EventEditForm.const';

export const applyDateKeepTime = (current: Date, next: Date): Date => {
  const copy = new Date(current);
  copy.setFullYear(next.getFullYear(), next.getMonth(), next.getDate());
  return copy;
};

export const applyTimeKeepDate = (current: Date, time: string): Date => {
  const parts = time.split(TIME_SEPARATOR);
  const hours = Number(parts[NUMBER_ZERO]);
  const minutes = Number(parts[1] ?? NUMBER_ZERO);
  const copy = new Date(current);
  copy.setHours(hours, minutes, NUMBER_ZERO, NUMBER_ZERO);
  return copy;
};

export const formatTimeValue = (date: Date): string =>
  `${String(date.getHours()).padStart(HOUR_PAD, PAD_ZERO)}${TIME_SEPARATOR}${String(date.getMinutes()).padStart(HOUR_PAD, PAD_ZERO)}`;

export const togglePersonId = (ids: string[], personId: string): string[] => {
  if (ids.includes(personId)) {
    return ids.filter((id) => id !== personId);
  }
  return [...ids, personId];
};

export const recurrenceFromValues = (
  freq: CalendarRecurrenceFreq,
  interval: number,
): CalendarRecurrence | undefined => {
  if (freq === RECURRENCE_NONE) {
    return undefined;
  }
  if (freq === RECURRENCE_EVERY_X_MONTHS) {
    return {
      freq,
      interval: interval > NUMBER_ZERO ? interval : DEFAULT_INTERVAL,
    };
  }
  return { freq };
};

export const filterEventsByQuery = (events: CalendarEvent[], query: string): CalendarEvent[] => {
  const needle = query.trim().toLowerCase();
  if (needle.length === NUMBER_ZERO) {
    return events;
  }
  return events.filter((item) => item.title.toLowerCase().includes(needle));
};

export const filterPeopleByQuery = (
  people: CalendarPerson[],
  selected: string[],
  query: string,
): CalendarPerson[] => {
  const needle = query.trim().toLowerCase();
  return people.filter((person) => {
    if (selected.includes(person.id)) {
      return false;
    }
    if (needle.length === NUMBER_ZERO) {
      return true;
    }
    const haystack = `${person.name} ${person.fullName ?? EMPTY_STRING} ${person.email ?? EMPTY_STRING}`.toLowerCase();
    return haystack.includes(needle);
  });
};

export const peopleForIds = (people: CalendarPerson[], ids: string[]): CalendarPerson[] =>
  people.filter((person) => ids.includes(person.id));
