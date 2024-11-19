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
    technologies: ["React.js", "React native", "TypeScript","Firebase", "Jest"]
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