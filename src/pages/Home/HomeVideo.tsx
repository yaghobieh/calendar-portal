import type { FC } from 'react';
import { Card, Flex } from '@forgedevstack/bear';
import { TorchPlayer } from '@forgedevstack/torch';
import { FEATURES_VIDEO_SIZE, FEATURES_VIDEO_SRC } from './HomeVideo.const';

export const HomeVideo: FC = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <Flex justify="center">
      <Card variant="ghost" padding="md" className="w-full max-w-3xl">
        <TorchPlayer
          src={FEATURES_VIDEO_SRC}
          size={FEATURES_VIDEO_SIZE}
          centerOverlay
          loop
        />
      </Card>
    </Flex>
  </section>
);
