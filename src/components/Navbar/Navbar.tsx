import { useState, useEffect, type FC } from 'react';
import { Link } from '@forgedevstack/forge-compass/react';
import {
  Button,
  Typography,
  Flex,
  Badge,
  BearIcons,
  Dropdown,
  useBear,
} from '@forgedevstack/bear';
import { useI18n } from '@/i18n';
import type { Locale } from '@/i18n/types';
import { GITHUB_URL, NPM_URL, NAV_LINKS, ROUTE_PATHS, CURRENT_VERSION, VERSION_PREFIX } from '@/constants';
import { LOCALE_META } from './Navbar.const';

export const Navbar: FC = () => {
  const { mode, toggleMode } = useBear();
  const { t, locale, setLocale } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const versionLabel = `${VERSION_PREFIX}${CURRENT_VERSION}`;

  useEffect(() => {
    document.body.classList.toggle('light', mode === 'light');
  }, [mode]);

  const localeItems = (Object.keys(LOCALE_META) as Locale[]).map((loc) => ({
    key: loc,
    label: `${LOCALE_META[loc].flag}  ${LOCALE_META[loc].label}`,
    onClick: () => setLocale(loc),
  }));

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="cal-navbar sticky top-0 z-50 backdrop-blur-md">
      <div className="cal-navbar__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-2">
        <Flex align="center" gap={2} className="cal-navbar__brand flex-shrink-0 min-w-0">
          <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-calendar-400 to-calendar-600 flex items-center justify-center flex-shrink-0">
              <BearIcons.CalendarIcon size="xs" />
            </div>
            <Typography variant="h5" className="cal-navbar__title font-bold truncate">
              {t.brand}
            </Typography>
          </Link>
          <Badge variant="info" className="cal-navbar__version text-xs font-mono flex-shrink-0">
            {versionLabel}
          </Badge>
        </Flex>

        <Flex align="center" gap={5} className="hidden md:flex flex-1 justify-center">
          {NAV_LINKS.map((item) => (
            <Link key={item.id} to={item.href}>
              <Typography variant="body2" className="hover:opacity-100 opacity-60 transition-opacity cursor-pointer whitespace-nowrap">
                {t.nav[item.id]}
              </Typography>
            </Link>
          ))}
        </Flex>

        <Flex align="center" gap={1} className="cal-navbar__actions flex-shrink-0 ml-auto">
          <a href={NPM_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
            <Button variant="ghost" size="sm" icon={<BearIcons.PackageIcon size="xs" />} aria-label={t.footer.npm} />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
            <Button variant="ghost" size="sm" icon={<BearIcons.GithubIcon size="xs" />} aria-label={t.footer.github} />
          </a>
          <div className="hidden md:inline-flex">
            <Dropdown
              trigger={
                <Button variant="ghost" size="sm" leftIcon={<BearIcons.GlobeIcon size="xs" />} className="font-mono text-xs">
                  {LOCALE_META[locale].flag}
                </Button>
              }
              items={localeItems}
              placement="bottom-end"
              size="sm"
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMode}
            aria-label={t.nav.toggleTheme}
            icon={mode === 'dark' ? <BearIcons.SunIcon size="xs" /> : <BearIcons.MoonIcon size="xs" />}
          />
          <Link to={ROUTE_PATHS.GET_STARTED} className="hidden sm:inline-flex">
            <Button variant="calendar" size="sm" leftIcon={<BearIcons.BookOpenIcon size="xs" />}>
              {t.nav.getStarted}
            </Button>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 opacity-60 hover:opacity-100 transition-opacity"
            aria-label={t.common.menu}
          >
            {menuOpen ? <BearIcons.CloseIcon size="sm" /> : <BearIcons.MenuIcon size="sm" />}
          </button>
        </Flex>
      </div>

      {menuOpen && (
        <div className="cal-navbar__mobile md:hidden px-4 pb-4 space-y-1">
          {NAV_LINKS.map((item) => (
            <Link key={item.id} to={item.href} onClick={closeMenu}>
              <Typography
                variant="body2"
                className="block px-3 py-2 rounded-lg opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {t.nav[item.id]}
              </Typography>
            </Link>
          ))}
          <Link to={ROUTE_PATHS.GET_STARTED} onClick={closeMenu}>
            <Typography variant="body2" className="block px-3 py-2 rounded-lg opacity-70 hover:opacity-100">
              {t.nav.getStarted}
            </Typography>
          </Link>
          <a href={NPM_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <Typography variant="body2" className="block px-3 py-2 rounded-lg opacity-70 hover:opacity-100">
              {t.footer.npm}
            </Typography>
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <Typography variant="body2" className="block px-3 py-2 rounded-lg opacity-70 hover:opacity-100">
              {t.footer.github}
            </Typography>
          </a>
          <div className="px-3 py-2">
            <Dropdown
              trigger={
                <Button variant="ghost" size="sm" leftIcon={<BearIcons.GlobeIcon size="xs" />} className="font-mono text-xs">
                  {LOCALE_META[locale].flag} {t.nav.language}
                </Button>
              }
              items={localeItems}
              placement="bottom-start"
              size="sm"
            />
          </div>
        </div>
      )}
    </nav>
  );
};
