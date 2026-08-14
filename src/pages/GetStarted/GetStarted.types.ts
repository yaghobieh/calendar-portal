export type GetStartedSectionKey =
  | 'install'
  | 'importCss'
  | 'basicUsage'
  | 'views'
  | 'events'
  | 'translations';

export interface GetStartedTocItem {
  id: string;
  labelKey: GetStartedSectionKey;
}
