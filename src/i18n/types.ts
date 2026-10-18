import type { ReactNode } from 'react';

export type Locale = 'en' | 'es';

export interface FeatureCopy {
  title: string;
  description: string;
}

export interface AddEventsCopy {
  title: string;
  description: string;
  hint: string;
  titleLabel: string;
  startLabel: string;
  endLabel: string;
  allDayLabel: string;
  descriptionLabel: string;
  add: string;
  selectedTitle: string;
  selectedEmpty: string;
  allDay: string;
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
  contextMenu: {
    create: string;
    markBusy: string;
    openEvent: string;
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
    videoCaption: string;
    ecosystemStoriesHint: string;
    quickStartTitle: string;
    featuresTitle: string;
    featuresDescription: string;
    ecosystemTitle: string;
    ecosystemDescription: string;
    visitForgeStack: string;
    newsTitle: string;
    newsItems: string[];
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
    addEvents: string;
    addEventsDesc: string;
    seeEvents: string;
    seeEventsDesc: string;
    translations: string;
    translationsDesc: string;
    intro: string;
    installBody: string;
    usageBody: string;
    nextViews: string;
    nextEvents: string;
    nextTheming: string;
    nextConfig: string;
    nextRelations: string;
    liveTitle: string;
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
    schedulerTitle: string;
    schedulerDescription: string;
    schedulerPackage: string;
    eventCalendar: string;
    eventTimeline: string;
    classicTitle: string;
    switchTitle: string;
    switchDescription: string;
    addEvents: AddEventsCopy;
    month: FeatureCopy;
    week: FeatureCopy;
    day: FeatureCopy;
    agenda: FeatureCopy;
    resize: FeatureCopy;
  };
  changelog: {
    title: string;
    description: string;
    latest: string;
    inDevelopment: string;
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
    author: string;
  };
  docs: {
    docs: string;
    onThisPage: string;
    documentation: string;
    nav: {
      getStarted: string;
      views: string;
      events: string;
      theming: string;
      config: string;
      relations: string;
      demos: string;
      api: string;
      changelog: string;
    };
    viewsTitle: string;
    viewsDescription: string;
    viewsIntro: string;
    viewsControlled: string;
    viewsSwitchHint: string;
    eventsTitle: string;
    eventsDescription: string;
    eventsIntro: string;
    eventsClick: string;
    eventsPopup: string;
    eventsPeople: string;
    eventsEdit: string;
    themingTitle: string;
    themingDescription: string;
    themingIntro: string;
    themingHint: string;
    configTitle: string;
    configDescription: string;
    configIntro: string;
    configJson: string;
    relationsTitle: string;
    relationsDescription: string;
    relationsIntro: string;
    relationsAlways: string;
    relationsOnClick: string;
    relationsHover: string;
    relationsEdit: string;
    effectsTitle: string;
    effectsDescription: string;
    effectsIntro: string;
    effectsCss: string;
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
