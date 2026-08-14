import type { FC } from 'react';
import { Typography, Flex, BearIcons, useBear } from '@forgedevstack/bear';
import { Link } from '@forgedevstack/forge-compass/react';
import { useI18n } from '@/i18n';
import { FORGESTACK_URL, GITHUB_URL, ROUTE_PATHS } from '@/constants';
import { ECOSYSTEM_LIBS } from './Footer.const';

export const Footer: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();

  return (
    <footer
      className="mt-auto"
      style={{
        borderTop: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
        backgroundColor: mode === 'dark' ? 'rgba(15,15,26,0.5)' : 'rgba(249,250,251,0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Flex align="center" gap={2} className="mb-3">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-calendar-400 to-calendar-600 flex items-center justify-center">
                <BearIcons.CalendarIcon size="xs" />
              </div>
              <Typography variant="body2" className="font-semibold">{t.brand}</Typography>
            </Flex>
            <Typography variant="caption" className="opacity-50">
              {t.footer.tagline}
            </Typography>
          </div>

          <div>
            <Typography variant="body2" className="font-semibold mb-3">{t.footer.ecosystemHeading}</Typography>
            <Flex direction="column" gap={1}>
              {ECOSYSTEM_LIBS.map((lib) => (
                <a key={lib.key} href={lib.href} target="_blank" rel="noopener noreferrer" className="group">
                  <Flex align="center" gap={2}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: lib.color }} />
                    <Typography variant="caption" className="opacity-50 group-hover:opacity-100 transition-opacity">
                      {t.ecosystem[lib.key].name}
                    </Typography>
                  </Flex>
                </a>
              ))}
            </Flex>
          </div>

          <div>
            <Typography variant="body2" className="font-semibold mb-3">{t.footer.resources}</Typography>
            <Flex direction="column" gap={1}>
              <Link to={ROUTE_PATHS.GET_STARTED}>
                <Typography variant="caption" className="opacity-50 hover:opacity-100 transition-opacity">
                  {t.footer.documentation}
                </Typography>
              </Link>
              <Link to={ROUTE_PATHS.DEMOS}>
                <Typography variant="caption" className="opacity-50 hover:opacity-100 transition-opacity">
                  {t.nav.demos}
                </Typography>
              </Link>
              <Link to={ROUTE_PATHS.API}>
                <Typography variant="caption" className="opacity-50 hover:opacity-100 transition-opacity">
                  {t.nav.api}
                </Typography>
              </Link>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Typography variant="caption" className="opacity-50 hover:opacity-100 transition-opacity">
                  {t.footer.github}
                </Typography>
              </a>
            </Flex>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
        >
          <Typography variant="caption" className="opacity-40">
            {t.footer.mitLicense} · {t.footer.builtWith} {t.footer.forgeStack}
          </Typography>
          <Typography variant="caption" className="opacity-40">
            {t.footer.ecosystemText}{' '}
            <a href={FORGESTACK_URL} className="text-calendar-400 hover:text-calendar-300 transition-colors">
              {t.footer.forgeStack}
            </a>
            .
          </Typography>
        </div>
      </div>
    </footer>
  );
};
