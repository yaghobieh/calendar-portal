import { useState, type ChangeEvent, type FC } from 'react';
import {
  Alert,
  Button,
  CodeBlock,
  Flex,
  Input,
  Switch,
  Typography,
  BearIcons,
  useBear,
} from '@forgedevstack/bear';
import { InkEditor } from '@forgedevstack/ink';
import { ForgeCalendar } from '@/components/ForgeCalendar';
import type { CalendarEvent, CalendarSlot } from '@forgedevstack/calendar';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { EVENT_COLOR_PRIMARY } from '../../Demos.const';
import {
  ADD_EVENT_CODE,
  ADD_EVENT_VIEW,
  ALL_DAY_SEPARATOR,
  DATETIME_LOCAL_TYPE,
  DEFAULT_DURATION_HOURS,
  EMPTY_STRING,
  INK_FORM_MIN_HEIGHT,
  INK_READONLY_MIN_HEIGHT,
} from './AddEventDemo.const';
import {
  addHours,
  buildEventFromForm,
  formFromEvent,
  formFromSlot,
  formatEventRange,
  toDateTimeLocalValue,
} from './AddEventDemo.utils';
import type { AddEventDemoProps, AddEventFormState } from './AddEventDemo.types';

const createInitialForm = (): AddEventFormState => {
  const start = new Date();
  return {
    title: EMPTY_STRING,
    startValue: toDateTimeLocalValue(start),
    endValue: toDateTimeLocalValue(addHours(start, DEFAULT_DURATION_HOURS)),
    allDay: false,
    description: EMPTY_STRING,
  };
};

export const AddEventDemo: FC<AddEventDemoProps> = (props) => {
  const { initialEvents } = props;
  const { t } = useI18n();
  const { mode } = useBear();
  const { cardBg, cardBorder, mutedText } = useThemeColors();
  const copy = t.demos.addEvents;
  const [showCode, setShowCode] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const [form, setForm] = useState<AddEventFormState>(createInitialForm);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: event.target.value });
  };

  const handleStartChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, startValue: event.target.value });
  };

  const handleEndChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, endValue: event.target.value });
  };

  const handleDescriptionChange = (value: string) => {
    setForm({ ...form, description: value });
  };

  const handleSlotClick = (slot: CalendarSlot) => {
    setSelectedEvent(null);
    setForm(formFromSlot(slot));
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setForm(formFromEvent(event));
  };

  const handleAdd = () => {
    const nextEvent = buildEventFromForm(form, EVENT_COLOR_PRIMARY);
    if (!nextEvent) {
      return;
    }
    setEvents([...events, nextEvent]);
    setSelectedEvent(nextEvent);
    setForm({ ...form, title: EMPTY_STRING, description: EMPTY_STRING });
  };

  return (
    <div
      className="rounded-2xl overflow-hidden p-6 md:p-8"
      style={{ backgroundColor: cardBg, border: `1px solid ${cardBorder}` }}
    >
      <Flex justify="between" align="center" className="mb-4">
        <div>
          <Typography variant="h4" className="font-bold">{copy.title}</Typography>
          <Typography variant="caption" style={{ color: mutedText }}>{copy.description}</Typography>
        </div>
        <Button
          variant="calendarGhost"
          size="sm"
          leftIcon={showCode ? <BearIcons.VisibilityIcon size="xs" /> : <BearIcons.CodeIcon size="xs" />}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? t.common.preview : t.common.code}
        </Button>
      </Flex>

      {showCode ? (
        <CodeBlock
          code={ADD_EVENT_CODE}
          language="tsx"
          title={copy.title}
          copyable
          showLineNumbers
        />
      ) : (
        <Flex direction="column" gap={4}>
          <Typography variant="caption" style={{ color: mutedText }}>
            {copy.hint}
          </Typography>

          <Flex gap={3} wrap="wrap" align="end">
            <Input
              label={copy.titleLabel}
              value={form.title}
              onChange={handleTitleChange}
              required
            />
            <Input
              label={copy.startLabel}
              type={DATETIME_LOCAL_TYPE}
              value={form.startValue}
              onChange={handleStartChange}
            />
            <Input
              label={copy.endLabel}
              type={DATETIME_LOCAL_TYPE}
              value={form.endValue}
              onChange={handleEndChange}
            />
            <Switch
              label={copy.allDayLabel}
              checked={form.allDay}
              onCheckedChange={(checked) => setForm({ ...form, allDay: checked })}
            />
            <Button variant="calendar" size="md" onClick={handleAdd}>
              {copy.add}
            </Button>
          </Flex>

          <Typography variant="caption" style={{ color: mutedText }}>
            {copy.descriptionLabel}
          </Typography>
          <InkEditor
            value={form.description}
            onChange={handleDescriptionChange}
            minHeight={INK_FORM_MIN_HEIGHT}
            chrome="borderless"
          />

          {selectedEvent ? (
            <Alert severity="info" title={copy.selectedTitle}>
              <Typography variant="body2">{selectedEvent.title}</Typography>
              <Typography variant="caption">
                {formatEventRange(selectedEvent)}
                {selectedEvent.allDay ? `${ALL_DAY_SEPARATOR}${copy.allDay}` : EMPTY_STRING}
              </Typography>
              {selectedEvent.description ? (
                <div className="calendar-ink-readonly mt-2">
                  <InkEditor
                    readOnly
                    toolbarHidden
                    chrome="borderless"
                    value={selectedEvent.description}
                    minHeight={INK_READONLY_MIN_HEIGHT}
                  />
                </div>
              ) : null}
            </Alert>
          ) : (
            <Alert severity="info" title={copy.selectedTitle}>
              {copy.selectedEmpty}
            </Alert>
          )}

          <div className="calendar-demo">
            <ForgeCalendar
              defaultView={ADD_EVENT_VIEW}
              events={events}
              mode={mode}
              onSlotClick={handleSlotClick}
              onEventClick={handleEventClick}
            />
          </div>
        </Flex>
      )}
    </div>
  );
};
