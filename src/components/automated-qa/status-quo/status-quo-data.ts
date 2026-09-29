import type { ComponentType } from 'react';
import { SpreadsheetMockup } from './SpreadsheetMockup';
import { FeedbackTimelineMockup } from './FeedbackTimelineMockup';
import { StatusQuoMeshVisual } from './StatusQuoMeshVisual';

export type StatusQuoCardData = {
  stat: string;
  title: string;
  body: string;
  Visual: ComponentType;
  visualLayout: 'mesh' | 'mockup';
};

export const STATUS_QUO_CARDS: StatusQuoCardData[] = [
  {
    stat: '2%',
    title: 'You sample 2%, miss the other 98%.',
    body: 'Random sampling means most coaching moments are lost the day they happen.',
    Visual: StatusQuoMeshVisual,
    visualLayout: 'mesh'
  },
  {
    stat: '1 day / wk',
    title: 'Reviews take hours, not minutes.',
    body: 'QA managers burn a full day a week filling out scorecards in spreadsheets.',
    Visual: SpreadsheetMockup,
    visualLayout: 'mockup'
  },
  {
    stat: '3 weeks',
    title: 'Agents get feedback weeks late.',
    body: 'By the time a bad pattern is caught, it has already shaped a dozen more tickets.',
    Visual: FeedbackTimelineMockup,
    visualLayout: 'mockup'
  }
];
