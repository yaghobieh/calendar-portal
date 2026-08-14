import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const monorepoRoot = path.resolve(__dirname, '..');
const localCalendarSrc = path.join(monorepoRoot, 'calendar', 'src');
const useLocalCalendar =
  process.env.VERCEL !== '1' &&
  fs.existsSync(path.join(localCalendarSrc, 'index.ts'));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@forgedevstack/anvil': path.resolve(
        __dirname,
        './src/shims/forgedevstack-anvil.ts',
      ),
      ...(useLocalCalendar
        ? {
            '@constants': path.join(localCalendarSrc, 'constants', 'index.ts'),
            '@utils': path.join(localCalendarSrc, 'utils', 'index.ts'),
            '@hooks': path.join(localCalendarSrc, 'hooks', 'index.ts'),
            '@forgedevstack/calendar/hooks': path.join(localCalendarSrc, 'hooks', 'index.ts'),
            '@forgedevstack/calendar/styles.css': path.join(
              localCalendarSrc,
              'styles',
              'calendar.css',
            ),
            '@forgedevstack/calendar': path.join(localCalendarSrc, 'index.ts'),
          }
        : {}),
    },
  },
});
