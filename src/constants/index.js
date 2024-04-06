import { einstein, freelancer, css, atena } from "../assets/images";
import {
  car,
  contact,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  sass,
  snapgram,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Freelancer",
    company_name: "Freelance work",
    icon: freelancer,
    iconBg: "#fbc3bc",
    date: "January 2022 - Until Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Accessibility adjustments aimed at significant improvements in the website’s usability.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Atena Solution",
    icon: atena,
    iconBg: "#F0E68C",
    date: "August 2023 - November 2023",
    points: [
      "Problem-solving, maintenance, and continuous optimization of existing interfaces on websites and web applications.",
      "Creation of new interactive user interfaces.",
      "Testing performed for each new developed component.",
      "Accessibility adjustments aiming at significant improvements in site usability.",
      "Effective collaboration within a global team, using English as the primary means of communication.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Hospital Israelita Albert Einstein",
    icon: einstein,
    iconBg: "#accbe1",
    date: "September 2023 - January 2024",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Integration of Storybook into the project's main repository, providing a centralized environment for the development and visualization of components.",
      "Componentization of SliderComponent using Web Components, providing a reusable slider component on various pages of the application.",
      "Implementation of modal on product pages to improve user experience.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/joaopedrogranelli",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/joao-pedro-granelli/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Todo List",
    description:
      "This repository contains a Todo List project developed as part of a challenge for a Frontend Junior position in 2024. The project is built using React and other technologies related to the React ecosystem. It aims to demonstrate the developer's skills in creating an interactive and responsive frontend application for task management. The repository likely includes source code, configuration files, and possible instructions for execution or deployment.",
    link: "https://github.com/joaopedrogranelli/DesafioReactFrontendJunior2024",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Ignews",
    description:
      'This repository contains the "Ignews" project, a full-stack application developed to replicate the functionality of a popular discussion platform. Ignews allows users to post and engage in conversations on specific topics. The project utilizes technologies such as Next.js, React, and other related tools to create a modern and dynamic web application. The repository likely includes source code, configuration files, and project-related documentation.',
    link: "https://github.com/joaopedrogranelli/ignews",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Event Platform",
    description:
      "This repository contains the Event Platform project, an application developed to create and manage events. The platform allows users to find nearby events, view details about each event, and register for them. Additionally, event organizers can use the platform to create and manage their own events, including details such as location, dates, and ticket information. The project utilizes modern web technologies and popular frameworks to create an intuitive and efficient user experience. The repository likely includes source code, configuration files, and project-related documentation.",
    link: "https://github.com/joaopedrogranelli/Event-Platform",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Attendance List",
    description:
      "This repository contains the Attendance List project, an application developed to manage attendance lists. The application allows users to create attendance lists for events such as meetings, lectures, or workshops, and record the presence of participants. Additionally, the application can be used to generate attendance reports and statistics related to events. The project utilizes modern web technologies and popular frameworks to create a user-friendly and functional interface. The repository likely includes source code, configuration files, and project-related documentation.",
    link: "https://github.com/joaopedrogranelli/attendance-list",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Dt Money",
    description:
      "This repository contains the Dt Money project, a web application developed to assist in personal financial management. The application allows users to track their expenses and incomes, categorize transactions, and view financial summaries. Additionally, Dt Money offers features for trend analysis and report generation for a better understanding of financial habits. The project utilizes modern web technologies such as React to create a user-friendly and responsive interface. The repository likely includes source code, configuration files, and project-related documentation.",
    link: "https://github.com/joaopedrogranelli/Dt-Money",
  },
];
