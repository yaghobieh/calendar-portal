import type { GetStartedTocItem } from './GetStarted.types';

export const TOC: GetStartedTocItem[] = [
  { id: 'installation', labelKey: 'install' },
  { id: 'import-css', labelKey: 'importCss' },
  { id: 'usage', labelKey: 'basicUsage' },
  { id: 'live', labelKey: 'liveTitle' },
  { id: 'events', labelKey: 'events' },
  { id: 'add-events', labelKey: 'addEvents' },
  { id: 'see-events', labelKey: 'seeEvents' },
  { id: 'translations', labelKey: 'translations' },
];

export const CODE_INSTALL = `npm i @forgedevstack/calendar`;

export const CODE_IMPORT_STYLES = `import '@forgedevstack/calendar/styles.css';`;

export const CODE_BASIC = `import { Calendar } from '@forgedevstack/calendar';
import type { CalendarEvent } from '@forgedevstack/calendar';
import '@forgedevstack/calendar/styles.css';

const events: CalendarEvent[] = [
  {
    id: 'standup',
    title: 'Standup',
    start: '2026-08-14T09:00:00',
    end: '2026-08-14T09:30:00',
  },
];

export function App() {
  return <Calendar defaultView="month" events={events} />;
}`;

export const CODE_VIEWS = `import { Calendar } from '@forgedevstack/calendar';

export function WeekPlanner() {
  return <Calendar defaultView="week" />;
}`;

export const CODE_EVENTS = `const people = [
  {
    id: 'maya',
    name: 'Maya',
    fullName: 'Maya Chen',
    email: 'maya@acme.com',
    phone: '+1 415 555 0142',
  },
];

const events = [
  {
    id: 'review',
    title: 'Design review',
    subtitle: 'Figma walkthrough',
    start: '2026-08-11T14:00:00',
    end: '2026-08-11T15:00:00',
    color: '#6366f1',
    peopleIds: ['maya'],
    severity: 'high',
  },
  {
    id: 'ship',
    title: 'Ship 1.0.0',
    subtitle: 'Release gate',
    start: '2026-08-14',
    end: '2026-08-15',
    allDay: true,
    severity: 'urgent',
  },
];

<Calendar events={events} people={people} />`;

export const CODE_ADD_EVENTS = `const [events, setEvents] = useState<CalendarEvent[]>([]);

<Calendar
  events={events}
  onEventCreate={(event) => setEvents((current) => [...current, event])}
  onEventChange={(event) =>
    setEvents((current) =>
      current.some((item) => item.id === event.id)
        ? current.map((item) => (item.id === event.id ? event : item))
        : [...current, event],
    )
  }
/>`;

export const CODE_SEE_EVENTS = `<Calendar
  events={events}
  onEventClick={(event) => {
    console.log(event.title, event.start, event.end);
  }}
/>`;

export const CODE_TRANSLATIONS = `import { Calendar } from '@forgedevstack/calendar';

<Calendar
  translations={{
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    today: 'Hoy',
    previous: 'Anterior',
    next: 'Siguiente',
    noEvents: 'Sin eventos',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  }}
/>`;
