import type { FC } from 'react';
import { useBear } from '@forgedevstack/bear';
import { InkEditor } from '@forgedevstack/ink';
import type { EventNotesViewProps } from './EventNotesView.types';
import { INK_VIEW_MIN_HEIGHT, NOTES_READONLY, NOTES_VIEW } from '../EventEditForm/EventEditForm.const';

export const EventNotesView: FC<EventNotesViewProps> = (props) => {
  const { html } = props;
  const { mode } = useBear();

  return (
    <div className={`${NOTES_VIEW} ${NOTES_READONLY}`}>
      <InkEditor
        value={html}
        readOnly
        minHeight={INK_VIEW_MIN_HEIGHT}
        colorMode={mode === 'dark' ? 'dark' : 'light'}
      />
    </div>
  );
};
