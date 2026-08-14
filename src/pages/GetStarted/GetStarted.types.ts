export type GetStartedSectionKey =
  | 'install'
  | 'importCss'
  | 'basicUsage'
  | 'liveTitle'
  | 'events'
  | 'addEvents'
  | 'seeEvents'
  | 'translations';

export interface GetStartedTocItem {
  id: string;
  labelKey: GetStartedSectionKey;
}
