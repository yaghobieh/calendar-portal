export interface ChangelogRelease {
  version: string;
  date: string;
  latest: boolean;
  inDevelopment?: boolean;
  highlights: string[];
}
