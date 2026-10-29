// All portfolio content lives here — edit this file to update the site.
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAws, faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faNodeJs, faPhp, faPython, faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook, faBrain, faBullhorn, faBullseye, faC, faCalendar, faChartLine, faClipboardCheck, faCloud,
  faCode, faDatabase, faDumbbell, faFileLines, faFire, faGears, faIdCard, faLaptopCode, faLayerGroup,
  faListCheck, faLock, faMagnifyingGlass, faMobileScreen, faPalette, faPaperPlane, faRobot, faRocket,
  faSchool, faServer, faTerminal, faUser, faUsers, faWind, faWrench,
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
  // Unsplash photo id (the code at the end of an unsplash.com/photos/... link) used as the card cover
  image: string;
  description: string;
  tech: string[];
  featured?: boolean;
  // Optional links — add when available
  live?: string;
  repo?: string;
  // Showcase slide content (written from the resume's project list — review and edit freely)
  tagline: string;
  highlights: { title: string; text: string; icon: IconDefinition }[];
  flow: string[];
};

export const projects: Project[] = [
  {
    title: "AI Resume Analyzer",
    image: "9si2noVCVH8",
    icon: faFileLines,
    category: "AI",
    type: "AI / Full Stack",
    description:
      "Analyzes resumes against job descriptions using SBERT semantic embeddings to score fit and highlight missing skills.",
    tech: ["React", "FastAPI", "SQLite", "SBERT", "Tailwind", "Firebase Hosting"],
    tagline: "Match resumes to jobs by meaning, not keywords.",
    highlights: [
      { title: "Semantic matching", text: "SBERT sentence embeddings compare a resume and a job description by meaning, not just keywords.", icon: faBrain },
      { title: "Fit score & gaps", text: "Scores how well a resume fits the role and highlights the skills that are missing.", icon: faBullseye },
      { title: "FastAPI backend", text: "A Python FastAPI service runs the analysis and stores results in SQLite.", icon: faServer },
      { title: "Clean React UI", text: "A responsive React + Tailwind interface to upload, analyze and review results.", icon: faLaptopCode },
      { title: "Deployed on Firebase", text: "The frontend is hosted on Firebase Hosting for fast global delivery.", icon: faCloud },
      { title: "Actionable output", text: "Results are presented as clear, readable feedback a candidate can act on.", icon: faListCheck },
    ],
    flow: ["Upload resume + job description", "Extract text", "Embed with SBERT", "Compare similarity", "Fit score + missing skills"],
    featured: true,
  },
  {
    title: "Influence Platform",
    image: "iOVRrjgvQT8",
    icon: faBullhorn,
    category: "Full Stack",
    type: "MERN",
    description:
      "A platform connecting brands with influencers, with campaign listings, profiles and a full Express/MongoDB backend.",
    tech: ["React", "Express.js", "Node.js", "MongoDB", "Firebase", "Vercel"],
    tagline: "Where brands find and work with the right influencers.",
    highlights: [
      { title: "Campaign listings", text: "Brands publish campaigns that influencers can browse and respond to.", icon: faBullhorn },
      { title: "Influencer profiles", text: "Profiles showcase each creator so brands can pick the right fit.", icon: faUser },
      { title: "REST API", text: "An Express.js + Node.js API powers every screen, backed by MongoDB.", icon: faServer },
      { title: "Firebase services", text: "Firebase integrates platform services alongside the MERN stack.", icon: faFire },
      { title: "Deployed on Vercel", text: "Shipped to Vercel with Git-based deployments.", icon: faRocket },
      { title: "Responsive design", text: "Works smoothly on phones, tablets and desktops.", icon: faMobileScreen },
    ],
    flow: ["Brand posts a campaign", "Influencers browse", "Influencer applies", "Brand reviews profiles", "Collaboration starts"],
    featured: true,
  },
  {
    title: "DataTrain Visualization",
    image: "JKUTrJ4vK00",
    icon: faChartLine,
    category: "AI",
    type: "Data / Full Stack",
    description:
      "Interactive dashboard for visualizing training data, combining a Flask processing service with a MERN front end.",
    tech: ["React", "Node", "Express", "MongoDB", "Flask", "Tailwind"],
    tagline: "Turn raw training data into clear, interactive visuals.",
    highlights: [
      { title: "Interactive charts", text: "Explore training data visually through an interactive React dashboard.", icon: faChartLine },
      { title: "Flask processing", text: "A Python Flask service prepares and processes data for visualization.", icon: faGears },
      { title: "MERN backend", text: "Node.js and Express.js APIs store and serve datasets from MongoDB.", icon: faDatabase },
      { title: "Tailwind UI", text: "A clean, responsive interface built with Tailwind CSS.", icon: faWind },
    ],
    flow: ["Upload dataset", "Flask processes data", "Store in MongoDB", "Express API serves it", "Charts render in React"],
    featured: true,
  },
  {
    title: "Crypto Prices Web App",
    image: "ZAIbez5LTrg",
    icon: faBitcoin,
    category: "Full Stack",
    type: "MERN",
    description:
      "Live cryptocurrency price tracker with market data, search and user authentication.",
    tech: ["React", "Node", "Express", "MongoDB", "Firebase"],
    tagline: "Live cryptocurrency prices at a glance.",
    highlights: [
      { title: "Live market data", text: "Tracks current cryptocurrency prices and market movement.", icon: faChartLine },
      { title: "Quick search", text: "Find any coin fast with instant search.", icon: faMagnifyingGlass },
      { title: "User authentication", text: "Secure sign-in powered by Firebase.", icon: faLock },
      { title: "MERN backend", text: "Express.js and Node.js APIs with MongoDB behind the React UI.", icon: faServer },
    ],
    flow: ["Fetch market data", "Express API", "React dashboard", "Search coins", "Firebase sign-in"],
  },
  {
    title: "School Management System",
    image: "zFSo6bnZJTw",
    icon: faSchool,
    category: "Full Stack",
    type: "MERN",
    description:
      "Manages students, teachers, classes and attendance with role-based dashboards.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    tagline: "One place for students, teachers, classes and attendance.",
    highlights: [
      { title: "Role-based dashboards", text: "Separate views for admins, teachers and students.", icon: faUsers },
      { title: "Attendance tracking", text: "Teachers mark attendance and everyone sees up-to-date records.", icon: faClipboardCheck },
      { title: "Class management", text: "Organize classes, subjects and enrollments in one place.", icon: faSchool },
      { title: "MERN stack", text: "React + Tailwind frontend with an Express/MongoDB REST API.", icon: faLayerGroup },
    ],
    flow: ["Admin sets up classes", "Teachers assigned", "Students enrolled", "Attendance marked", "Reports reviewed"],
  },
  {
    title: "Gym Management System",
    image: "Il9YbhIBiOA",
    icon: faDumbbell,
    category: "Frontend",
    type: "MERN – Frontend",
    description:
      "Front end for managing gym members, memberships, trainers and schedules.",
    tech: ["React", "Node", "Express", "MongoDB", "CSS"],
    tagline: "Run members, memberships, trainers and schedules smoothly.",
    highlights: [
      { title: "Member management", text: "Keep every member's details and status organized.", icon: faUsers },
      { title: "Membership plans", text: "Present and manage plans and renewals clearly.", icon: faIdCard },
      { title: "Trainer schedules", text: "See trainers and class schedules at a glance.", icon: faCalendar },
      { title: "Responsive UI", text: "A clean front end that works on any screen.", icon: faMobileScreen },
    ],
    flow: ["Member signs up", "Chooses a plan", "Trainer assigned", "Sessions scheduled", "Membership tracked"],
  },
  {
    title: "Mechanic Service App",
    image: "n99UTGfbvFQ",
    icon: faWrench,
    category: "Frontend",
    type: "MERN – Frontend",
    description:
      "Lets customers browse services and book mechanics, with a clean responsive UI.",
    tech: ["React", "Node", "Express", "MongoDB", "CSS"],
    tagline: "Book a trusted mechanic in a few taps.",
    highlights: [
      { title: "Browse services", text: "Customers explore available car services and details.", icon: faWrench },
      { title: "Easy booking", text: "A simple flow to choose a mechanic and book a slot.", icon: faCalendar },
      { title: "Responsive UI", text: "Designed to work smoothly on phones and desktops.", icon: faMobileScreen },
    ],
    flow: ["Browse services", "Pick a mechanic", "Book a time slot", "Get confirmation", "Service completed"],
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
