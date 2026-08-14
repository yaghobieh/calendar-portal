import { useBear } from '@forgedevstack/bear';

export const useThemeColors = () => {
  const { mode } = useBear();
  const isDark = mode === 'dark';

  return {
    isDark,
    mutedText: isDark ? '#64748b' : '#94a3b8',
    cardBg: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
    cardBorder: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)',
    headerBg: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
    subtitleColor: isDark ? '#e2e8f0' : '#334155',
  };
};
