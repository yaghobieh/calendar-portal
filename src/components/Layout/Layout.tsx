import type { FC } from 'react';
import { useBear } from '@forgedevstack/bear';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import type { LayoutProps } from './Layout.types';

export const Layout: FC<LayoutProps> = (props) => {
  const { children, hideNav } = props;
  const { mode } = useBear();

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: mode === 'dark' ? '#0f0f1a' : '#ffffff',
        color: mode === 'dark' ? '#f8fafc' : '#0f172a',
      }}
    >
      {!hideNav && <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
