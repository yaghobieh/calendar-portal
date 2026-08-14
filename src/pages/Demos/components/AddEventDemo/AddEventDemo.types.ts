import type { CalendarEvent } from '@forgedevstack/calendar';

export interface AddEventFormState {
  title: string;
  startValue: string;
  endValue: string;
  allDay: boolean;
  description: string;
}

export interface AddEventDemoProps {
  initialEvents: CalendarEvent[];
}
