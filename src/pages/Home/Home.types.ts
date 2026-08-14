import type { TranslationStrings } from '@/i18n/types';

export type FeatureKey = keyof TranslationStrings['features'];
export type StatLabelKey = keyof TranslationStrings['stats'];
export type EcosystemKey = keyof TranslationStrings['ecosystem'];

export interface HomeEcosystemCard {
  key: EcosystemKey;
  href: string;
  color: string;
}
