import type { BearThemeOverride, CustomVariantsMap } from '@forgedevstack/bear';

export const CALENDAR_COLORS = {
  primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e',
  },
  secondary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22',
  },
} as const;

export const calendarTheme: BearThemeOverride = {
  colors: {
    primary: CALENDAR_COLORS.primary,
    secondary: CALENDAR_COLORS.secondary,
  },
  typography: {
    fontFamily: {
      sans: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.25rem',
  },
};

export const calendarVariants: CustomVariantsMap = {
  calendar: {
    bg: '#0d9488',
    bgHover: '#0f766e',
    text: '#ffffff',
    ring: '#2dd4bf',
  },
  calendarGhost: {
    bg: 'rgba(13, 148, 136, 0.1)',
    bgHover: 'rgba(13, 148, 136, 0.2)',
    text: '#2dd4bf',
    border: 'rgba(13, 148, 136, 0.3)',
  },
  calendarSubtle: {
    bg: 'rgba(45, 212, 191, 0.08)',
    bgHover: 'rgba(45, 212, 191, 0.15)',
    text: '#5eead4',
    border: 'rgba(45, 212, 191, 0.2)',
  },
};
