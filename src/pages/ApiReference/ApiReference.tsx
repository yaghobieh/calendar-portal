import type { FC } from 'react';
import { Card, Flex, Typography } from '@forgedevstack/bear';
import { Layout } from '@/components/Layout';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { CALENDAR_PROPS } from './ApiReference.const';

export const ApiReference: FC = () => {
  const { t } = useI18n();
  const { mutedText, cardBorder, headerBg } = useThemeColors();

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-3">{t.api.title}</Typography>
        <Typography variant="body1" style={{ color: mutedText }} className="mb-10 text-lg">
          {t.api.description}
        </Typography>

        <Card variant="ghost" padding="none" className="overflow-hidden">
          <Flex
            className="px-4 py-3"
            style={{ backgroundColor: headerBg, borderBottom: `1px solid ${cardBorder}` }}
          >
            <Typography variant="caption" className="w-40 font-semibold">{t.api.prop}</Typography>
            <Typography variant="caption" className="w-64 font-semibold">{t.api.type}</Typography>
            <Typography variant="caption" className="w-28 font-semibold">{t.api.default}</Typography>
            <Typography variant="caption" className="flex-1 font-semibold">{t.api.descriptionLabel}</Typography>
          </Flex>
          {CALENDAR_PROPS.map((row) => (
            <Flex
              key={row.prop}
              className="px-4 py-3"
              style={{ borderBottom: `1px solid ${cardBorder}` }}
              align="start"
            >
              <Typography variant="caption" className="w-40 font-mono text-calendar-400">{row.prop}</Typography>
              <Typography variant="caption" className="w-64 font-mono" style={{ color: mutedText }}>{row.type}</Typography>
              <Typography variant="caption" className="w-28 font-mono" style={{ color: mutedText }}>{row.defaultValue}</Typography>
              <Typography variant="caption" className="flex-1" style={{ color: mutedText }}>{row.description}</Typography>
            </Flex>
          ))}
        </Card>
      </div>
    </Layout>
  );
};
