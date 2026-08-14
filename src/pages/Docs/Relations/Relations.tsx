import type { FC } from 'react';
import { Typography, CodeBlock, useBear } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';
import { ForgeCalendar } from '@/components/ForgeCalendar';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { DEMO_EVENTS } from '@/pages/Demos/Demos.const';
import { CODE_EFFECTS, CODE_EFFECTS_CSS, CODE_RELATIONS, CODE_RELATIONS_CLICK } from './Relations.const';

export const DocsRelations: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const { mutedText } = useThemeColors();

  return (
    <DocLayout
      title={t.docs.relationsTitle}
      description={t.docs.relationsDescription}
      toc={[
        { id: 'always', label: t.docs.relationsAlways },
        { id: 'onclick', label: t.docs.relationsOnClick },
        { id: 'hover', label: t.docs.relationsHover },
        { id: 'edit', label: t.docs.relationsEdit },
        { id: 'effects', label: t.docs.effectsTitle },
      ]}
    >
      <Typography variant="body2" style={{ color: mutedText }} className="mb-6 leading-relaxed">
        {t.docs.relationsIntro}
      </Typography>
      <DocSection id="always" title={t.docs.relationsAlways}>
        <div className="calendar-demo mb-6">
          <ForgeCalendar
            defaultView="month"
            events={DEMO_EVENTS}
            mode={mode}
            relations={{ visible: 'always' }}
          />
        </div>
        <CodeBlock code={CODE_RELATIONS} language="tsx" title={t.docs.relationsAlways} copyable showLineNumbers />
      </DocSection>
      <DocSection id="onclick" title={t.docs.relationsOnClick}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4 leading-relaxed">
          {t.docs.relationsOnClick}
        </Typography>
        <CodeBlock code={CODE_RELATIONS_CLICK} language="tsx" title={t.docs.relationsOnClick} copyable showLineNumbers />
      </DocSection>
      <DocSection id="hover" title={t.docs.relationsHover}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4 leading-relaxed">
          {t.docs.relationsHover}
        </Typography>
      </DocSection>
      <DocSection id="edit" title={t.docs.relationsEdit}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4 leading-relaxed">
          {t.docs.relationsEdit}
        </Typography>
      </DocSection>
      <DocSection id="effects" title={t.docs.effectsTitle}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4 leading-relaxed">
          {t.docs.effectsIntro}
        </Typography>
        <CodeBlock code={CODE_EFFECTS} language="tsx" title={t.docs.effectsTitle} copyable showLineNumbers />
        <Typography variant="body2" style={{ color: mutedText }} className="mt-6 mb-4 leading-relaxed">
          {t.docs.effectsCss}
        </Typography>
        <CodeBlock code={CODE_EFFECTS_CSS} language="css" title={t.docs.effectsCss} copyable showLineNumbers />
      </DocSection>
    </DocLayout>
  );
};
