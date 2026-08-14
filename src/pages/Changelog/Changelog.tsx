import type { FC } from 'react';
import { Typography, Badge } from '@forgedevstack/bear';
import { Layout } from '@/components/Layout';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { CHANGELOG_DOT_COLOR, RELEASES } from './Changelog.const';

export const Changelog: FC = () => {
  const { t } = useI18n();
  const { isDark, mutedText } = useThemeColors();
  const lineBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-3">{t.changelog.title}</Typography>
        <Typography variant="body1" style={{ color: mutedText }} className="mb-12 text-lg">
          {t.changelog.description}
        </Typography>

        <div className="space-y-12">
          {RELEASES.map((release) => (
            <div key={release.version} className="relative pl-8" style={{ borderLeft: `2px solid ${lineBorder}` }}>
              <div
                className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4"
                style={{
                  backgroundColor: CHANGELOG_DOT_COLOR,
                  borderColor: isDark ? '#0f0f1a' : '#ffffff',
                }}
              />

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Typography variant="h3" className="text-2xl font-bold">v{release.version}</Typography>
                {release.latest && (
                  <Badge variant="info">{t.changelog.latest}</Badge>
                )}
                <Typography variant="caption" style={{ color: mutedText }}>{release.date}</Typography>
              </div>

              <ul className="space-y-2">
                {release.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: mutedText }}>
                    <span className="text-calendar-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
