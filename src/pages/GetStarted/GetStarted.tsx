import type { FC } from 'react';
import { Link } from '@forgedevstack/forge-compass/react';
import { Typography, CodeBlock, Button, Flex, useBear } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';
import { ForgeCalendar } from '@/components/ForgeCalendar';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { ROUTE_PATHS } from '@/constants';
import { DEMO_EVENTS } from '@/pages/Demos/Demos.const';
import {
  CODE_BASIC,
  CODE_EVENTS,
  CODE_IMPORT_STYLES,
  CODE_INSTALL,
  CODE_ADD_EVENTS,
  CODE_SEE_EVENTS,
  CODE_TRANSLATIONS,
  TOC,
} from './GetStarted.const';

export const GetStarted: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const { mutedText } = useThemeColors();

  const toc = TOC.map((item) => ({
    id: item.id,
    label: t.getStarted[item.labelKey],
  }));

  return (
    <DocLayout title={t.getStarted.title} description={t.getStarted.description} toc={toc}>
      <Typography variant="body1" style={{ color: mutedText }} className="mb-8 leading-relaxed">
        {t.getStarted.intro}
      </Typography>

      <DocSection id="installation" title={t.getStarted.install}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.installBody}
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
          {t.getStarted.usageBody}
        </Typography>
        <CodeBlock code={CODE_BASIC} language="tsx" title={t.getStarted.basicUsage} copyable showLineNumbers />
      </DocSection>

      <DocSection id="live" title={t.getStarted.liveTitle}>
        <div className="calendar-demo mb-8">
          <ForgeCalendar defaultView="month" events={DEMO_EVENTS} mode={mode} />
        </div>
      </DocSection>

      <DocSection id="events" title={t.getStarted.events}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.eventsDesc}
        </Typography>
        <CodeBlock code={CODE_EVENTS} language="tsx" title={t.getStarted.events} copyable showLineNumbers />
      </DocSection>

      <DocSection id="add-events" title={t.getStarted.addEvents}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.addEventsDesc}
        </Typography>
        <CodeBlock code={CODE_ADD_EVENTS} language="tsx" title={t.getStarted.addEvents} copyable showLineNumbers />
      </DocSection>

      <DocSection id="see-events" title={t.getStarted.seeEvents}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.seeEventsDesc}
        </Typography>
        <CodeBlock code={CODE_SEE_EVENTS} language="tsx" title={t.getStarted.seeEvents} copyable showLineNumbers />
      </DocSection>

      <DocSection id="translations" title={t.getStarted.translations}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.translationsDesc}
        </Typography>
        <CodeBlock code={CODE_TRANSLATIONS} language="tsx" title={t.getStarted.translations} copyable showLineNumbers />
      </DocSection>

      <Flex direction="column" gap={3} className="mt-10">
        <Link to={ROUTE_PATHS.DOCS_VIEWS}>
          <Button variant="calendarGhost">{t.getStarted.nextViews}</Button>
        </Link>
        <Link to={ROUTE_PATHS.DOCS_EVENTS}>
          <Button variant="calendarGhost">{t.getStarted.nextEvents}</Button>
        </Link>
        <Link to={ROUTE_PATHS.DOCS_THEMING}>
          <Button variant="calendarGhost">{t.getStarted.nextTheming}</Button>
        </Link>
        <Link to={ROUTE_PATHS.DOCS_CONFIG}>
          <Button variant="calendarGhost">{t.getStarted.nextConfig}</Button>
        </Link>
        <Link to={ROUTE_PATHS.DOCS_RELATIONS}>
          <Button variant="calendarGhost">{t.getStarted.nextRelations}</Button>
        </Link>
      </Flex>
    </DocLayout>
  );
};
