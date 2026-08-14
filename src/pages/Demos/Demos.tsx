import type { FC } from 'react';
import { Typography } from '@forgedevstack/bear';
import { Layout } from '@/components/Layout';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { DEMO_CODES, DEMO_EVENTS, DEMO_KEYS } from './Demos.const';
import { DemoSection } from './components';

export const Demos: FC = () => {
  const { t } = useI18n();
  const { mutedText } = useThemeColors();

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-3">{t.demos.title}</Typography>
          <Typography variant="body1" style={{ color: mutedText }} className="max-w-2xl mx-auto">
            {t.demos.description}
          </Typography>
        </div>

        <div className="space-y-10">
          {DEMO_KEYS.map((key) => {
            const demo = t.demos[key];
            return (
              <DemoSection
                key={key}
                view={key}
                title={demo.title}
                description={demo.description}
                events={DEMO_EVENTS}
                code={DEMO_CODES[key]}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
