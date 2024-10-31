import KudoersLogo from '../assets/img/projects/kudoers/kudoers-logo.webp';
import KudoersResults from '../assets/img/projects/kudoers/kudoers-results.jpg';
import KudoersReading from '../assets/img/projects/kudoers/kudoers-reading.jpg';
import KudoersRecognition from '../assets/img/projects/kudoers/kudoers-recognition.jpg';

import TDHLogo from '../assets/img/projects/tdh-fest/tdh-fest-logo.png';
import TDHForm from '../assets/img/projects/tdh-fest/tdh-form.jpg';
import TDHLogin from '../assets/img/projects/tdh-fest/tdh-login.jpg';
import TDHScanner from '../assets/img/projects/tdh-fest/tdh-scanner.jpg';

import VeritiLogo from '../assets/img/projects/veriti/veriti-logo.jpg';
import VeritiData from '../assets/img/projects/veriti/veriti-data.jpg';
import VeritiSession from '../assets/img/projects/veriti/veriti-session.jpg';

import type { languages } from "../i18n/ui";

interface LocalizedProject {
  title: string;
  description: string;
  fullDescription: string;
}

type LocalizedProjectMap = {
  [key in keyof typeof languages]: LocalizedProject;
}

export interface Project {
  id: string;
  localized: LocalizedProjectMap;
  image: string;
  images: string[];
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'kudoers-project',
    localized: {
      en: {
        title: 'Kudoers Recognition Platform',
        description: 'Developed a recognition platform to boost morale and foster a positive work environment.',
        fullDescription: 'As a full-stack developer at Kudoers, I was responsible for crafting intuitive user interfaces and optimizing backend performance. My key achievements include: developing efficient algorithms to calculate complex relationship analytics, reducing load times by 98%, and creating dynamic node graphs that visualize these analytics in real-time. These enhancements have significantly improved the overall user experience and made Kudoers a valuable tool for teams seeking to recognize and celebrate their achievements.',
      },
      es: {
        title: 'Kudoers Recognition Platform',
        description: 'Developed a recognition platform to boost morale and foster a positive work environment.',
        fullDescription: 'As a full-stack developer at Kudoers, I was responsible for crafting intuitive user interfaces and optimizing backend performance. My key achievements include: developing efficient algorithms to calculate complex relationship analytics, reducing load times by 98%, and creating dynamic node graphs that visualize these analytics in real-time. These enhancements have significantly improved the overall user experience and made Kudoers a valuable tool for teams seeking to recognize and celebrate their achievements.',
      },
    },
    tags: ['Angular', 'Ionic', 'Firebase', 'node.js', 'Typescript'],
    image: KudoersLogo.src,
    images: [KudoersLogo.src, KudoersResults.src, KudoersReading.src, KudoersRecognition.src],
    link: 'https://play.google.com/store/apps/details?id=com.innovarhyno.kudo.app&pcampaignid=web_share',
    github: ''
  },
  {
    id: 'tdh-fest-project',
    localized: {
      en: {
        title: 'TDH Fest',
        description: 'Developed a comprehensive event management platform for TDH Fest.',
        fullDescription: 'TDH Fest is an event management platform that streamlines attendee registration and access control. We implemented a system for generating and sending digital tickets with QR codes, along with an intuitive registration form. We built a mobile app for quick and efficient ticket verification at the event. Additionally, we created a dashboard to generate detailed reports on sales and attendance, providing a valuable tool for decision-making.',},
      es: {
        title: 'TDH Fest',
        description: 'Developed a comprehensive event management platform for TDH Fest.',
        fullDescription: 'TDH Fest is an event management platform that streamlines attendee registration and access control. We implemented a system for generating and sending digital tickets with QR codes, along with an intuitive registration form. We built a mobile app for quick and efficient ticket verification at the event. Additionally, we created a dashboard to generate detailed reports on sales and attendance, providing a valuable tool for decision-making.',
      },
    },
    tags: ['React Native', 'Firebase', 'React', 'Cost estimation'],
    image: TDHLogo.src,
    images: [TDHLogo.src, TDHForm.src, TDHLogin.src, TDHScanner.src],
    github: 'https://github.com/lagoonStudios/TDHFest.scanner'
  },
  {
    id: 'ask-teach',
    localized: {
      en: {
        title: 'Ask Teach: Actionable Insights from Workshops',
      description: 'Developed the frontend for an insights gathering platform.',
      fullDescription: 'As a frontend developer, I played a key role in building the MVP for Ask Teach, a project aimed at gathering actionable insights from facilitated workshops. My responsibilities included collaborating with the team to design and develop the user interface, creating comprehensive documentation to guide future development, and contributing to cost estimation.',
      },
      es: {
        title: 'Ask Teach: Actionable Insights from Workshops',
      description: 'Developed the frontend for an insights gathering platform.',
      fullDescription: 'As a frontend developer, I played a key role in building the MVP for Ask Teach, a project aimed at gathering actionable insights from facilitated workshops. My responsibilities included collaborating with the team to design and develop the user interface, creating comprehensive documentation to guide future development, and contributing to cost estimation.',
      },
    },
    tags: ['React', 'Documentation', 'Cost Estimation'],
    image: VeritiLogo.src,
    images: [VeritiLogo.src, VeritiData.src, VeritiSession.src],
    link: 'https://ask-teach.com', // Replace with actual link if applicable
    github: 'https://github.com/your-username/ask-teach' // Replace with actual GitHub link if applicable
  },
  {
    id: 'ris-software',
    localized: {
      en: {
        title: 'RIS Software',
        description: 'Developed a web application to improve efficiency in medical diagnostic centers.',
        fullDescription: 'RIS Software is a web application that streamlines processes in medical diagnostic centers. My role was fundamental in developing the frontend, where I implemented functionalities to manage medical profiles, assign tasks, and visualize the status of medical studies. By optimizing the user interface and improving workflow efficiency, I contributed to better resource management and faster patient care.',
      }, 
      es: {title: 'RIS Software',
        description: 'Developed a web application to improve efficiency in medical diagnostic centers.',
        fullDescription: 'RIS Software is a web application that streamlines processes in medical diagnostic centers. My role was fundamental in developing the frontend, where I implemented functionalities to manage medical profiles, assign tasks, and visualize the status of medical studies. By optimizing the user interface and improving workflow efficiency, I contributed to better resource management and faster patient care.',
      },
    },
    tags: ['React', 'Zustand', 'Firebase', 'Cost estimation'],
    image: 'ris-software-screenshot.png', 
    images: ['ris-profile-management.png', 'ris-task-assignment.png', 'ris-study-status.png'],
    link: 'https://ris-software.com', 
    github: 'https://github.com/your-username/ris-software'
  },
  {
    id: 'rolling-garage',
    localized: {
      en: {
        title: 'Rolling Garage: Connecting Motorcycle Enthusiasts',
      description: 'Modernized a motorcycle enthusiast platform to enhance user experience and performance.',
      fullDescription: 'Rolling Garage is a digital platform that connects motorcycle enthusiasts, facilitating group rides and fostering a community of travelers. As a developer, my role was to modernize the application by updating it to the latest versions of Angular and Ionic. I conducted extensive testing to ensure optimal performance and fix any anomalies, guaranteeing a smooth and reliable user experience. By optimizing the code and resolving multiple bugs, I significantly contributed to improving the platform\'s stability and scalability.',
      },
      es: {
        title: 'Rolling Garage: Connecting Motorcycle Enthusiasts',
      description: 'Modernized a motorcycle enthusiast platform to enhance user experience and performance.',
      fullDescription: 'Rolling Garage is a digital platform that connects motorcycle enthusiasts, facilitating group rides and fostering a community of travelers. As a developer, my role was to modernize the application by updating it to the latest versions of Angular and Ionic. I conducted extensive testing to ensure optimal performance and fix any anomalies, guaranteeing a smooth and reliable user experience. By optimizing the code and resolving multiple bugs, I significantly contributed to improving the platform\'s stability and scalability.',
      },
    },
    tags: ['Angular', 'Ionic',],
    image: 'rolling-garage-screenshot.png', // Replace with actual image path
    images: ['rolling-garage-group-rides.png', 'rolling-garage-community-forum.png', 'rolling-garage-mobile-app.png'], // Replace with actual image paths
    link: 'https://rolling-garage.com', // Replace with actual link if applicable
    github: 'https://github.com/your-username/rolling-garage' // Replace with actual GitHub link if applicable
  },
];