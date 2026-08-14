import React from 'react';
import ReactDOM from 'react-dom/client';
import '@forgedevstack/bear/styles.css';
import '@forgedevstack/calendar/styles.css';
import { BearProvider } from '@forgedevstack/bear';
import { I18nProvider } from './i18n';
import { App } from './App';
import { calendarTheme, calendarVariants } from './config/bear-theme';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BearProvider
      defaultMode="dark"
      theme={calendarTheme}
      customVariants={calendarVariants}
      persistPreference
      storageKey="cal-theme"
    >
      <I18nProvider>
        <App />
      </I18nProvider>
    </BearProvider>
  </React.StrictMode>,
);
