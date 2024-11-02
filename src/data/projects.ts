import OnegLogo from '../assets/img/projects/oneg/oneg-logo.webp';
import OnegLoader from '../assets/img/projects/oneg/oneg-loader.webp';
import OnegLanding from '../assets/img/projects/oneg/oneg-landing.webp';
import OnegPricing from '../assets/img/projects/oneg/oneg-pricing.webp';
import OnegStories from '../assets/img/projects/oneg/oneg-stories.webp';

import KudoersLogo from '../assets/img/projects/kudoers/kudoers-logo.webp';
import KudoersResults from '../assets/img/projects/kudoers/kudoers-results.webp';
import KudoersReading from '../assets/img/projects/kudoers/kudoers-reading.webp';
import KudoersRecognition from '../assets/img/projects/kudoers/kudoers-recognition.webp';

import TDHLogo from '../assets/img/projects/tdh-fest/tdh-fest-logo.webp';
import TDHForm from '../assets/img/projects/tdh-fest/tdh-form.webp';
import TDHLogin from '../assets/img/projects/tdh-fest/tdh-login.webp';
import TDHScanner from '../assets/img/projects/tdh-fest/tdh-scanner.webp';

import VeritiLogo from '../assets/img/projects/veriti/veriti-logo.webp';
import VeritiData from '../assets/img/projects/veriti/veriti-data.webp';
import VeritiSession from '../assets/img/projects/veriti/veriti-session.webp';

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
    // github: 'https://github.com/joseleoc/nest-template/tree/oneg',
    localized: {
      en: {
        title: "Oneg",
        description: "Oneg is an AI-powered storytelling platform that provides a personalized storytelling experience for children. As a backend developer, I was responsible for designing and building the entire backend infrastructure of Oneg, using technologies such as NestJS and MongoDB.",
        fullDescription: `
        <div>
          <h2 class="font-bold">Oneg: An AI-Powered Storytelling Platform</h2>
          <p>As a backend developer, I played a crucial role in designing and building the entire backend infrastructure of Oneg, an innovative AI-powered storytelling platform that provides personalized experiences for children.</p>
          <br />
          <h3 class="font-bold">My main contributions include:</h3>
          <br />
          <ul class="list-disc list-inside">
            <li>
              <strong>Backend development:</strong> Creating a scalable and efficient architecture to manage the generation, storage, and delivery of stories.
            </li>
            <li>
              <strong>AI integration:</strong> Implementing AI models to generate high-quality visual and textual content, as well as integrating ElevenLabs for personalized voice generation.
            </li>
            <li>
              <strong>Cloud management:</strong> Using AWS S3 to store all platform assets and MongoDB Atlas as a NoSQL database.
            </li>
            <li>
              <strong>Deployment and maintenance:</strong> Ensuring the stability and performance of the platform in production.
            </li>
          </ul>
          <br />
          <p>Through my work on Oneg, I have demonstrated my ability to solve complex problems, apply cutting-edge technologies, and build scalable solutions.</p>
        </div>
        `,
      },
      es: {
        title: "Oneg",
        description: "Oneg es una plataforma de narración impulsada por IA que ofrece una experiencia de storytelling personalizada para niños. Como desarrollador backend, he sido responsable de diseñar y construir toda la infraestructura backend de Oneg, utilizando tecnologías como NestJS y MongoDB.",
        fullDescription: `
        <div>
          <h2 class="font-bold">Oneg: Una Plataforma de Narración de Historias Impulsada por IA</h2>
          <p>Como desarrollador backend, desempeñé un papel crucial en el diseño y construcción de toda la infraestructura backend de Oneg, una innovadora plataforma de narración de historias impulsada por IA que brinda experiencias personalizadas para niños.</p>
          <br />
          <h3 class="font-bold">Mis principales contribuciones incluyen:</h3>
          <br />
          <ul class="list-disc list-inside">
            <li>
              <strong>Desarrollo backend:</strong> Creación de una arquitectura escalable y eficiente para gestionar la generación, almacenamiento y entrega de historias.
            </li>
            <li>
              <strong>Integración de IA:</strong> Implementación de modelos de IA para generar contenido visual y textual de alta calidad, así como la integración de ElevenLabs para la generación de voz personalizada.
            </li>
            <li>
              <strong>Gestión en la nube:</strong> Uso de AWS S3 para almacenar todos los activos de la plataforma y MongoDB Atlas como una base de datos NoSQL.
            </li>
            <li>
              <strong>Implementación y mantenimiento:</strong> Garantizar la estabilidad y el rendimiento de la plataforma en producción.
            </li>
          </ul>
          <br />
          <p>A través de mi trabajo en Oneg, he demostrado mi capacidad para resolver problemas complejos, aplicar tecnologías de vanguardia y construir soluciones escalables.</p>
        </div>
        `,
      }
    }
  },
  {
    id: 'kudoers-project',
    localized: {
      en: {
        title: 'Kudoers',
        description: 'Developed a recognition platform to boost morale and foster a positive work environment.',
        fullDescription: `
        <div>
          <h2 class="font-bold">Kudoers</h2>
          <p>Developed a recognition platform to boost morale and foster a positive work environment.</p>
          <br />
          <h3 class="font-bold">My main contributions include:</h3>
          <br />
          <ul class="list-disc list-inside">
            <li>
              <strong>Full-stack development:</strong> Creating intuitive user interfaces and optimizing backend performance.
            </li>
            <li>
              <strong>Efficient algorithms:</strong> Developing algorithms to calculate complex relationship analytics, reducing load time considerably.
            </li>
            <li>
              <strong>Dynamic visualizations:</strong> Creating dynamic node graphs that visualize these analytics in real-time.
            </li>
          </ul>
          <br />
          <p>These improvements have significantly enhanced the overall user experience and made Kudoers a valuable tool for teams seeking to recognize and celebrate their achievements.</p>
        </div>
        `,
      },
      es: {
        title: 'Kudoers',
        description: 'Desarrollamos una plataforma de reconocimiento para impulsar la moral y fomentar un ambiente de trabajo positivo.',
        fullDescription: `
        <div>
          <h2 class="font-bold">Kudoers</h2> <p>Desarrollamos una plataforma de reconocimiento para impulsar la moral y fomentar un ambiente de trabajo positivo.</p> <br />
          <h3 class="font-bold">Mis principales contribuciones incluyen:</h3>
          <br />
          <ul class="list-disc list-inside">
            <li>
              <strong>Desarrollo full-stack:</strong> Creación de interfaces de usuario intuitivas y optimización del rendimiento del backend.
            </li>
            <li>
              <strong>Algoritmos eficientes:</strong> Desarrollo de algoritmos para calcular analíticas de relaciones complejas, reduciendo los tiempos de carga considerablemente.
            </li>
            <li>
              <strong>Visualizaciones dinámicas:</strong> Creación de gráficos de nodos dinámicos que visualizan estas analíticas en tiempo real.
            </li>
          </ul>
          <br />
          <p>Estas contribuciones han mejorado significativamente la experiencia general del usuario y han convertido a Kudoers en una herramienta valiosa para los equipos que buscan reconocer y celebrar sus logros.</p>
          </div>
        `,
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
        fullDescription: `
        <div>
          <h2 class="font-bold">TDH Fest</h2>
          <p>Developed a comprehensive event management platform for TDH Fest.</p>
          <br />
          <p>TDH Fest is an event management platform that streamlines attendee registration and access control. We implemented a system for generating and sending digital tickets with QR codes, along with an intuitive registration form. We built a mobile app for quick and efficient ticket verification at the event. Additionally, we created a dashboard to generate detailed reports on sales and attendance, providing a valuable tool for decision-making.</p>
          </div>
        `
      },
      es: {
        title: 'TDH Fest',
        description: 'Developed a comprehensive event management platform for TDH Fest.',
        fullDescription: `
        <div>
          <h2 class="font-bold">TDH Fest</h2>
          <p>Desarrollamos una plataforma integral de gestión de eventos para TDH Fest.</p>
          <br />
          <p>TDH Fest es una plataforma de gestión de eventos que agiliza el registro de asistentes y el control de acceso. Implementamos un sistema para generar y enviar boletos digitales con códigos QR, junto con un formulario de registro intuitivo. Desarrollamos una aplicación móvil para la verificación rápida y eficiente de boletos en el evento. Además, creamos un tablero para generar informes detallados sobre ventas y asistencia, proporcionando una valiosa herramienta para la toma de decisiones.</p>
        </div>
        `,
      },
    },
    tags: ['React Native', 'Firebase', 'React', 'Cost estimation'],
    image: TDHLogo.src,
    images: [TDHLogo.src, TDHForm.src, TDHLogin.src, TDHScanner.src],
    github: 'https://github.com/lagoonStudios/TDHFest.scanner'
  },
  {
    id: 'veriti',
    localized: {
      en: {
        title: 'Veriti: Actionable Insights from Workshops',
      description: 'Developed the frontend for an insights gathering platform.',
      fullDescription: `
      <div>
        <h2 class="font-bold">Veriti: Actionable Insights from Workshops</h2>
        <p>Developed the frontend for an insights gathering platform.</p>
        <br />
        <p>As a frontend developer, I played a key role in building the MVP for Veriti, a project aimed at gathering actionable insights from facilitated workshops. My responsibilities included collaborating with the team to design and develop the user interface, creating comprehensive documentation to guide future development, and contributing to cost estimation.</p>
      </div>
      `,
      },
      es: {
        title: 'Veriti: Actionable Insights from Workshops',
      description: 'Developed the frontend for an insights gathering platform.',
      fullDescription: `
      <div>
        <h2 class="font-bold">Veriti: Actionable Insights from Workshops</h2>
        <p>Desarrollamos el frontend para una plataforma de recopilación de insights.</p>
        <br />
        <p>Como desarrollador frontend, desempeñé un papel clave en la construcción del MVP de Veriti, un proyecto destinado a recopilar insights accionables de talleres facilitados. Mis responsabilidades incluyeron colaborar con el equipo para diseñar y desarrollar la interfaz de usuario, crear documentación completa para guiar el desarrollo futuro y contribuir a la estimación de costos.</p>
      </div>
      `,
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
        fullDescription: `
        <div>
          <h2 class="font-bold">RIS Software</h2>
          <p>Developed a web application to improve efficiency in medical diagnostic centers.</p>
          <br />
          <p>RIS Software is a web application that streamlines processes in medical diagnostic centers. My role was fundamental in developing the frontend, where I implemented functionalities to manage medical profiles, assign tasks, and visualize the status of medical studies. By optimizing the user interface and improving workflow efficiency, I contributed to better resource management and faster patient care.</p>
        </div>
        `,
      }, 
      es: {title: 'RIS Software',
        description: 'Developed a web application to improve efficiency in medical diagnostic centers.',
        fullDescription: `
        <div>
          <h2 class="font-bold">RIS Software</h2>
          <p>Desarrollamos una aplicación web para mejorar la eficiencia en centros de diagnóstico médico.</p>
          <br />
          <p>RIS Software es una aplicación web que agiliza los procesos en centros de diagnóstico médico. Mi rol fue fundamental en el desarrollo del frontend, donde implementé funcionalidades para gestionar perfiles médicos, asignar tareas y visualizar el estado de los estudios médicos. Al optimizar la interfaz de usuario y mejorar la eficiencia del flujo de trabajo, contribuí a una mejor gestión de recursos y una atención al paciente más rápida.</p>
        </div>
        `,
      },
    },
    tags: ['React', 'Zustand', 'Firebase', 'Cost estimation'],
    image: '', 
    images: [],
  },
  {
    id: 'rolling-garage',
    localized: {
      en: {
        title: 'Rolling Garage: Connecting Motorcycle Enthusiasts',
      description: 'Modernized a motorcycle enthusiast platform to enhance user experience and performance.',
      fullDescription: `
      <div>
        <h2 class="font-bold">Rolling Garage: Connecting Motorcycle Enthusiasts</h2>
        <p>Modernized a motorcycle enthusiast platform to enhance user experience and performance.</p>
        <br />
        <p>Rolling Garage is a digital platform that connects motorcycle enthusiasts, facilitating group rides and fostering a community of travelers. As a developer, my role was to modernize the application by updating it to the latest versions of Angular and Ionic. I conducted extensive testing to ensure optimal performance and fix any anomalies, guaranteeing a smooth and reliable user experience. By optimizing the code and resolving multiple bugs, I significantly contributed to improving the platform's stability and scalability.</p>
      </div>

      `,
      },
      es: {
        title: 'Rolling Garage: Connecting Motorcycle Enthusiasts',
      description: 'Modernized a motorcycle enthusiast platform to enhance user experience and performance.',
      fullDescription: `
      <div>
        <h2 class="font-bold">Rolling Garage: Conectando a los Entusiastas de las Motos</h2>
        <p>Modernizamos una plataforma para entusiastas de las motos para mejorar la experiencia del usuario y el rendimiento.</p>
        <br />
        <p>Rolling Garage es una plataforma digital que conecta a los entusiastas de las motos, facilitando los paseos en grupo y fomentando una comunidad de viajeros. Como desarrollador, mi papel fue modernizar la aplicación actualizándola a las últimas versiones de Angular e Ionic. Realicé extensas pruebas para garantizar un rendimiento óptimo y corregir cualquier anomalía, garantizando una experiencia de usuario fluida y confiable. Al optimizar el código y resolver múltiples errores, contribuí significativamente a mejorar la estabilidad y escalabilidad de la plataforma.</p>
      </div>
      `,
      },
    },
    tags: ['Angular', 'Ionic',],
    image: '',
    images: [],
  },
];