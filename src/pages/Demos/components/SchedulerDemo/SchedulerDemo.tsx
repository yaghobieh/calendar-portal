import { useState, type FC } from 'react';
import { CodeBlock, Tab, TabList, TabPanel, Tabs, Typography, useBear } from '@forgedevstack/bear';
import { EventCalendar, EventTimeline } from '@forgedevstack/calendar';
import type { CalendarEvent } from '@forgedevstack/calendar';
import { useI18n } from '@/i18n';
import { SCHEDULER_CODE, SCHEDULER_DATE, SCHEDULER_EVENTS, SCHEDULER_PACKAGE_URL } from './SchedulerDemo.const';

export const SchedulerDemo: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const [events, setEvents] = useState<CalendarEvent[]>(SCHEDULER_EVENTS);

  const onEventChange = (event: CalendarEvent) => {
    setEvents((current) => current.map((item) => (item.id === event.id ? event : item)));
  };

  const onEventCreate = (event: CalendarEvent) => {
    setEvents((current) => [...current, event]);
  };

  const onEventDelete = (event: CalendarEvent) => {
    setEvents((current) => current.filter((item) => item.id !== event.id));
  };

  return (
    <section className="mb-16">
      <Typography variant="h2" className="mb-2">{t.demos.schedulerTitle}</Typography>
      <Typography variant="body1" className="mb-4 text-gray-600 dark:text-gray-400">
        {t.demos.schedulerDescription}
      </Typography>
      <a
        href={SCHEDULER_PACKAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 inline-flex text-sm font-semibold text-pink-600 dark:text-pink-400"
      >
        {t.demos.schedulerPackage}
      </a>
      <Tabs defaultTab="calendar">
        <TabList className="mb-4">
          <Tab id="calendar">{t.demos.eventCalendar}</Tab>
          <Tab id="timeline">{t.demos.eventTimeline}</Tab>
        </TabList>
        <TabPanel tabId="calendar">
          <EventCalendar
            mode={mode}
            defaultDate={SCHEDULER_DATE}
            events={events}
            onEventChange={onEventChange}
            onEventCreate={onEventCreate}
            onEventDelete={onEventDelete}
          />
        </TabPanel>
        <TabPanel tabId="timeline">
          <EventTimeline
            defaultDate={SCHEDULER_DATE}
            events={events}
            onEventChange={onEventChange}
            onEventCreate={onEventCreate}
            onEventDelete={onEventDelete}
          />
        </TabPanel>
      </Tabs>
      <div className="mt-6">
        <CodeBlock code={SCHEDULER_CODE} language="tsx" showLineNumbers={false} />
      </div>
    </section>
  );
};
