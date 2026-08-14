export const CODE_RELATIONS = `import { Calendar } from '@forgedevstack/calendar';

<Calendar
  events={events}
  relations={{ visible: 'always' }}
  editModal={{
    fields: {
      relatedTo: true,
    },
  }}
/>`;

export const CODE_RELATIONS_CLICK = `<Calendar
  events={events}
  relations={{ visible: 'onClick' }}
/>`;

export const CODE_EFFECTS = `<Calendar
  events={events}
  eventModal={{
    openEffect: 'scale',
    closeEffect: 'fade',
    createOnSlot: true,
  }}
/>`;

export const CODE_EFFECTS_CSS = `.Cal-Calendar {
  --cal-modal-open-duration: 280ms;
  --cal-modal-close-duration: 220ms;
  --cal-modal-header-bg: var(--cal-primary);
  --cal-modal-header-color: #ffffff;
  --cal-modal-body-bg: var(--cal-bg);
}`;
