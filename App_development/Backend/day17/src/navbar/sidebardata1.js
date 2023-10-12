import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData1 = [
 
  {
    title: 'Dashboard',
    path: '/fee1',
    icon: <FaIcons.FaDashcube />,
    cName: 'nav-text'
  },
  {
    title: 'Teams',
    path: '/pro1',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },


  {
    title: 'Forum',
    path: '/chat1',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/cont1',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Feedback',
    path: '/backback1',
    icon: <MdIcons.MdFeedback/>,
    cName: 'nav-text'
  }
];