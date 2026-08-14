import type { CalendarEvent, CalendarView } from '@forgedevstack/calendar';

export interface DemoSectionProps {
  view: CalendarView;
  title: string;
  description: string;
  events: CalendarEvent[];
  code: string;
}
