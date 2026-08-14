export const CODE_CONFIG = `import { defineCalendarConfig } from '@forgedevstack/calendar';

export default defineCalendarConfig({
  theme: {
    primary: '#0d9488',
    event: '#14b8a6',
  },
  layout: 'contained',
  showLayoutToggle: true,
  relations: {
    visible: 'always',
  },
  eventModal: {
    showEdit: true,
    showClose: true,
    showSave: true,
    showCancel: true,
    containment: 'page',
    createOnSlot: true,
    openEffect: 'scale',
    closeEffect: 'fade',
  },
  editModal: {
    resizable: true,
    fields: {
      title: true,
      start: true,
      end: true,
      allDay: true,
      people: true,
      notes: true,
      relatedTo: true,
      severity: true,
      showAs: true,
    },
  },
});

<Calendar config={config} events={events} />`;

export const CODE_JSON = `{
  "theme": {
    "primary": "#0d9488",
    "event": "#14b8a6"
  },
  "layout": "contained",
  "showLayoutToggle": true,
  "relations": {
    "visible": "always"
  },
  "eventModal": {
    "showEdit": true,
    "showClose": true,
    "showSave": true,
    "showCancel": true,
    "containment": "page",
    "createOnSlot": true,
    "openEffect": "scale",
    "closeEffect": "fade"
  },
  "editModal": {
    "resizable": true,
    "fields": {
      "title": true,
      "start": true,
      "end": true,
      "allDay": true,
      "people": true,
      "notes": true,
      "relatedTo": true,
      "severity": true,
      "showAs": true
    }
  }
}`;
