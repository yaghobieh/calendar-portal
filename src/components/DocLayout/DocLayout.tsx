import { useState, type FC } from 'react';
import { Link } from '@forgedevstack/forge-compass/react';
import { Typography, BearIcons } from '@forgedevstack/bear';
import { Layout } from '../Layout';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { DOC_NAV } from './DocLayout.const';
import type { DocLayoutProps } from './DocLayout.types';

export const DocLayout: FC<DocLayoutProps> = (props) => {
  const { title, description, toc, children } = props;
  const { t } = useI18n();
  const { isDark, mutedText, cardBorder } = useThemeColors();
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <Typography variant="caption" className="uppercase tracking-widest font-semibold mb-3 block" style={{ color: mutedText, fontSize: 10 }}>
                {t.docs.docs}
              </Typography>
              <nav className="space-y-0.5 mb-6" style={{ borderBottom: `1px solid ${cardBorder}`, paddingBottom: '0.75rem' }}>
                {DOC_NAV.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-1 text-sm transition-colors text-slate-500 hover:text-calendar-400"
                  >
                    {t.docs.nav[item.id]}
                  </Link>
                ))}
              </nav>

              {toc.length > 0 && (
                <>
                  <Typography variant="caption" className="uppercase tracking-widest font-semibold mb-3 block" style={{ color: mutedText, fontSize: 10 }}>
                    {t.docs.onThisPage}
                  </Typography>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={item.href ?? `#${item.id}`}
                        className="block py-1 text-sm transition-colors hover:text-calendar-400"
                        style={{ color: mutedText }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </>
              )}
            </div>
          </aside>

          <button
            className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-calendar-500 text-white shadow-lg shadow-calendar-500/30 flex items-center justify-center"
            onClick={() => setTocOpen(!tocOpen)}
            aria-label={t.docs.onThisPage}
          >
            <BearIcons.MenuIcon size="sm" />
          </button>

          {tocOpen && (
            <div
              className="lg:hidden fixed inset-0 z-40 flex items-end justify-center p-4"
              onClick={() => setTocOpen(false)}
            >
              <div
                className="w-full max-w-sm rounded-2xl p-6 shadow-2xl max-h-[70vh] overflow-auto"
                style={{
                  backgroundColor: isDark ? '#151525' : '#ffffff',
                  border: `1px solid ${cardBorder}`,
                }}
                onClick={(event) => event.stopPropagation()}
              >
                <Typography variant="body2" className="font-semibold mb-3">{t.docs.documentation}</Typography>
                <nav className="space-y-2 mb-4" style={{ borderBottom: `1px solid ${cardBorder}`, paddingBottom: '0.75rem' }}>
                  {DOC_NAV.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-1 text-sm text-slate-500 hover:text-calendar-400"
                      onClick={() => setTocOpen(false)}
                    >
                      {t.docs.nav[item.id]}
                    </Link>
                  ))}
                </nav>
                {toc.length > 0 && (
                  <>
                    <Typography variant="body2" className="font-semibold mb-2">{t.docs.onThisPage}</Typography>
                    <nav className="space-y-2">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={item.href ?? `#${item.id}`}
                          className="block py-1 text-sm"
                          style={{ color: mutedText }}
                          onClick={() => setTocOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="flex-1 min-w-0">
            <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-3">
              {title}
            </Typography>
            <Typography variant="body1" style={{ color: mutedText }} className="mb-12 text-lg">
              {description}
            </Typography>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};
