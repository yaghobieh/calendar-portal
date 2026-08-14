import { BearIcons } from '@forgedevstack/bear';
import type { CalendarPersonIcons, CalendarSeverityIcons } from '@forgedevstack/calendar';
import { NAV_ICON_SIZE, NAV_ICON_STROKE } from './ForgeCalendar.const';

const iconProps = {
  size: NAV_ICON_SIZE,
  color: 'currentColor',
  strokeWidth: NAV_ICON_STROKE,
} as const;

export const FORGE_PERSON_ICONS: CalendarPersonIcons = {
  email: <BearIcons.MailIcon {...iconProps} />,
  phone: <BearIcons.PhoneIcon {...iconProps} />,
  linkedin: <BearIcons.LinkedInIcon {...iconProps} />,
  facebook: <BearIcons.FacebookIcon {...iconProps} />,
  profile: <BearIcons.ExternalLinkIcon {...iconProps} />,
};

export const FORGE_SEVERITY_ICONS: CalendarSeverityIcons = {
  none: null,
  low: <BearIcons.ChevronDownIcon {...iconProps} />,
  normal: <BearIcons.MinusIcon {...iconProps} />,
  high: <BearIcons.FlagIcon {...iconProps} />,
  urgent: <BearIcons.AlertTriangleIcon {...iconProps} />,
};
