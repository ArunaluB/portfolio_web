/* eslint-disable no-unused-vars */
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/innobot.jpg';
import Work2 from './assets/whether.jpg';
import Work3 from './assets/Capture.jpg';
import Work4 from './assets/pos.jpg';
import Work5 from './assets/mos buger.jpg';
import Work6 from './assets/project-2.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Arunalu',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Bamunusinghe',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'SriLanka',
  },

  {
    id: 5,
    title: 'Student : ',
    description: 'Current',
  },

  {
    id: 6,
    title: 'Address : ',
    description: '366/7 ,pethiyagoda road,Mulleriyawa new Town,Angoda',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '0772187484',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'arunalubamunusinghe75@gmail.com',
  },

  {
    id: 9,
    title: 'Linkedin : ',
    description: 'ArunaluBamunusinghe',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Sinhala',
  },
];

export const stats = [

  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },


  {
    id: 2,
    no: '5+',
    title: 'Completed <br /> Projects',
  },

  // {
  //   id: 3,
  //   no: '81+',
  //   title: 'Happy <br /> Customers',
  // },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },

];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023-2024',
    title: 'SLASSCOM  <span> Bootcamp </span>',
    desc: 'Future Career Bridge Bootcamp ',
  },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2024 Feb',
      title: 'Full Stack Developer <span> ICET </span>',
      desc: 'ICET Industral Training Unit -RedCode Solutions',
    },
  /*
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2005 - 2013',
      title: 'Consultant <span> Videohive </span>',
      desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
    },
  */
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022-2026',
    title: 'BSC (HONS) IN INFORMATION TECHNOLOGY <span> SLIIT </span>',
    desc: 'Specializing in Software Engineering -Faculty of Computing - Sri Lanka Institute of Information Technology (SLIIT)',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023-2024',
    title: 'iCET Certified Master <span> ICET </span>',
    desc: 'Institute of Computer Engineering Technology',
  },
  /*
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2009',
      title: 'Bachelor Degree <span> Tunis High School </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
    },
    */
];

export const skills = [
  {
    id: 1,
    title: 'JAVA ',
    percentage: '98',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Bootstrap/CSS',
    percentage: '70',
  },

  {
    id: 4,
    title: 'HTML',
    percentage: '66',
  },

  {
    id: 5,
    title: 'PHP',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Spring boot ',
    percentage: '90',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'Reactjs',
    percentage: '45',
  },

  {
    id: 9,
    title: 'SQL',
    percentage: '60',
  },
  {
    id: 10,
    title: 'MongoDB',
    percentage: '60',
  },
  {
    id: 11,
    title: 'nodejs',
    percentage: '60',
  },
  {
    id: 12,
    title: 'Kotlin',
    percentage: '60',
  },
  {
    id: 12,
    title: 'Flutter',
    percentage: '60',
  },






];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Hospital Management System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'University ITP project',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Innoboat Health',
      },
      
      {
        title: 'Preview : ',
        desc: 'https://github.com/InnobotHealth/InnobotHealthFE.git'
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs,SpringBoot,MongoDB',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/DulangaMW/Innobothealth-Access-Management-System.git'
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Weather Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Acadamic: ',
        desc: 'personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Vanila Js openwhetherApi',
      },
      {
        title: 'Preview : ',
        desc: 'https://arunalub.github.io/Weather_application/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Mobile Game Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'CarOut Game',
      },
      {
        icon: <FiUser />,
        title: 'Acadamic : ',
        desc: 'SLIIT University',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Kotlin',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/ArunaluB/Kotlin_Mobile_LabExam03.git',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Standalone Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Pos System',
      },
      {
        icon: <FiUser />,
        title: 'Acadamic : ',
        desc: 'ICET',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaFx',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/ArunaluB/PosSystem-Application.git',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Web Application',
    details: [
      {
        title: 'Project : ',
        desc: 'Buger shop',
      },
      {
        title: 'Client : ',
        desc: 'ICET',
      },
      {
        title: 'Language : ',
        desc: 'Html/Css, Javascript',
      },
      {
        title: 'Preview : ',
        desc: 'https://arunalub.github.io/Webapplication/',
      },
    ],
  },

  // {
  //   id: 6,
  //   img: Work2,
  //   title: 'Web Application',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Buger shop',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'ICET',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Html/Css, Javascript',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.ICET.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
