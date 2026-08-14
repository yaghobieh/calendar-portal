import { createContext, useContext, useState, type FC } from 'react';
import type { I18nContextValue, I18nProviderProps, Locale } from './types';
import { DEFAULT_LOCALE, I18N_MISSING_PROVIDER, LOCALE_STORAGE_KEY, TRANSLATIONS } from './i18n.const';

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: FC<I18nProviderProps> = (props) => {
  const { children, defaultLocale } = props;
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (defaultLocale) return defaultLocale;
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored === 'en' || stored === 'es') return stored;
    } catch {}
    return DEFAULT_LOCALE;
  });

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {}
  };

  return (
    <I18nContext.Provider value={{ locale, t: TRANSLATIONS[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error(I18N_MISSING_PROVIDER);
  return ctx;
}
