// All portfolio content lives here — edit this file to update the site.
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAws, faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faNodeJs, faPhp, faPython, faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook, faBullhorn, faC, faChartLine, faCloud, faCode, faDatabase, faDumbbell, faFileLines, faLayerGroup,
  faMobileScreen, faPalette, faPaperPlane, faRobot, faSchool, faServer, faTerminal, faWind, faWrench,
} from "@fortawesome/free-solid-svg-icons";

export const profile = {
  name: "Abdullah Azhar",
  role: "Full Stack Developer",
  stack: "MERN / Next.js",
  location: "Lahore, Pakistan",
  email: "abdullahrajpoot8776@gmail.com",
  phone: "+92 326 4502443",
  // TODO: replace with real profile URLs
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  resume: "/Abdullah_Azhar_Resume.pdf",
  // Put a photo in /public (e.g. /public/abdullah.jpg) and set its path here to show it in the hero
  photo: "",
  yearsExperience: 2,
  tagline:
    "I build fast, responsive full-stack web apps — from AI-powered chatbots to CRM systems — with clean, maintainable code.",
  summary:
    "Computer Science graduate with hands-on experience in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Next.js. Skilled in JavaScript, TypeScript, REST APIs, responsive UI design, state management, authentication, and full-stack application development, including AI-integrated chatbots and CRM systems for client websites. Comfortable working with distributed and international teams, with a strong focus on clean, maintainable code and timely delivery.",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "CMIT",
    period: "Jul 2026 – Present",
    current: true,
    points: [
      "Handling client website projects end-to-end, including building and integrating an AI-powered chatbot for customer support.",
      "Developing and maintaining a CRM system used by clients to manage leads and customer data.",
      "Working across the MERN stack to build, test, and deploy features for live client websites.",
    ],
  },
  {
    role: "Software Engineer",
    company: "MetaXols",
    period: "Mar 2026 – Jun 2026",
    points: [
      "Developed responsive UIs using React.js and Tailwind CSS.",
      "Integrated Node.js and Express.js APIs with MongoDB.",
      "Used Git for version control and deployments.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "DigiTech",
    period: "Sep 2025 – Nov 2025",
    points: [
      "Developed responsive UI components using React.js and Tailwind CSS.",
      "Integrated frontend applications with Node.js & Express.js APIs and MongoDB.",
      "Used Git for version control and supported deployment workflows.",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "Interns Pakistan",
    period: "May 2024 – Jun 2024",
    points: [
      "Designed and developed responsive UI components using HTML, CSS, and JavaScript.",
      "Collaborated with developers to implement design improvements and optimize UX.",
      "Gained exposure to version control (Git) and real-world frontend deployment.",
    ],
  },
];

export type ProjectCategory = "AI" | "Full Stack" | "Frontend";

export type Project = {
  title: string;
  type: string;
  category: ProjectCategory;
  icon: IconDefinition;
  description: string;
  tech: string[];
  featured?: boolean;
  // Optional links — add when available
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "AI Resume Analyzer",
    icon: faFileLines,
    category: "AI",
    type: "AI / Full Stack",
    description:
      "Analyzes resumes against job descriptions using SBERT semantic embeddings to score fit and highlight missing skills.",
    tech: ["React", "FastAPI", "SQLite", "SBERT", "Tailwind", "Firebase Hosting"],
    featured: true,
  },
  {
    title: "Influence Platform",
    icon: faBullhorn,
    category: "Full Stack",
    type: "MERN",
    description:
      "A platform connecting brands with influencers, with campaign listings, profiles and a full Express/MongoDB backend.",
    tech: ["React", "Express.js", "Node.js", "MongoDB", "Firebase", "Vercel"],
    featured: true,
  },
  {
    title: "DataTrain Visualization",
    icon: faChartLine,
    category: "AI",
    type: "Data / Full Stack",
    description:
      "Interactive dashboard for visualizing training data, combining a Flask processing service with a MERN front end.",
    tech: ["React", "Node", "Express", "MongoDB", "Flask", "Tailwind"],
    featured: true,
  },
  {
    title: "Crypto Prices Web App",
    icon: faBitcoin,
    category: "Full Stack",
    type: "MERN",
    description:
      "Live cryptocurrency price tracker with market data, search and user authentication.",
    tech: ["React", "Node", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "School Management System",
    icon: faSchool,
    category: "Full Stack",
    type: "MERN",
    description:
      "Manages students, teachers, classes and attendance with role-based dashboards.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
  },
  {
    title: "Gym Management System",
    icon: faDumbbell,
    category: "Frontend",
    type: "MERN – Frontend",
    description:
      "Front end for managing gym members, memberships, trainers and schedules.",
    tech: ["React", "Node", "Express", "MongoDB", "CSS"],
  },
  {
    title: "Mechanic Service App",
    icon: faWrench,
    category: "Frontend",
    type: "MERN – Frontend",
    description:
      "Lets customers browse services and book mechanics, with a clean responsive UI.",
    tech: ["React", "Node", "Express", "MongoDB", "CSS"],
  },
];

export type Skill = { name: string; icon: IconDefinition };

export const skills: { group: string; icon: IconDefinition; items: Skill[] }[] = [
  {
    group: "Frontend",
    icon: faCode,
    items: [
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
      { name: "JavaScript", icon: faJs },
      { name: "TypeScript", icon: faCode },
      { name: "React.js", icon: faReact },
      { name: "Next.js", icon: faLayerGroup },
      { name: "Tailwind CSS", icon: faWind },
    ],
  },
  {
    group: "Backend",
    icon: faServer,
    items: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Express.js", icon: faServer },
      { name: "Flask", icon: faPython },
      { name: "PHP (basic)", icon: faPhp },
    ],
  },
  {
    group: "Databases",
    icon: faDatabase,
    items: [
      { name: "MongoDB", icon: faDatabase },
      { name: "MySQL", icon: faDatabase },
    ],
  },
  {
    group: "Languages",
    icon: faTerminal,
    items: [
      { name: "JavaScript", icon: faJs },
      { name: "Python", icon: faPython },
      { name: "C++", icon: faC },
    ],
  },
  {
    group: "Cloud & Tools",
    icon: faCloud,
    items: [
      { name: "AWS", icon: faAws },
      { name: "Git", icon: faGitAlt },
      { name: "Postman", icon: faPaperPlane },
    ],
  },
  {
    group: "Design",
    icon: faPalette,
    items: [
      { name: "Figma", icon: faFigma },
      { name: "Canva", icon: faPalette },
    ],
  },
];

export const services: { title: string; text: string; icon: IconDefinition }[] = [
  { title: "Full Stack Development", text: "End-to-end MERN & Next.js web apps — from database design to deployment.", icon: faLayerGroup },
  { title: "Frontend Development", text: "Responsive, accessible UIs with React.js, Next.js and Tailwind CSS.", icon: faCode },
  { title: "Backend & REST APIs", text: "Secure Node.js / Express APIs with authentication and MongoDB.", icon: faServer },
  { title: "AI Chatbot Integration", text: "AI-powered customer-support chatbots integrated into client websites.", icon: faRobot },
  { title: "CRM Systems", text: "Custom CRM dashboards to manage leads and customer data.", icon: faAddressBook },
  { title: "Responsive UI Design", text: "Pixel-perfect layouts from Figma designs that work on every screen.", icon: faMobileScreen },
];

// Self-assessed proficiency shown as progress bars — adjust freely
export const skillLevels: { name: string; level: number }[] = [
  { name: "React.js / Next.js", level: 90 },
  { name: "Node.js / Express.js", level: 85 },
  { name: "MongoDB", level: 85 },
  { name: "JavaScript / TypeScript", level: 88 },
];

export const certifications: { title: string; issuer: string }[] = [
  { title: "AWS Academy Graduate — Cloud Foundations", issuer: "AWS Academy" },
  { title: "Machine Learning Foundations", issuer: "AWS Educate" },
  { title: "API Fundamentals Student Expert", issuer: "Postman" },
  { title: "Artificial Intelligence Fundamentals", issuer: "Certification" },
  { title: "Programming in Python", issuer: "Certification" },
];

export const education = {
  degree: "BS in Computer Science",
  school: "University of Central Punjab (UCP)",
  period: "Mar 2022 – Feb 2026",
};
