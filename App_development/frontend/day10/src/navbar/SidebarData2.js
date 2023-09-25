import React from 'react';
import * as FaIcons from 'react-icons/fa';

import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData2 = [
 
  {
    title: 'Dashboard',
    path: '/fee2',
    icon: <FaIcons.FaDashcube />,
    cName: 'nav-text'
  },
  {
    title: 'Teams',
    path: '/pro2',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },


  {
    title: 'Forum',
    path: '/chat2',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/cont2',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Calender',
    path: '/cal2',
    icon: <FaIcons.FaCalendarCheck />,
    cName: 'nav-text'
  },
  {
    title: 'Feedback',
    path: '/backback2',
    icon: <MdIcons.MdFeedback/>,
    cName: 'nav-text'
  }
];