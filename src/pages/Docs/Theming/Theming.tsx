import { useState, type FC } from 'react';
import { Flex, Input, Typography, useBear } from '@forgedevstack/bear';
import type { CalendarTheme } from '@forgedevstack/calendar';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';
import { ForgeCalendar } from '@/components/ForgeCalendar';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { DEMO_EVENTS } from '@/pages/Demos/Demos.const';
import { THEME_FIELDS, DEFAULT_THEME } from './Theming.const';

export const DocsTheming: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const { mutedText } = useThemeColors();
  const [theme, setTheme] = useState<CalendarTheme>(DEFAULT_THEME);

  return (
    <DocLayout
      title={t.docs.themingTitle}
      description={t.docs.themingDescription}
      toc={[{ id: 'live', label: t.docs.themingHint }]}
    >
      <Typography variant="body2" style={{ color: mutedText }} className="mb-6 leading-relaxed">
        {t.docs.themingIntro}
      </Typography>
      <DocSection id="live" title={t.docs.themingHint}>
        <Flex gap={3} wrap="wrap" className="mb-6">
          {THEME_FIELDS.map((field) => (
            <Input
              key={field.key}
              label={field.label}
              type="color"
              value={theme[field.key] ?? field.fallback}
              onChange={(event) =>
                setTheme({ ...theme, [field.key]: event.target.value })
              }
            />
          ))}
        </Flex>
        <div className="calendar-demo">
          <ForgeCalendar defaultView="month" events={DEMO_EVENTS} mode={mode} theme={theme} />
        </div>
      </DocSection>
    </DocLayout>
  );
};
