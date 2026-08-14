import type { FC } from 'react';
import { Typography, CodeBlock } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import {
  CODE_BASIC,
  CODE_EVENTS,
  CODE_IMPORT_STYLES,
  CODE_INSTALL,
  CODE_TRANSLATIONS,
  CODE_VIEWS,
  TOC,
} from './GetStarted.const';

export const GetStarted: FC = () => {
  const { t } = useI18n();
  const { mutedText } = useThemeColors();

  const toc = TOC.map((item) => ({
    id: item.id,
    label: t.getStarted[item.labelKey],
  }));

  return (
    <DocLayout title={t.getStarted.title} description={t.getStarted.description} toc={toc}>
      <DocSection id="installation" title={t.getStarted.install}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.installDesc}
        </Typography>
        <CodeBlock code={CODE_INSTALL} language="bash" title={t.getStarted.install} copyable showLineNumbers={false} />
      </DocSection>

      <DocSection id="import-css" title={t.getStarted.importCss}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.importCssDesc}
        </Typography>
        <CodeBlock code={CODE_IMPORT_STYLES} language="tsx" title={t.getStarted.importCss} copyable showLineNumbers={false} />
      </DocSection>

      <DocSection id="usage" title={t.getStarted.basicUsage}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.basicUsageDesc}
        </Typography>
        <CodeBlock code={CODE_BASIC} language="tsx" title={t.getStarted.basicUsage} copyable showLineNumbers />
      </DocSection>

      <DocSection id="views" title={t.getStarted.views}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.viewsDesc}
        </Typography>
        <CodeBlock code={CODE_VIEWS} language="tsx" title={t.getStarted.views} copyable showLineNumbers />
      </DocSection>

      <DocSection id="events" title={t.getStarted.events}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.eventsDesc}
        </Typography>
        <CodeBlock code={CODE_EVENTS} language="tsx" title={t.getStarted.events} copyable showLineNumbers />
      </DocSection>

      <DocSection id="translations" title={t.getStarted.translations}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.translationsDesc}
        </Typography>
        <CodeBlock code={CODE_TRANSLATIONS} language="tsx" title={t.getStarted.translations} copyable showLineNumbers />
      </DocSection>
    </DocLayout>
  );
};
