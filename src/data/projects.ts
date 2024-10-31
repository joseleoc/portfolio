import OnegLogo from '../assets/img/projects/oneg/oneg-logo.webp';
import OnegLoader from '../assets/img/projects/oneg/oneg-loader.webp';
import OnegLanding from '../assets/img/projects/oneg/oneg-landing.webp';
import OnegPricing from '../assets/img/projects/oneg/oneg-pricing.webp';
import OnegStories from '../assets/img/projects/oneg/oneg-stories.webp';

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
    id: 'Oneg',
    tags: ['NestJS', 'OpenIA', 'Elevenlabs', 'ChatGPT', 'DALL-E', 'MongoDB','Typescript'],
    image: OnegLogo.src,
    images: [OnegLoader.src, OnegLanding.src,OnegPricing.src, OnegStories.src],
    github: 'https://github.com/joseleoc/nest-template/tree/oneg',
    localized: {
      en: {
        title: "Oneg",
        description: "Oneg is an AI-powered storytelling platform that allows users to create, manage, and interact with AI-generated stories.",
        fullDescription: "Oneg is an AI-powered storytelling platform that empowers users to create, manage, and interact with AI-generated stories. Our platform leverages advanced AI models to generate captivating narratives, complete with text, images, and audio. Users can explore a diverse range of stories or create their own unique tales. The backend, built with NestJS and MongoDB, ensures seamless management of stories, including features like likes, views, and shares.",
      },
      es: {
        title: "Oneg",
        description: "Oneg es una plataforma de narración impulsada por IA que permite a los usuarios crear, administrar e interactuar con historias generadas por IA.",
        fullDescription: "Oneg es una plataforma de narración impulsada por IA que permite a los usuarios crear, administrar e interactuar con historias generadas por IA. Nuestra plataforma utiliza modelos de IA avanzados para generar narrativas cautivadoras, completas con texto, imágenes y audio. Los usuarios pueden explorar una amplia gama de historias o crear sus propias historias únicas. El backend, construido con NestJS y MongoDB, garantiza una gestión fluida de las historias, incluidas funciones como me gusta, vistas y compartidos.",
      }
    }
  },
  {
    id: 'kudoers-project',
    localized: {
      en: {
        title: 'Kudoers',
        description: 'Developed a recognition platform to boost morale and foster a positive work environment.',
        fullDescription: 'As a full-stack developer at Kudoers, I was responsible for crafting intuitive user interfaces and optimizing backend performance. My key achievements include: developing efficient algorithms to calculate complex relationship analytics, reducing load times by 98%, and creating dynamic node graphs that visualize these analytics in real-time. These enhancements have significantly improved the overall user experience and made Kudoers a valuable tool for teams seeking to recognize and celebrate their achievements.',
      },
      es: {
        title: 'Kudoers',
        description: 'Desarrollamos una plataforma de reconocimiento para impulsar la moral y fomentar un ambiente de trabajo positivo.',
        fullDescription: 'Como desarrollador full-stack en Kudoers, fui responsable de crear interfaces de usuario intuitivas y optimizar el rendimiento del backend. Mis principales logros incluyen: desarrollar algoritmos eficientes para calcular analíticas de relaciones complejas, reducir los tiempos de carga en un 98% y crear gráficos de nodos dinámicos que visualizan estas analíticas en tiempo real. Estas mejoras han mejorado significativamente la experiencia general del usuario y han convertido a Kudoers en una herramienta valiosa para los equipos que buscan reconocer y celebrar sus logros.',
      }
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