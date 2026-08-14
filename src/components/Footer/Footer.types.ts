export type EcosystemKey = 'calendar' | 'bear' | 'gridTable' | 'anvil' | 'compass' | 'rail';

export interface EcosystemLib {
  key: EcosystemKey;
  href: string;
  color: string;
}
