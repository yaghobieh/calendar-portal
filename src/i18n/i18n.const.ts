import type { Locale, TranslationStrings } from './types';
import { en } from './en';
import { es } from './es';

export const TRANSLATIONS: Record<Locale, TranslationStrings> = { en, es };
export const LOCALE_STORAGE_KEY = 'cal-locale';
export const DEFAULT_LOCALE: Locale = 'en';
export const I18N_MISSING_PROVIDER = 'useI18n must be used inside I18nProvider';
