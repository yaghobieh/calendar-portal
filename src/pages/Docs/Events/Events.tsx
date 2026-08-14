import type { FC } from 'react';
import { Typography, CodeBlock, useBear } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';
import { ForgeCalendar } from '@/components/ForgeCalendar';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { DEMO_EVENTS } from '@/pages/Demos/Demos.const';
import { CODE_CLICK, CODE_PEOPLE } from './Events.const';

export const DocsEvents: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const { mutedText } = useThemeColors();

  return (
    <DocLayout
      title={t.docs.eventsTitle}
      description={t.docs.eventsDescription}
      toc={[
        { id: 'click', label: t.docs.eventsClick },
        { id: 'popup', label: t.docs.eventsPopup },
        { id: 'people', label: t.docs.eventsPeople },
        { id: 'edit', label: t.docs.eventsEdit },
      ]}
    >
      <Typography variant="body2" style={{ color: mutedText }} className="mb-6 leading-relaxed">
        {t.docs.eventsIntro}
      </Typography>
      <DocSection id="click" title={t.docs.eventsClick}>
        <div className="calendar-demo mb-6">
          <ForgeCalendar defaultView="week" events={DEMO_EVENTS} mode={mode} />
        </div>
      </DocSection>
      <DocSection id="popup" title={t.docs.eventsPopup}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4 leading-relaxed">
          {t.docs.eventsPopup}
        </Typography>
      </DocSection>
      <DocSection id="people" title={t.docs.eventsPeople}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4 leading-relaxed">
          {t.docs.eventsPeople}
        </Typography>
        <CodeBlock code={CODE_PEOPLE} language="tsx" title={t.docs.eventsPeople} copyable showLineNumbers />
      </DocSection>
      <DocSection id="edit" title={t.docs.eventsEdit}>
        <CodeBlock code={CODE_CLICK} language="tsx" title={t.docs.eventsEdit} copyable showLineNumbers />
      </DocSection>
    </DocLayout>
  );
};
