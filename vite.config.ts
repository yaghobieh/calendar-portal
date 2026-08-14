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
