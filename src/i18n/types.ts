import type { ReactNode } from 'react';

export type Locale = 'en' | 'es';

export interface FeatureCopy {
  title: string;
  description: string;
}

export interface EcosystemCopy {
  name: string;
  description: string;
}

export interface TranslationStrings {
  brand: string;
  nav: {
    home: string;
    getStarted: string;
    demos: string;
    api: string;
    changelog: string;
    toggleTheme: string;
    language: string;
  };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    pickerNote: string;
    getStarted: string;
    viewDemos: string;
    apiDocs: string;
    liveDemoTitle: string;
    quickStartTitle: string;
    featuresTitle: string;
    featuresDescription: string;
    ecosystemTitle: string;
    ecosystemDescription: string;
    visitForgeStack: string;
  };
  features: {
    month: FeatureCopy;
    week: FeatureCopy;
    day: FeatureCopy;
    agenda: FeatureCopy;
    keyboard: FeatureCopy;
    darkMode: FeatureCopy;
  };
  ecosystem: {
    calendar: EcosystemCopy;
    bear: EcosystemCopy;
    gridTable: EcosystemCopy;
    anvil: EcosystemCopy;
    compass: EcosystemCopy;
    rail: EcosystemCopy;
  };
  getStarted: {
    title: string;
    description: string;
    install: string;
    installDesc: string;
    importCss: string;
    importCssDesc: string;
    basicUsage: string;
    basicUsageDesc: string;
    views: string;
    viewsDesc: string;
    events: string;
    eventsDesc: string;
    translations: string;
    translationsDesc: string;
  };
  api: {
    title: string;
    description: string;
    props: string;
    prop: string;
    type: string;
    default: string;
    descriptionLabel: string;
  };
  demos: {
    title: string;
    description: string;
    month: FeatureCopy;
    week: FeatureCopy;
    day: FeatureCopy;
    agenda: FeatureCopy;
  };
  changelog: {
    title: string;
    description: string;
    latest: string;
  };
  footer: {
    tagline: string;
    mitLicense: string;
    builtWith: string;
    ecosystemHeading: string;
    resources: string;
    documentation: string;
    github: string;
    npm: string;
    ecosystemText: string;
    forgeStack: string;
  };
  docs: {
    docs: string;
    onThisPage: string;
    documentation: string;
  };
  stats: {
    views: string;
    events: string;
    typescript: string;
    mit: string;
  };
  common: {
    back: string;
    copyCode: string;
    copied: string;
    preview: string;
    code: string;
    menu: string;
  };
}

export interface I18nContextValue {
  locale: Locale;
  t: TranslationStrings;
  setLocale: (locale: Locale) => void;
}

export interface I18nProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}
