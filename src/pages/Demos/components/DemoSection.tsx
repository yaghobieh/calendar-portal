import { useState, type FC } from 'react';
import { Typography, CodeBlock, Button, Flex, BearIcons, useBear } from '@forgedevstack/bear';
import { ForgeCalendar } from '@/components/ForgeCalendar';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import type { DemoSectionProps } from './DemoSection.types';

export const DemoSection: FC<DemoSectionProps> = (props) => {
  const { view, title, description, events, code } = props;
  const { t } = useI18n();
  const { mode } = useBear();
  const { cardBg, cardBorder, mutedText } = useThemeColors();
  const [showCode, setShowCode] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden p-6 md:p-8"
      style={{ backgroundColor: cardBg, border: `1px solid ${cardBorder}` }}
    >
      <Flex justify="between" align="center" wrap="wrap" gap={3} className="mb-6">
        <div>
          <Typography variant="h4" className="font-bold">{title}</Typography>
          <Typography variant="caption" style={{ color: mutedText }}>{description}</Typography>
        </div>
        <Button
          variant="calendarGhost"
          size="sm"
          leftIcon={showCode ? <BearIcons.VisibilityIcon size="xs" /> : <BearIcons.CodeIcon size="xs" />}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? t.common.preview : t.common.code}
        </Button>
      </Flex>

      {showCode ? (
        <CodeBlock
          code={code}
          language="tsx"
          title={title}
          copyable
          showLineNumbers
        />
      ) : (
        <div className="calendar-demo">
          <ForgeCalendar defaultView={view} events={events} mode={mode} />
        </div>
      )}
    </div>
  );
};
