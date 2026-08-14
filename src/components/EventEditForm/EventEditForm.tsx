import { useState, type FC } from 'react';
import {
  Button,
  Chip,
  DatePicker,
  Flex,
  Input,
  Select,
  Switch,
  TimePicker,
  Typography,
  useBear,
} from '@forgedevstack/bear';
import { InkEditor } from '@forgedevstack/ink';
import { PersonChip } from '@forgedevstack/calendar';
import type {
  CalendarEditFieldsConfig,
  CalendarEvent,
  CalendarRecurrenceFreq,
} from '@forgedevstack/calendar';
import type { EventEditFormProps } from './EventEditForm.types';
import {
  BUTTON_CANCEL,
  BUTTON_SAVE,
  CHIP_COLOR,
  CHIP_SELECTED,
  CLOSE_GLYPH,
  DEFAULT_INTERVAL,
  EDIT_DATES,
  EDIT_FOOTER,
  EDIT_FORM,
  EDIT_PEOPLE,
  EDIT_RELATED,
  EDIT_SUGGEST,
  EDIT_SUGGEST_ITEM,
  EDIT_SUGGEST_META,
  EMPTY_STRING,
  FIELD_ALL_DAY,
  FIELD_END,
  FIELD_NOTES,
  FIELD_PEOPLE,
  FIELD_RECURRENCE,
  FIELD_RELATED_TO,
  FIELD_START,
  FIELD_TITLE,
  INK_EDIT_MIN_HEIGHT,
  MINUTE_STEP,
  RECURRENCE_DAILY,
  RECURRENCE_EVERY_X_MONTHS,
  RECURRENCE_MONTHLY,
  RECURRENCE_NONE,
  RECURRENCE_WEEKLY,
  RECURRENCE_YEARLY,
  NUMBER_ZERO,
  TIME_FORMAT_24H,
} from './EventEditForm.const';
import {
  applyDateKeepTime,
  applyTimeKeepDate,
  filterEventsByQuery,
  filterPeopleByQuery,
  formatTimeValue,
  peopleForIds,
  recurrenceFromValues,
  togglePersonId,
} from './EventEditForm.utils';

const showField = (fields: CalendarEditFieldsConfig | undefined, field: keyof CalendarEditFieldsConfig) =>
  fields?.[field] !== false;

export const EventEditForm: FC<EventEditFormProps> = (props) => {
  const { event, actions } = props;
  const {
    translations,
    people,
    events,
    onSave,
    onCancel,
    saveContent,
    cancelContent,
    showSave,
    showCancel,
    fields,
    onDraftChange,
    personIcons,
  } = actions;
  const { mode } = useBear();
  const [title, setTitle] = useState(event.title);
  const [start, setStart] = useState(() => new Date(event.start));
  const [end, setEnd] = useState(() => new Date(event.end));
  const [allDay, setAllDay] = useState(Boolean(event.allDay));
  const [description, setDescription] = useState(event.description ?? EMPTY_STRING);
  const [peopleIds, setPeopleIds] = useState<string[]>(event.peopleIds ?? []);
  const [relatedTo, setRelatedTo] = useState<string[]>(event.relatedTo ?? []);
  const [relatedQuery, setRelatedQuery] = useState(EMPTY_STRING);
  const [inviteQuery, setInviteQuery] = useState(EMPTY_STRING);
  const [recurrenceFreq, setRecurrenceFreq] = useState<CalendarRecurrenceFreq>(
    event.recurrence?.freq ?? RECURRENCE_NONE,
  );
  const [recurrenceInterval, setRecurrenceInterval] = useState(
    event.recurrence?.interval ?? DEFAULT_INTERVAL,
  );

  const catalog = events.filter((item) => item.id !== event.id);
  const selectedRelated = catalog.filter((item) => relatedTo.includes(item.id));
  const relatedChoices = catalog.filter((item) => !relatedTo.includes(item.id));
  const relatedMatches = filterEventsByQuery(relatedChoices, relatedQuery);
  const selectedPeople = peopleForIds(people, peopleIds);
  const inviteMatches = filterPeopleByQuery(people, peopleIds, inviteQuery);

  const buildEvent = (patch: Partial<CalendarEvent> = {}): CalendarEvent => ({
    ...event,
    title: title.trim() || event.title || translations.untitled,
    start,
    end,
    allDay,
    description: description.trim() ? description : undefined,
    peopleIds,
    relatedTo,
    recurrence: recurrenceFromValues(recurrenceFreq, recurrenceInterval),
    ...patch,
  });

  const emitDraft = (patch: Partial<CalendarEvent> = {}) => {
    onDraftChange?.(buildEvent(patch));
  };

  const handleSave = () => {
    onSave(buildEvent());
  };

  const recurrenceOptions = [
    { value: RECURRENCE_NONE, label: translations.recurrenceNone },
    { value: RECURRENCE_DAILY, label: translations.recurrenceDaily },
    { value: RECURRENCE_WEEKLY, label: translations.recurrenceWeekly },
    { value: RECURRENCE_MONTHLY, label: translations.recurrenceMonthly },
    { value: RECURRENCE_EVERY_X_MONTHS, label: translations.recurrenceEveryXMonths },
    { value: RECURRENCE_YEARLY, label: translations.recurrenceYearly },
  ];

  return (
    <div className={EDIT_FORM}>
      {showField(fields, FIELD_TITLE) ? (
        <Input
          fullWidth
          label={translations.titleLabel}
          value={title}
          onChange={(change) => {
            setTitle(change.target.value);
            emitDraft({ title: change.target.value });
          }}
        />
      ) : null}
      {showField(fields, FIELD_ALL_DAY) ? (
        <Switch
          checked={allDay}
          onCheckedChange={(checked) => {
            setAllDay(checked);
            emitDraft({ allDay: checked });
          }}
          label={translations.allDayLabel}
        />
      ) : null}
      {showField(fields, FIELD_START) || showField(fields, FIELD_END) ? (
        <div className={EDIT_DATES}>
          {showField(fields, FIELD_START) ? (
            <Flex direction="column" gap={2}>
              <DatePicker
                label={translations.startLabel}
                value={start}
                onChange={(date) => {
                  if (!date) {
                    return;
                  }
                  const next = applyDateKeepTime(start, date);
                  setStart(next);
                  emitDraft({ start: next });
                }}
              />
              {!allDay ? (
                <TimePicker
                  label={translations.startTimeLabel}
                  format={TIME_FORMAT_24H}
                  minuteStep={MINUTE_STEP}
                  value={formatTimeValue(start)}
                  onChange={(time) => {
                    if (!time) {
                      return;
                    }
                    const next = applyTimeKeepDate(start, time);
                    setStart(next);
                    emitDraft({ start: next });
                  }}
                />
              ) : null}
            </Flex>
          ) : null}
          {showField(fields, FIELD_END) ? (
            <Flex direction="column" gap={2}>
              <DatePicker
                label={translations.endLabel}
                value={end}
                onChange={(date) => {
                  if (!date) {
                    return;
                  }
                  const next = applyDateKeepTime(end, date);
                  setEnd(next);
                  emitDraft({ end: next });
                }}
              />
              {!allDay ? (
                <TimePicker
                  label={translations.endTimeLabel}
                  format={TIME_FORMAT_24H}
                  minuteStep={MINUTE_STEP}
                  value={formatTimeValue(end)}
                  onChange={(time) => {
                    if (!time) {
                      return;
                    }
                    const next = applyTimeKeepDate(end, time);
                    setEnd(next);
                    emitDraft({ end: next });
                  }}
                />
              ) : null}
            </Flex>
          ) : null}
        </div>
      ) : null}
      {showField(fields, FIELD_RECURRENCE) ? (
        <Select
          native
          fullWidth
          label={translations.recurrenceLabel}
          options={recurrenceOptions}
          value={recurrenceFreq}
          onChange={(value) => {
            const freq = value as CalendarRecurrenceFreq;
            setRecurrenceFreq(freq);
            emitDraft({ recurrence: recurrenceFromValues(freq, recurrenceInterval) });
          }}
        />
      ) : null}
      {showField(fields, FIELD_RECURRENCE) && recurrenceFreq === RECURRENCE_EVERY_X_MONTHS ? (
        <Input
          fullWidth
          type="number"
          label={translations.recurrenceIntervalLabel}
          value={String(recurrenceInterval)}
          onChange={(change) => {
            const interval = Number(change.target.value);
            setRecurrenceInterval(interval);
            emitDraft({ recurrence: recurrenceFromValues(recurrenceFreq, interval) });
          }}
        />
      ) : null}
      {showField(fields, FIELD_PEOPLE) && people.length > NUMBER_ZERO ? (
        <Flex direction="column" gap={2}>
          <Typography variant="caption">{translations.inviteLabel}</Typography>
          {selectedPeople.length > NUMBER_ZERO ? (
            <div className={EDIT_PEOPLE}>
              {selectedPeople.map((person) => (
                <PersonChip
                  key={person.id}
                  person={person}
                  translations={translations}
                  icons={personIcons}
                  removeLabel={CLOSE_GLYPH}
                  onRemove={() => {
                    const next = peopleIds.filter((id) => id !== person.id);
                    setPeopleIds(next);
                    emitDraft({ peopleIds: next });
                  }}
                />
              ))}
            </div>
          ) : null}
          <Input
            fullWidth
            label={translations.invitePlaceholder}
            value={inviteQuery}
            onChange={(change) => setInviteQuery(change.target.value)}
          />
          {inviteMatches.length > NUMBER_ZERO ? (
            <div className={EDIT_SUGGEST}>
              {inviteMatches.map((person) => (
                <button
                  key={person.id}
                  type="button"
                  className={EDIT_SUGGEST_ITEM}
                  onClick={() => {
                    const next = [...peopleIds, person.id];
                    setPeopleIds(next);
                    setInviteQuery(EMPTY_STRING);
                    emitDraft({ peopleIds: next });
                  }}
                >
                  <span>{person.name}</span>
                  {person.email ? <span className={EDIT_SUGGEST_META}>{person.email}</span> : null}
                </button>
              ))}
            </div>
          ) : null}
        </Flex>
      ) : null}
      {showField(fields, FIELD_RELATED_TO) ? (
        <Flex direction="column" gap={2}>
          <Typography variant="caption">{translations.relatedToLabel}</Typography>
          {selectedRelated.length > NUMBER_ZERO ? (
            <div className={EDIT_RELATED}>
              {selectedRelated.map((item) => (
                <Chip
                  key={item.id}
                  color={CHIP_COLOR}
                  variant={CHIP_SELECTED}
                  onClick={() => {
                    const next = relatedTo.filter((id) => id !== item.id);
                    setRelatedTo(next);
                    emitDraft({ relatedTo: next });
                  }}
                >
                  {item.title}
                </Chip>
              ))}
            </div>
          ) : null}
          <Input
            fullWidth
            label={translations.relatedToPlaceholder}
            value={relatedQuery}
            onChange={(change) => setRelatedQuery(change.target.value)}
          />
          {relatedMatches.length > NUMBER_ZERO ? (
            <div className={EDIT_SUGGEST}>
              {relatedMatches.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={EDIT_SUGGEST_ITEM}
                  onClick={() => {
                    const next = togglePersonId(relatedTo, item.id);
                    setRelatedTo(next);
                    setRelatedQuery(EMPTY_STRING);
                    emitDraft({ relatedTo: next });
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>
          ) : null}
        </Flex>
      ) : null}
      {showField(fields, FIELD_NOTES) ? (
        <Flex direction="column" gap={2}>
          <Typography variant="caption">{translations.notesLabel}</Typography>
          <InkEditor
            value={description}
            onChange={(value) => {
              setDescription(value);
              emitDraft({ description: value.trim() ? value : undefined });
            }}
            minHeight={INK_EDIT_MIN_HEIGHT}
            colorMode={mode === 'dark' ? 'dark' : 'light'}
          />
        </Flex>
      ) : null}
      <div className={EDIT_FOOTER}>
        {showCancel !== false ? (
          <Button fullWidth variant={BUTTON_CANCEL} onClick={onCancel}>
            {cancelContent ?? translations.cancel}
          </Button>
        ) : null}
        {showSave !== false ? (
          <Button fullWidth variant={BUTTON_SAVE} onClick={handleSave}>
            {saveContent ?? translations.save}
          </Button>
        ) : null}
      </div>
    </div>
  );
};
