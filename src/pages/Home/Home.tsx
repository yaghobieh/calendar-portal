import type { FC } from 'react';
import { Link } from '@forgedevstack/forge-compass/react';
import { Typography, Button, Badge, Flex, CodeBlock, BearIcons, Card, useBear } from '@forgedevstack/bear';
import { Layout } from '@/components/Layout';
import { ForgeCalendar } from '@/components/ForgeCalendar';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { FORGESTACK_URL, ROUTE_PATHS } from '@/constants';
import {
  FEATURE_KEYS,
  HERO_STATS,
  INSTALL_HINT,
  QUICK_START_CODE,
  SAMPLE_EVENTS,
} from './Home.const';
import { HomeVideo } from './HomeVideo';
import { EcosystemStories } from './EcosystemStories';

export const Home: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const { isDark, cardBorder, mutedText, subtitleColor } = useThemeColors();

  return (
    <Layout>
      <section className="mesh-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge variant="info" className="mb-4 sm:mb-6">
                {t.home.badge}
              </Badge>

              <Typography variant="h1" className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-2">
                <span className="text-gradient-calendar">{t.home.title}</span>
              </Typography>

              <Typography variant="h4" className="font-semibold mb-4" style={{ color: subtitleColor }}>
                {t.home.subtitle}
              </Typography>

              <Typography variant="body2" className="mb-8" style={{ color: mutedText }}>
                {t.home.pickerNote}
              </Typography>

              <div
                className="cal-install-hint inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm mb-8 max-w-full"
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                  border: `1px solid ${cardBorder}`,
                }}
              >
                <span style={{ color: mutedText }}>$</span>
                <span>{INSTALL_HINT}</span>
              </div>

              <Flex gap={3} wrap="wrap">
                <Link to={ROUTE_PATHS.GET_STARTED}>
                  <Button variant="calendar" size="md" leftIcon={<BearIcons.BookOpenIcon size="xs" />}>
                    {t.home.getStarted}
                  </Button>
                </Link>
                <Link to={ROUTE_PATHS.DEMOS}>
                  <Button variant="calendarGhost" size="md" leftIcon={<BearIcons.PlayIcon size="xs" />}>
                    {t.home.viewDemos}
                  </Button>
                </Link>
                <Link to={ROUTE_PATHS.API}>
                  <Button variant="ghost" size="md">
                    {t.home.apiDocs}
                  </Button>
                </Link>
              </Flex>

              <Flex gap={8} className="mt-12" wrap="wrap">
                {HERO_STATS.map((stat) => (
                  <div key={stat.labelKey} className="text-center">
                    <Typography variant="h4" className="font-bold">{stat.value}</Typography>
                    <Typography variant="caption" style={{ color: mutedText }} className="uppercase tracking-wider text-[10px]">
                      {t.stats[stat.labelKey]}
                    </Typography>
                  </div>
                ))}
              </Flex>
            </div>

            <div className="glow-calendar rounded-2xl overflow-hidden">
              <Typography variant="body2" className="font-semibold mb-3">
                {t.home.liveDemoTitle}
              </Typography>
              <div className="calendar-demo">
                <ForgeCalendar defaultView="month" events={SAMPLE_EVENTS} mode={mode} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-16">
        <CodeBlock
          code={QUICK_START_CODE}
          language="tsx"
          title={t.home.quickStartTitle}
          copyable
          showLineNumbers
        />
      </section>

      <HomeVideo />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-3">{t.home.featuresTitle}</Typography>
          <Typography variant="body1" style={{ color: mutedText }} className="max-w-2xl mx-auto">
            {t.home.featuresDescription}
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURE_KEYS.map((key) => {
            const feature = t.features[key];
            return (
              <Card key={key} variant="ghost" padding="md" interactive className="card-hover">
                <Typography variant="body2" className="font-semibold mb-1">{feature.title}</Typography>
                <Typography variant="caption" style={{ color: mutedText }} className="leading-relaxed">
                  {feature.description}
                </Typography>
              </Card>
            );
          })}
        </div>
      </section>

      <EcosystemStories />

      <div className="text-center mb-20">
        <a href={FORGESTACK_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="calendarGhost">{t.home.visitForgeStack}</Button>
        </a>
      </div>
    </Layout>
  );
};
