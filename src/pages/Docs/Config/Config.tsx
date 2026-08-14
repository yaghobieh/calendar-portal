import type { FC } from 'react';
import { Typography, CodeBlock, useBear } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';
import { ForgeCalendar } from '@/components/ForgeCalendar';
import { forgeCalendarConfig } from '@/config';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { DEMO_EVENTS } from '@/pages/Demos/Demos.const';
import { CODE_CONFIG, CODE_JSON } from './Config.const';

export const DocsConfig: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const { mutedText } = useThemeColors();

  return (
    <DocLayout
      title={t.docs.configTitle}
      description={t.docs.configDescription}
      toc={[
        { id: 'ts', label: t.docs.configTitle },
        { id: 'json', label: t.docs.configJson },
        { id: 'effects', label: t.docs.effectsTitle },
      ]}
    >
      <Typography variant="body2" style={{ color: mutedText }} className="mb-6 leading-relaxed">
        {t.docs.configIntro}
      </Typography>
      <DocSection id="ts" title={t.docs.configTitle}>
        <CodeBlock code={CODE_CONFIG} language="tsx" title="forgeCalendar.config.ts" copyable showLineNumbers />
        <div className="calendar-demo mt-6">
          <ForgeCalendar
            defaultView="week"
            events={DEMO_EVENTS}
            mode={mode}
            config={forgeCalendarConfig}
          />
        </div>
      </DocSection>
      <DocSection id="json" title={t.docs.configJson}>
        <CodeBlock code={CODE_JSON} language="json" title="forgeCalendar.config.json" copyable showLineNumbers />
      </DocSection>
      <DocSection id="effects" title={t.docs.effectsTitle}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4 leading-relaxed">
          {t.docs.effectsIntro}
        </Typography>
        <Typography variant="body2" style={{ color: mutedText }} className="leading-relaxed">
          {t.docs.effectsCss}
        </Typography>
      </DocSection>
    </DocLayout>
  );
};
