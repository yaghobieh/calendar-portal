import { defineCalendarConfig } from '@forgedevstack/calendar';

export const forgeCalendarConfig = defineCalendarConfig({
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
      recurrence: true,
    },
  },
});

export default forgeCalendarConfig;
