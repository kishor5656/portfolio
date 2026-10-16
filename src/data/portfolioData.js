export const personalInfo = {
  name: "Nanda Kishor V M",
  role: "Flutter & Angular Developer",
  educationDegree: "B.Tech in Electronics & Communication",
  location: "Kozhikode, Kerala, India",
  email: "nandakishor5656@gmail.com",
  phone: "+919846159776",
  phoneFormatted: "+91 98461 59776",
  github: "https://github.com/kishor5656", // GitHub profile
  linkedin: "https://linkedin.com/in/nandakishor-vm", // Update with your LinkedIn profile
  resumeUrl: "/resume.pdf", // Real PDF placed in public/resume.pdf

  shortIntro:
    "Flutter & Angular developer with hands-on experience building web and mobile applications using Flutter, Angular, Spring Boot, and the MERN stack. Seeking opportunities in Flutter, Angular, or full-stack development.",

  heroDescription:
    "I build responsive web and mobile applications with clean interfaces and reliable backend integrations using Flutter, Angular, Spring Boot, and MERN stack technologies.",

  aboutNarrative:
    "I am a B.Tech graduate in Electronics and Communication with practical experience in full-stack and mobile application development. Currently contributing to application development at Foxfennecs Technologies LLP, I work extensively with Flutter, Angular, and Spring Boot. I also completed a comprehensive training program in MERN Full Stack Development, gaining hands-on experience with MongoDB, Express.js, React, and Node.js. I enjoy collaborating with teams, solving problems, and building applications that provide seamless user experiences.",

  highlights: [
    { label: "Current Role", value: "Flutter & Angular Developer at Foxfennecs Technologies" },
    { label: "Education", value: "B.Tech ECE (APJ Abdul Kalam Tech. Univ.)" },
    { label: "Core Specialties", value: "Flutter, Angular, Spring Boot & MERN" },
    { label: "Base Location", value: "Kozhikode, Kerala" },
  ],
};

export const skillsData = [
  {
    category: "Frontend",
    iconName: "Layout",
    description: "Modern, reactive, and responsive user interfaces",
    skills: ["Angular", "React", "HTML & CSS", "JavaScript"],
  },
  {
    category: "Mobile & Backend",
    iconName: "Smartphone",
    description: "Cross-platform mobile apps and robust backend microservices",
    skills: ["Flutter & Dart", "Spring Boot", "Node.js & Express.js", "RESTful APIs"],
  },
  {
    category: "Database",
    iconName: "Database",
    description: "Document stores and relational database management",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    iconName: "Terminal",
    description: "Version control, development environments, and deployment",
    skills: ["Git & GitHub", "VS Code", "Antigravity", "AWS"],
  },
];

export const experienceData = [
  {
    role: "Flutter & Angular Developer",
    company: "Foxfennecs Technologies LLP",
    location: "Calicut, Kerala",
    period: "Current",
    isCurrent: true,
    type: "Full-Time",
    bullets: [
      "Contributed to web and mobile application development using Flutter, Angular, and Spring Boot.",
      "Set up development environments using Antigravity.",
      "Worked with REST APIs and supported frontend and backend integration.",
      "Debugged, tested, and integrated application components using Git and GitHub for version control.",
    ],
    techStack: ["Flutter", "Angular", "Spring Boot", "REST APIs", "Antigravity", "Git", "GitHub"],
  },
  {
    role: "MERN Full Stack Development Intern",
    company: "Techmaghi",
    location: "Kochi, Kerala",
    period: "06/2024 – 02/2025",
    isCurrent: false,
    type: "Internship",
    bullets: [
      "Completed a comprehensive training program focused on building web applications using MongoDB, Express.js, React, and Node.js.",
      "Gained hands-on experience in front-end and back-end development, API integration, and responsive design through practical projects.",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs", "Responsive Design"],
  },
];

export const projectsData = [
  {
    id: "perfume-ecommerce",
    title: "Perfume E-Commerce Web Application",
    subtitle: "Cloud-deployed fragrance store",
    tagline: "A full-stack perfume e-commerce platform deployed on AWS.",
    category: "Full Stack Web",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS"],
    features: [
      "User authentication and profile management",
      "Product catalog browsing, filtering, and shopping cart workflow",
      "Order management and checkout processing features",
      "Responsive user interface optimized for desktop and mobile",
    ],
    badgeColor: "sky",
    githubUrl: "https://github.com/kishor5656/perfume-ecommerce", // Update when repo created
    liveUrl: "https://perfume-ecommerce-demo.placeholder.app",
    previewTheme: "ecommerce",
  },
  {
    id: "idos-healthcare",
    title: "IDOS Healthcare Platform",
    subtitle: "Patient & provider care coordination",
    tagline: "A healthcare platform connecting patients, doctors, and administrators.",
    category: "Mobile Application",
    techStack: ["Flutter", "Dart", "RESTful APIs", "JWT"],
    features: [
      "Appointments and medical records management",
      "Payments and medical travel bookings",
      "JWT-based role access for patients, doctors, and administrators",
      "Admin portal features for operational coordination",
    ],
    badgeColor: "emerald",
    githubUrl: "https://github.com/kishor5656/idos-healthcare",
    liveUrl: null,
    previewTheme: "healthcare",
  },
  {
    id: "ilaj-hospital-system",
    title: "ILAJ Hospital Management System",
    subtitle: "Enterprise clinical & web management",
    tagline:
      "A comprehensive hospital management system featuring a Spring Boot backend, Angular web portal, and Flutter mobile application.",
    category: "Full Stack Ecosystem",
    techStack: ["Flutter", "Angular", "Spring Boot", "MySQL", "REST APIs"],
    features: [
      "Multi-platform ecosystem connecting Angular web portal with Flutter mobile app",
      "Spring Boot enterprise REST API architecture with MySQL data layer",
      "Centralized patient admissions, scheduling, and clinician workflows",
      "Role-specific secure authentication and permission matrix",
    ],
    badgeColor: "blue",
    githubUrl: "https://github.com/kishor5656/ilaj-hospital-management",
    liveUrl: null,
    previewTheme: "hospital",
  },
  {
    id: "rbtec-fintech",
    title: "RBTEC Fintech Platform",
    subtitle: "Digital utilities & voucher payments",
    tagline: "A fintech mobile application facilitating mobile top-ups, bill payments, and vouchers.",
    category: "Mobile Application",
    techStack: ["Flutter", "Dart", "RESTful APIs", "State Management"],
    features: [
      "Seamless mobile operator recharge and top-up flow",
      "Utility bill payments integration with confirmation verification",
      "Digital voucher generation and redemption capabilities",
      "Secure transaction history tracking and instant receipt generation",
    ],
    badgeColor: "amber",
    githubUrl: "https://github.com/kishor5656/rbtec-fintech",
    liveUrl: null,
    previewTheme: "fintech",
  },
  {
    id: "rental-sales-app",
    title: "Rental & Sales App",
    subtitle: "Property & asset marketplace",
    tagline: "A cross-platform (Android and iOS) application for rental and sales management.",
    category: "Mobile Application",
    techStack: ["Flutter", "Dart", "Cross-Platform", "RESTful APIs"],
    features: [
      "Cross-platform compilation ensuring native performance on iOS & Android",
      "Listings catalog with multi-attribute search and filtering",
      "Rental duration scheduling, pricing estimation, and terms",
      "Direct client inquiry channels and listing status tracking",
    ],
    badgeColor: "violet",
    githubUrl: "https://github.com/kishor5656/rental-sales-app",
    liveUrl: null,
    previewTheme: "rental",
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator Web App",
    subtitle: "Clean client-side arithmetic engine",
    tagline:
      "A responsive web calculator handling basic arithmetic operations and input validation across devices.",
    category: "Web Application",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Handles basic arithmetic operations with decimal and chained equation support",
      "Robust input validation preventing invalid syntax and divide-by-zero states",
      "Full keyboard input support alongside clickable UI buttons",
      "Clean, responsive layout adapting gracefully to screens of all sizes",
    ],
    badgeColor: "teal",
    githubUrl: "https://github.com/kishor5656/calculator-web-app",
    liveUrl: "https://kishor5656.github.io/calculator-web-app",
    previewTheme: "calculator",
  },
];

export const educationData = {
  degree: "B.Tech in Electronics and Communication",
  university: "APJ Abdul Kalam Technological University",
  campus: "Kozhikode, Kerala",
  period: "11/2021 – 05/2024",
  description:
    "Completed undergraduate engineering degree with foundational training in electronics, microprocessors, digital signal processing, computing fundamentals, and software programming.",
  highlights: [
    "Rigorous engineering mathematics and analytical problem-solving foundation",
    "Hardware-software interfacing, embedded fundamentals, and computing logic",
    "Transitioned hands-on engineering problem-solving into modern software application engineering",
  ],
};
