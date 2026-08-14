import type { FC } from 'react';
import { Typography, useBear } from '@forgedevstack/bear';
import type { DocSectionProps } from './DocSection.types';

export const DocSection: FC<DocSectionProps> = (props) => {
  const { id, title, children } = props;
  const { mode } = useBear();
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <Typography
        variant="h3"
        className="text-2xl font-bold mb-4 pb-2"
        style={{ borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}` }}
      >
        {title}
      </Typography>
      {children}
    </section>
  );
};
