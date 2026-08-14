export const PAD_LENGTH = 2;
export const PAD_ZERO = '0';
export const EMPTY_STRING = '';
export const EVENT_ID_PREFIX = 'event-';
export const DEFAULT_DURATION_HOURS = 1;
export const DATETIME_LOCAL_TYPE = 'datetime-local';
export const ADD_EVENT_VIEW = 'week';
export const RANGE_SEPARATOR = ' → ';
export const ALL_DAY_SEPARATOR = ' · ';
export const INK_FORM_MIN_HEIGHT = 140;
export const INK_READONLY_MIN_HEIGHT = 80;

export const ADD_EVENT_CODE = `const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);

<Calendar
  defaultView="week"
  events={events}
  onSlotClick={(slot) => {
    setEvents((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        title: 'New event',
        start: slot.start,
        end: slot.end,
        allDay: slot.allDay,
      },
    ]);
  }}
  onEventClick={(event) => {
    console.log(event.title, event.start, event.end);
  }}
/>`;
