import type { FC } from 'react';
import { Tab, TabList, TabPanel, Tabs, Typography } from '@forgedevstack/bear';
import { Layout } from '@/components/Layout';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import {
  DEFAULT_DEMO_TAB,
  DEMO_CODES,
  DEMO_EVENTS,
  DEMO_KEYS,
  RESIZE_CODE,
  RESIZE_DEMO_VIEW,
  TAB_ADD,
  TAB_AGENDA,
  TAB_DAY,
  TAB_MONTH,
  TAB_RESIZE,
  TAB_WEEK,
} from './Demos.const';
import { AddEventDemo, DemoSection } from './components';

export const Demos: FC = () => {
  const { t } = useI18n();
  const { mutedText } = useThemeColors();

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 overflow-x-hidden">
        <div className="text-center mb-12">
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-3">{t.demos.title}</Typography>
          <Typography variant="body1" style={{ color: mutedText }} className="max-w-2xl mx-auto">
            {t.demos.description}
          </Typography>
        </div>

        <Tabs defaultTab={DEFAULT_DEMO_TAB}>
          <TabList wrap>
            <Tab id={TAB_MONTH}>{t.demos.month.title}</Tab>
            <Tab id={TAB_WEEK}>{t.demos.week.title}</Tab>
            <Tab id={TAB_DAY}>{t.demos.day.title}</Tab>
            <Tab id={TAB_AGENDA}>{t.demos.agenda.title}</Tab>
            <Tab id={TAB_ADD}>{t.demos.addEvents.title}</Tab>
            <Tab id={TAB_RESIZE}>{t.demos.resize.title}</Tab>
          </TabList>
          {DEMO_KEYS.map((key) => {
            const demo = t.demos[key];
            return (
              <TabPanel key={key} tabId={key}>
                <DemoSection
                  view={key}
                  title={demo.title}
                  description={demo.description}
                  events={DEMO_EVENTS}
                  code={DEMO_CODES[key]}
                />
              </TabPanel>
            );
          })}
          <TabPanel tabId={TAB_ADD}>
            <AddEventDemo initialEvents={DEMO_EVENTS} />
          </TabPanel>
          <TabPanel tabId={TAB_RESIZE}>
            <DemoSection
              view={RESIZE_DEMO_VIEW}
              title={t.demos.resize.title}
              description={t.demos.resize.description}
              events={DEMO_EVENTS}
              code={RESIZE_CODE}
            />
          </TabPanel>
        </Tabs>
      </div>
    </Layout>
  );
};
