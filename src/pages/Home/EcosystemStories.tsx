import { useState, type FC } from 'react';
import { Card, Flex, Typography } from '@forgedevstack/bear';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { ECOSYSTEM_CARDS } from './Home.const';
import { STORY_DURATION_MS } from './EcosystemStories.const';

export const EcosystemStories: FC = () => {
  const { t } = useI18n();
  const { mutedText } = useThemeColors();
  const [active, setActive] = useState(ECOSYSTEM_CARDS[0].key);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-10">
        <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-3">
          {t.home.ecosystemTitle}
        </Typography>
        <Typography variant="body1" style={{ color: mutedText }} className="max-w-2xl mx-auto">
          {t.home.ecosystemDescription}
        </Typography>
        <Typography variant="caption" style={{ color: mutedText }} className="mt-3 block">
          {t.home.ecosystemStoriesHint}
        </Typography>
      </div>

      <Flex gap={4} justify="center" wrap="wrap" className="mb-10">
        {ECOSYSTEM_CARDS.map((lib) => {
          const copy = t.ecosystem[lib.key];
          const isActive = active === lib.key;
          return (
            <button
              key={lib.key}
              type="button"
              className={`cal-story ${isActive ? 'cal-story--active' : ''}`}
              style={{ ['--story-color' as string]: lib.color, animationDuration: `${STORY_DURATION_MS}ms` }}
              onClick={() => setActive(lib.key)}
            >
              <span className="cal-story__ring">
                <span className="cal-story__dot" style={{ backgroundColor: lib.color }} />
              </span>
              <Typography variant="caption">{copy.name}</Typography>
            </button>
          );
        })}
      </Flex>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ECOSYSTEM_CARDS.map((lib) => {
          const copy = t.ecosystem[lib.key];
          return (
            <a key={lib.key} href={lib.href} target="_blank" rel="noopener noreferrer">
              <Card
                variant="ghost"
                padding="md"
                interactive
                className={`card-hover h-full ${active === lib.key ? 'cal-eco-card--active' : ''}`}
              >
                <div className="cal-eco-gif" style={{ ['--story-color' as string]: lib.color }}>
                  <span className="cal-eco-gif__bar" />
                  <span className="cal-eco-gif__bar" />
                  <span className="cal-eco-gif__chip" />
                </div>
                <Typography variant="body2" className="font-semibold mb-0.5">{copy.name}</Typography>
                <Typography variant="caption" style={{ color: mutedText }}>
                  {copy.description}
                </Typography>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
};
