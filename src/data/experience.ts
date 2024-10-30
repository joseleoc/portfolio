export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Fullstack Developer",
    company: "Lagoon Studios",
    period: "2022 - Present",
    description: ["A strong foundation in React and React Native development.", "Experience in handling large datasets and ensuring data integrity.", "A commitment to writing high-quality, testable code.", "Successfully applied their skills to improve project outcomes."],
    technologies: ["React.js", "React native", "TypeScript","Firebase", "Jest"]
  },
  {
    title: "Front end developer",
    company: "Innova Rhyno",
    period: "2022 - 2024",
    description: [
      "Extensive experience with Angular and Ionic frameworks.",
      "Improved design system, reduced query load times, elevated code quality.",
      "Frontend development, backend contributions, process improvements.",
      "CI/CD and Testing"
    ],
    technologies: ["React", "TypeScript", "GraphQL"]
  }
  // Add more experiences here
];