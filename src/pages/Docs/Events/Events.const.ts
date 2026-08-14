export const CODE_CLICK = `<Calendar
  events={events}
  onEventClick={(event) => console.log(event.id)}
  onEventChange={(event) => setEvents((current) =>
    current.map((item) => item.id === event.id ? event : item)
  )}
  eventModal={{
    showEdit: true,
    showClose: true,
    showSave: true,
    showCancel: true,
    editIcon: <BearIcons.EditIcon />,
    closeIcon: <BearIcons.CloseIcon />,
  }}
/>`;

export const CODE_PEOPLE = `const people = [
  {
    id: 'maya',
    name: 'Maya',
    fullName: 'Maya Chen',
    title: 'Product design',
    avatar: '/maya.png',
    email: 'maya@acme.com',
    phone: '+1 415 555 0142',
    linkedin: 'https://linkedin.com/in/maya',
    facebook: 'https://facebook.com/maya',
    profileUrl: 'https://acme.com/maya',
  },
];

<Calendar
  events={events}
  people={people}
  personIcons={{
    email: <BearIcons.MailIcon />,
    phone: <BearIcons.PhoneIcon />,
    linkedin: <BearIcons.LinkedInIcon />,
    facebook: <BearIcons.FacebookIcon />,
    profile: <BearIcons.ExternalLinkIcon />,
  }}
  severityIcons={{
    urgent: <BearIcons.AlertTriangleIcon />,
    high: <BearIcons.FlagIcon />,
  }}
/>`;
