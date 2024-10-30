export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  images: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'kudoers-project',
    title: 'Kudoers Recognition Platform',
    description: 'Developed a recognition platform to boost morale and foster a positive work environment.',
    fullDescription: 'As a full-stack developer at Kudoers, I was responsible for crafting intuitive user interfaces and optimizing backend performance. My key achievements include: developing efficient algorithms to calculate complex relationship analytics, reducing load times by 98%, and creating dynamic node graphs that visualize these analytics in real-time. These enhancements have significantly improved the overall user experience and made Kudoers a valuable tool for teams seeking to recognize and celebrate their achievements.',
    tags: ['Angular', 'Ionic', 'Firebase'],
    image: 'kudoers-screenshot.png',
    images: ['kudoers-feature1.png', 'kudoers-feature2.png', 'kudoers-architecture.png'],
    link: 'https://play.google.com/store/apps/details?id=com.innovarhyno.kudo.app&pcampaignid=web_share',
    github: ''
  },
  {
    id: 'tdh-fest-project',
    title: 'TDH Fest',
    description: 'Developed a comprehensive event management platform for TDH Fest.',
    fullDescription: 'TDH Fest is an event management platform that streamlines attendee registration and access control. We implemented a system for generating and sending digital tickets with QR codes, along with an intuitive registration form. We built a mobile app for quick and efficient ticket verification at the event. Additionally, we created a dashboard to generate detailed reports on sales and attendance, providing a valuable tool for decision-making.',
    tags: ['React Native', 'Firebase', 'React', 'Cost estimation'],
    image: 'tdh-fest-screenshot.png',
    images: ['tdh-fest-registration.png', 'tdh-fest-mobile-app.png', 'tdh-fest-dashboard.png'],
    github: 'https://github.com/lagoonStudios/TDHFest.scanner'
  },
  {
    id: 'ris-software',
    title: 'RIS Software',
    description: 'Developed a web application to improve efficiency in medical diagnostic centers.',
    fullDescription: 'RIS Software is a web application that streamlines processes in medical diagnostic centers. My role was fundamental in developing the frontend, where I implemented functionalities to manage medical profiles, assign tasks, and visualize the status of medical studies. By optimizing the user interface and improving workflow efficiency, I contributed to better resource management and faster patient care.',
    tags: ['React', 'Zustand', 'Firebase', 'Cost estimation'],
    image: 'ris-software-screenshot.png', // Replace with actual image path
    images: ['ris-profile-management.png', 'ris-task-assignment.png', 'ris-study-status.png'], // Replace with actual image paths
    link: 'https://ris-software.com', // Replace with actual link if applicable
    github: 'https://github.com/your-username/ris-software' // Replace with actual GitHub link if applicable
  },
  {
    id: 'rolling-garage',
    title: 'Rolling Garage: Connecting Motorcycle Enthusiasts',
    description: 'Modernized a motorcycle enthusiast platform to enhance user experience and performance.',
    fullDescription: 'Rolling Garage is a digital platform that connects motorcycle enthusiasts, facilitating group rides and fostering a community of travelers. As a developer, my role was to modernize the application by updating it to the latest versions of Angular and Ionic. I conducted extensive testing to ensure optimal performance and fix any anomalies, guaranteeing a smooth and reliable user experience. By optimizing the code and resolving multiple bugs, I significantly contributed to improving the platform\'s stability and scalability.',
    tags: ['Angular', 'Ionic',],
    image: 'rolling-garage-screenshot.png', // Replace with actual image path
    images: ['rolling-garage-group-rides.png', 'rolling-garage-community-forum.png', 'rolling-garage-mobile-app.png'], // Replace with actual image paths
    link: 'https://rolling-garage.com', // Replace with actual link if applicable
    github: 'https://github.com/your-username/rolling-garage' // Replace with actual GitHub link if applicable
  },
  {
    id: 'ask-teach',
    title: 'Ask Teach: Actionable Insights from Workshops',
    description: 'Developed the frontend for an insights gathering platform.',
    fullDescription: 'As a frontend developer, I played a key role in building the MVP for Ask Teach, a project aimed at gathering actionable insights from facilitated workshops. My responsibilities included collaborating with the team to design and develop the user interface, creating comprehensive documentation to guide future development, and contributing to cost estimation.',
    tags: ['React', 'Documentation', 'Cost Estimation'],
    image: 'ask-teach-screenshot.png', // Replace with actual image path
    images: ['ask-teach-feature1.png', 'ask-teach-feature2.png', 'ask-teach-wireframe.png'], // Replace with actual image paths
    link: 'https://ask-teach.com', // Replace with actual link if applicable
    github: 'https://github.com/your-username/ask-teach' // Replace with actual GitHub link if applicable
  }
];