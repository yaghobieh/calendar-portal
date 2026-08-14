import { useState, type FC } from 'react';
import { BearIcons } from '@forgedevstack/bear';
import { Calendar } from '@forgedevstack/calendar';
import type { CalendarEvent, CalendarProps } from '@forgedevstack/calendar';
import { EventEditForm } from '@/components/EventEditForm';
import { forgeCalendarConfig } from '@/config';
import { DEFAULT_PEOPLE, NAV_ICON_SIZE, NAV_ICON_STROKE } from './ForgeCalendar.const';
import { FORGE_PERSON_ICONS, FORGE_SEVERITY_ICONS } from './ForgeCalendar.icons';

export const ForgeCalendar: FC<CalendarProps> = (props) => {
  const [drafts, setDrafts] = useState<Record<string, CalendarEvent>>({});
  const source = props.events ?? [];
  const extras = Object.values(drafts).filter(
    (draft) => !source.some((event) => event.id === draft.id),
  );
  const events = [...source.map((event) => drafts[event.id] ?? event), ...extras];

  return (
    <Calendar
      {...props}
      events={events}
      people={props.people ?? DEFAULT_PEOPLE}
      config={props.config ?? forgeCalendarConfig}
      personIcons={props.personIcons ?? FORGE_PERSON_ICONS}
      severityIcons={props.severityIcons ?? FORGE_SEVERITY_ICONS}
      navIcons={
        props.navIcons ?? {
          previous: (
            <BearIcons.ChevronLeftIcon
              size={NAV_ICON_SIZE}
              color="currentColor"
              strokeWidth={NAV_ICON_STROKE}
            />
          ),
          today: (
            <BearIcons.CalendarIcon
              size={NAV_ICON_SIZE}
              color="currentColor"
              strokeWidth={NAV_ICON_STROKE}
            />
          ),
          next: (
            <BearIcons.ChevronRightIcon
              size={NAV_ICON_SIZE}
              color="currentColor"
              strokeWidth={NAV_ICON_STROKE}
            />
          ),
        }
      }
      eventModal={{
        showEdit: true,
        showClose: true,
        showSave: true,
        showCancel: true,
        editIcon: (
          <BearIcons.EditIcon
            size={NAV_ICON_SIZE}
            color="currentColor"
            strokeWidth={NAV_ICON_STROKE}
          />
        ),
        closeIcon: (
          <BearIcons.CloseIcon
            size={NAV_ICON_SIZE}
            color="currentColor"
            strokeWidth={NAV_ICON_STROKE}
          />
        ),
        ...props.eventModal,
      }}
      layoutIcons={
        props.layoutIcons ?? {
          expand: (
            <BearIcons.MaximizeIcon
              size={NAV_ICON_SIZE}
              color="currentColor"
              strokeWidth={NAV_ICON_STROKE}
            />
          ),
          collapse: (
            <BearIcons.MinimizeIcon
              size={NAV_ICON_SIZE}
              color="currentColor"
              strokeWidth={NAV_ICON_STROKE}
            />
          ),
        }
      }
      renderEventEdit={
        props.renderEventEdit ??
        ((event, actions) => <EventEditForm event={event} actions={actions} />)
      }
      onEventChange={(event) => {
        setDrafts((current) => ({ ...current, [event.id]: event }));
        props.onEventChange?.(event);
      }}
      onEventCreate={(event) => {
        setDrafts((current) => ({ ...current, [event.id]: event }));
        props.onEventCreate?.(event);
      }}
    />
  );
};
