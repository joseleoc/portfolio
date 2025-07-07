import OnegLogo from '../assets/img/projects/oneg/oneg-logo.svg';
import OnegLoader from '../assets/img/projects/oneg/oneg-loader.webp';
import OnegLanding from '../assets/img/projects/oneg/oneg-landing.webp';
import OnegPricing from '../assets/img/projects/oneg/oneg-pricing.webp';
import OnegStories from '../assets/img/projects/oneg/oneg-stories.webp';

import KudoersLogo from '../assets/img/projects/kudoers/kudoers-logo.svg';
import KudoersResults from '../assets/img/projects/kudoers/kudoers-results.webp';
import KudoersReading from '../assets/img/projects/kudoers/kudoers-reading.webp';
import KudoersRecognition from '../assets/img/projects/kudoers/kudoers-recognition.webp';

import TDHLogo from '../assets/img/projects/tdh-fest/tdh-fest-logo.webp';
import TDHForm from '../assets/img/projects/tdh-fest/tdh-form.webp';
import TDHLogin from '../assets/img/projects/tdh-fest/tdh-login.webp';
import TDHScanner from '../assets/img/projects/tdh-fest/tdh-scanner.webp';

import VeritiLogoDark from '../assets/img/projects/veriti/veriti-logo-dark.png';
import VeritiData from '../assets/img/projects/veriti/veriti-data.webp';
import VeritiSession from '../assets/img/projects/veriti/veriti-session.webp';

import CuentologiaLogo from '../assets/img/projects/cuentologia/cuentologia-logo.webp';
import story1 from '../assets/img/projects/cuentologia/story1.webp';
import story2 from '../assets/img/projects/cuentologia/story2.webp';
import story3 from '../assets/img/projects/cuentologia/story3.webp';

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
    id: "Cuentologia",
    tags: ["OpenIA", "ChatGPT", "DALL-E", "Elevenlabs", "AWS", "NestJS"],
    image: CuentologiaLogo.src,
    images: [CuentologiaLogo.src, story1.src, story2.src, story3.src],
    link: "https://www.cuentologia.com",
    localized: {
      en: {
        title: "Cuentologia",
        description: "Cuentologia is a children's story application that provides access to professionally crafted tales with sound effects and illustrations. My contribution focused on developing an AI-powered alternative that allows users to create custom stories in real time.",
        fullDescription: `
        <section>
          <p>Cuentologia is a children's story application that provides access to professionally crafted tales with sound effects and illustrations. My contribution focused on developing an AI-powered alternative that allows users to create custom stories in real time.</p>
          
          <p class="mt-2">I implemented a system that integrates multiple AI technologies: ChatGPT for story generation, DALL-E for image creation, and ElevenLabs for text-to-speech conversion. All generated assets (texts, images, and audio) are efficiently stored and managed in AWS S3.</p>
          <p>The application integrates audio creation and concatenation with multiple voices and background music using ffmpeg.</p>
          <br />
          <h3 class="font-bold">Key contributions:</h3>
          <br />
          <ul class="list-disc list-inside">
            <li>
              <strong>AI integration:</strong> Developed the complete pipeline for generating stories, images, and audio using various AI APIs.
            </li>
            <li>
              <strong>Cloud architecture:</strong> Designed and implemented the storage system using AWS S3 for all generated content.
            </li>
            <li>
              <strong>Design patterns:</strong> Implemented a queue and RPM system to manage the generation of stories, images, and audio.
            </li>
          </ul>
          <br />
          <p>This project served as a testing ground for the AI technologies later implemented in Oneg, allowing us to validate the quality and user acceptance of AI-generated content with a base of 3000 active users.</p>
        </section>
        `
      },
      es: {
        title: "Cuentología",
        description: "Cuentología es una aplicación de cuentos infantiles que ofrece acceso a relatos profesionales con efectos de sonido e ilustraciones. Mi participación se centró en desarrollar una alternativa con IA que permite a los usuarios crear cuentos personalizados en tiempo real.",
        fullDescription: `
        <section>
          <p>Cuentología es una aplicación de cuentos infantiles que ofrece acceso a relatos profesionales con efectos de sonido e ilustraciones. Mi participación se centró en desarrollar una alternativa con IA que permite a los usuarios crear cuentos personalizados en tiempo real.</p>
          
          <p class="mt-2">Implementé un sistema que integra múltiples tecnologías de IA: ChatGPT para la generación de historias, DALL-E para la creación de imágenes y ElevenLabs para la conversión de texto a voz. Todos los assets generados (textos, imágenes y audios) se almacenan y gestionan eficientemente en AWS S3.</p>
          <p>La aplicación integra creación y concatenación de audios con múltiples voces y música de fondo con ffmpeg.</p>
          <br />
          <h3 class="font-bold">Principales contribuciones:</h3>
          <br />
          <ul class="list-disc list-inside">
            <li>
              <strong>Integración de IA:</strong> Desarrollé la pipeline completa para generar historias, imágenes y audio utilizando diversas APIs de IA.
            </li>
            <li>
              <strong>Arquitectura en la nube:</strong> Diseñé e implementé el sistema de almacenamiento usando AWS S3 para todo el contenido generado.
            </li>
            <li>
              <strong>Patrones de diseño</strong> Implementé manejos de colas y RPM para asegurar el correcto funcionamiento de la API en todo momento.
            </li>
          </ul>
          <br />
          <p>Este proyecto sirvió como banco de pruebas para las tecnologías de IA luego implementadas en Oneg, permitiéndonos validar la calidad y aceptación de los usuarios con una base de 3000 usuarios activos.</p>
        </section>
        `
      }
    }
  },
  {
    id: 'Oneg',
    tags: ['NestJS', 'OpenIA', 'Elevenlabs', 'ChatGPT', 'DALL-E', 'MongoDB', 'Typescript'],
    image: OnegLogo.src,
    images: [OnegLoader.src, OnegLanding.src, OnegPricing.src, OnegStories.src],
    link: "https://play.google.com/store/apps/details?id=com.oneg.app",
    localized: {
      en: {
        title: "Oneg",
        description: "Oneg is a mobile app for creating children's stories using artificial intelligence. It generates AI-written texts, colorful images to illustrate the stories, and uses Elevenlabs for text-to-speech conversion, providing an immersive experience.",
        fullDescription: `
        <section>
          <p>Oneg is a mobile application designed for creating children's stories using artificial intelligence. The platform generates unique texts with AI, complemented by colorful images to set the scene for the stories, and leverages Elevenlabs for text-to-speech conversion, providing an immersive experience.</p>
          
          <p class="mt-2">My role in the project involves end-to-end backend development, including architecture design and business logic implementation. This includes creating a REST API, integrating with OpenAI APIs, using MongoDB as the database, developing documentation, implementing CRUD functionalities, managing deployments with Continuous Integration (CI), and writing tests to ensure code quality.</p>
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
        </section>
        `,
      },
      es: {
        title: "Oneg",
        description: "Oneg es una aplicación móvil para la creación de cuentos infantiles utilizando inteligencia artificial. Genera textos con IA, imágenes coloridas para ambientar las historias y utiliza Elevenlabs para convertir texto a voz, ofreciendo una experiencia inmersiva.",
        fullDescription: `
        <section>
          <p>Oneg es una aplicación móvil diseñada para la creación de cuentos infantiles mediante inteligencia artificial. La plataforma genera textos únicos con IA, los cuales se complementan con imágenes coloridas para ambientar las historias, además de utilizar Elevenlabs para convertir el texto a voz, ofreciendo una experiencia inmersiva.</p>
          <p class="mt-2">Mi rol en el proyecto incluye el desarrollo completo del backend, desde la arquitectura hasta la lógica de negocio. Esto abarca la creación de una API REST, la integración con las API de OpenAI, el uso de MongoDB como base de datos, la creación de documentación, la implementación de funcionalidades CRUD, así como despliegues utilizando integración continua (CI) y la escritura de pruebas para garantizar la calidad del código.</p>
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
        </section>
        `,
      }
    }
  },
  {
    id: 'kudoers-project',
    localized: {
      en: {
        title: 'Kudoers',
        description: 'Kudoers is a mobile application that fosters a collaborative work environment by enabling team members to send recognitions (kudos) to each other.',
        fullDescription: `
          <section class="flex flex-col gap-2 mt-2">
            <p>This is a mobile application designed to promote a positive and collaborative work environment by enabling team members to send recognitions (kudos) to one another. The app also includes periodic reading sessions to share these recognitions as a group.<p>
            <p>My main role focused on frontend development using <strong>Angular</strong> and <strong>Ionic</strong>, as well as implementing <strong>Firebase</strong> functions as a backend to analyze relationships between team members. This analysis leveraged matrix theory and graph models to visualize interactions and the number of kudos exchanged among team members. We also used <strong>Firestore</strong> as the database to ensure efficient, real-time storage.</p>
            <p>Additionally, I helped implement functionalities for team-based room management, where each team could only have one active room at a time. When a room was opened, all team members were automatically notified, encouraging participation in the recognition sessions. </p>
            <p>We worked following the <strong>SCRUM</strong> methodology, which allowed for continuous organization and product delivery.</p>
            <p>Furthermore, I was a key advocate for integrating unit testing into the project, successfully establishing a unit testing environment to ensure code quality and catch errors early in development. I also made significant contributions to developing frontend screens where these graphs and detailed analyses are displayed.</p>
          </section>
        `,
      },
      es: {
        title: 'Kudoers',
        description: 'Kudoers es una aplicación móvil que promueve un entorno laboral colaborativo mediante el envío de reconocimientos (kudos) entre miembros de equipos.',
        fullDescription: `
          <section class="flex flex-col gap-2 mt-2">
            <p>Es una aplicación móvil diseñada para fomentar un entorno de trabajo agradable y colaborativo mediante el envío de reconocimientos (kudos) entre los miembros de un equipo. La app también permite realizar salas de lectura periódicas para compartir estos reconocimientos en grupo. </p>
            <p>Mi trabajo se centró principalmente en el desarrollo del frontend utilizando Angular e Ionic, además de implementar funciones en Firebase como backend para realizar análisis de las relaciones entre los miembros del equipo. Este análisis se basó en teoría de matrices y gráficos, permitiendo visualizar las interacciones y la cantidad de kudos enviados entre los integrantes. También utilizamos Firestore como base de datos para garantizar un almacenamiento eficiente y en tiempo real.</p>
            <p>Adicionalmente, ayudé a implementar funcionalidades para la gestión de salas por equipo, donde cada equipo solo podía tener una sala abierta al mismo tiempo. Al abrirse una sala, todos los miembros del equipo eran notificados automáticamente, fomentando la participación en las sesiones de reconocimiento.</p>
            <p>Además, trabajamos siguiendo la metodología SCRUM, lo que permitió mantener una organización y entrega continua del producto.</p>
            <p>Por otra parte, fui un defensor clave de la integración de pruebas unitarias en el proyecto, logrando que se implementara un entorno de test unitarios para garantizar la calidad del código y prevenir errores desde etapas tempranas del desarrollo. También contribuí significativamente al desarrollo de pantallas para el frontend, donde se muestran gráficos y análisis detallados sobre las relaciones y los kudos intercambiados.</p>
          </section>
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
    image: VeritiLogoDark.src,
    images: [VeritiData.src, VeritiSession.src],
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
      es: {
        title: 'RIS Software',
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