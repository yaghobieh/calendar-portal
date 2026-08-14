import { useState, type FC } from 'react';
import { Button, Flex, Typography, useBear } from '@forgedevstack/bear';
import type { CalendarView } from '@forgedevstack/calendar';
import { ForgeCalendar } from '@/components/ForgeCalendar';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks';
import { DEMO_EVENTS } from '@/pages/Demos/Demos.const';
import { VIEW_OPTIONS } from './ViewSwitchDemo.const';

export const ViewSwitchDemo: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const { mutedText } = useThemeColors();
  const [view, setView] = useState<CalendarView>('month');

  return (
    <Flex direction="column" gap={4}>
      <Typography variant="caption" style={{ color: mutedText }}>
        {t.docs.viewsSwitchHint}
      </Typography>
      <Flex gap={2} wrap="wrap">
        {VIEW_OPTIONS.map((option) => (
          <Button
            key={option}
            size="sm"
            variant={view === option ? 'calendar' : 'calendarGhost'}
            onClick={() => setView(option)}
          >
            {t.features[option].title}
          </Button>
        ))}
      </Flex>
      <div className="calendar-demo">
        <ForgeCalendar view={view} onViewChange={setView} events={DEMO_EVENTS} mode={mode} />
      </div>
    </Flex>
  );
};
