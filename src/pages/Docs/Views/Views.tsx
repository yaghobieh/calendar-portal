import type { FC } from 'react';
import { Typography, CodeBlock } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';
import { ViewSwitchDemo } from '@/pages/Demos/components';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';

const CODE_CONTROLLED = `const [view, setView] = useState<CalendarView>('month');

<Calendar
  view={view}
  onViewChange={setView}
  events={events}
/>`;

export const DocsViews: FC = () => {
  const { t } = useI18n();
  const { mutedText } = useThemeColors();

  return (
    <DocLayout
      title={t.docs.viewsTitle}
      description={t.docs.viewsDescription}
      toc={[
        { id: 'intro', label: t.docs.viewsTitle },
        { id: 'controlled', label: t.docs.viewsControlled },
      ]}
    >
      <DocSection id="intro" title={t.docs.viewsTitle}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-6 leading-relaxed">
          {t.docs.viewsIntro}
        </Typography>
        <ViewSwitchDemo />
      </DocSection>
      <DocSection id="controlled" title={t.docs.viewsControlled}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.viewsDesc}
        </Typography>
        <CodeBlock code={CODE_CONTROLLED} language="tsx" title={t.docs.viewsControlled} copyable showLineNumbers />
      </DocSection>
    </DocLayout>
  );
};
