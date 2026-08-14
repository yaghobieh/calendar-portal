import type { CalendarPerson } from '@forgedevstack/calendar';

export const NAV_ICON_STROKE = 2.5;
export const NAV_ICON_SIZE = 'md' as const;

export const AVATAR_MAYA = 'https://i.pravatar.cc/80?img=5';
export const AVATAR_JON = 'https://i.pravatar.cc/80?img=12';
export const AVATAR_PRIYA = 'https://i.pravatar.cc/80?img=32';
export const AVATAR_LUIS = 'https://i.pravatar.cc/80?img=15';

export const DEFAULT_PEOPLE: CalendarPerson[] = [
  {
    id: 'maya',
    name: 'Maya',
    fullName: 'Maya Chen',
    title: 'Product design',
    avatar: AVATAR_MAYA,
    email: 'maya.chen@forgedevstack.com',
    phone: '+1 415 555 0142',
    linkedin: 'https://www.linkedin.com/in/mayachen',
    facebook: 'https://www.facebook.com/maya.chen',
    profileUrl: 'https://forgedevstack.com/people/maya',
  },
  {
    id: 'jon',
    name: 'Jon',
    fullName: 'Jon Hale',
    title: 'Engineering',
    avatar: AVATAR_JON,
    email: 'jon.hale@forgedevstack.com',
    phone: '+1 206 555 0198',
    linkedin: 'https://www.linkedin.com/in/jonhale',
    profileUrl: 'https://forgedevstack.com/people/jon',
  },
  {
    id: 'priya',
    name: 'Priya',
    fullName: 'Priya Shah',
    title: 'Product',
    avatar: AVATAR_PRIYA,
    email: 'priya.shah@forgedevstack.com',
    phone: '+44 20 7946 0958',
    linkedin: 'https://www.linkedin.com/in/priyashah',
    facebook: 'https://www.facebook.com/priya.shah',
  },
  {
    id: 'luis',
    name: 'Luis',
    fullName: 'Luis Ortega',
    title: 'Docs',
    avatar: AVATAR_LUIS,
    email: 'luis.ortega@forgedevstack.com',
    phone: '+34 91 555 0177',
    profileUrl: 'https://forgedevstack.com/people/luis',
  },
];
