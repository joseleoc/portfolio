import { languages } from "../i18n/ui";

interface LocalizedExperience {
  title: string;
  period: string;
  description: string[];
}

type LocalizedExperienceMap = {
  [key in keyof typeof languages]: LocalizedExperience;
}

export interface Experience {
  localized: LocalizedExperienceMap;
  company: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    localized: {
      en: { title: "Fullstack Developer", period: "2024 - Present", description: ["Development of backend applications with AI integration (Text, image and audio generation with AI).", "Deployments in AWS.","Maintenance of existing projects in vanilla Javascript and Arango DB.", "Creation of internal application dashboards (Fullstack)."], },
      es: { title: "Fullstack Developer", period: "2024 - Present", description: ["Desarrollo de aplicaciones de backend con integración de Inteligencia Artificial (Generación de textos, imágenes y audios con IA).", "Despliegues en AWS.","Mantenimiento de proyectos existentes en vanilla Javascript y Arango DB.", "Creación de dashboards de administración interna de aplicaciones (Fullstack)."], },

    },
    company: "Denkiu Agency",
    technologies: ["ChatGPT", "OpenAI", "NodeJS", "AWS","Serverless", "Express", "Nestjs", "React", "Arango DB"]
  },
  {
    localized: {
      en: {
        title: "Fullstack Developer",
        period: "2022 - Present",
        description: ["A strong foundation in React and React Native development.", "Experience in handling large datasets and ensuring data integrity.", "A commitment to writing high-quality, testable code.", "Successfully applied their skills to improve project outcomes."],
      },
      es: {
        title: "Fullstack Developer",
        period: "2022 - Present",
        description: ["A strong foundation in React and React Native development.", "Experience in handling large datasets and ensuring data integrity.", "A commitment to writing high-quality, testable code.", "Successfully applied their skills to improve project outcomes."],
      }
    },
    company: "Lagoon Studios",
    technologies: ["React", "React Native", "TypeScript", "Firebase", "Jest"]
  },
  {
    localized: {
      en: {
        title: "Front end developer",
        period: "2022 - 2024",
        description: [
          "Extensive experience with Angular and Ionic frameworks.",
          "Improved design system, reduced query load times, elevated code quality.",
          "Frontend development, backend contributions, process improvements.",
          "CI/CD and Testing"
        ],
      },
      es: {
        title: "Front end developer",
        period: "2022 - 2024",
        description: [
          "Extensive experience with Angular and Ionic frameworks.",
          "Improved design system, reduced query load times, elevated code quality.",
          "Frontend development, backend contributions, process improvements.",
          "CI/CD and Testing"
        ],
      }
    },
    company: "Innova Rhyno",
    technologies: ["Angular", "Ionic", "Firebase", "NodeJS", "Google Maps / Mabpox"]
  }
];