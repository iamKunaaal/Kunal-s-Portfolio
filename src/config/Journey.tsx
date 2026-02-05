import { BookOpen, Film } from 'lucide-react';
import React from 'react';

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const journeyItems: JourneyItem[] = [
  {
    name: 'Books',
    description: 'Books that have influenced my thinking and growth.',
    icon: BookOpen,
    href: '/books',
  },
  {
    name: 'Movies',
    description: 'Films that have inspired and entertained me.',
    icon: Film,
    href: '/movies',
  },
];

const journeyConfig = {
  journeyItems,
};

export default journeyConfig;
