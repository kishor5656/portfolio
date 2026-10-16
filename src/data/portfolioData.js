export const personalInfo = {
  name: "Nanda Kishor V M",
  role: "Flutter & Angular Developer",
  educationDegree: "B.Tech in Electronics & Communication",
  location: "Kozhikode, Kerala, India",
  email: "nandakishor5656@gmail.com",
  phone: "+919846159776",
  phoneFormatted: "+91 98461 59776",
  github: "https://github.com/kishor5656",
  linkedin: "https://www.linkedin.com/in/nandakishorvm",
  portfolio: "https://kishor5656.github.io/portfolio/",
  resumeUrl: "./resume.pdf", // Real PDF placed in public/resume.pdf

  shortIntro:
    "Software developer with hands-on experience building web and mobile applications using Flutter, Angular, Spring Boot. Familiar with REST API integration and database management, and currently contributing to application development at Foxfennecs Technologies LLP. Seeking opportunities in Flutter, Angular, or full-stack development.",

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
    skills: ["Angular", "Flutter", "HTML", "CSS", "React"],
  },
  {
    category: "Mobile & Backend",
    iconName: "Smartphone",
    description: "Cross-platform mobile apps and robust backend microservices",
    skills: ["Flutter & Dart", "Spring Boot", "RESTful APIs", "Node.js & Express.js"],
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
    skills: ["Git", "GitHub", "VS Code", "Antigravity", "AWS"],
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
      "Set up development environments for Flutter, Angular, and Spring Boot using Antigravity.",
      "Worked with REST APIs and supported frontend and backend integration.",
      "Debugged, tested, and integrated application components.",
      "Used Git and GitHub for version control and team collaboration.",
      "Collaborated with team members to understand requirements and implement features.",
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
      "Developed a full-stack perfume e-commerce platform using MongoDB, Express.js, React.js, and Node.js.",
      "Implemented user authentication, product catalog, shopping cart, and order management features.",
      "Built a responsive interface to provide a smooth user experience.",
      "Deployed the application on AWS.",
    ],
    badgeColor: "sky",
    githubUrl: "https://github.com/kishor5656/perfume-ecommerce",
    liveUrl: "https://perfume-ecommerce-demo.placeholder.app",
    previewTheme: "ecommerce",
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator Web App",
    subtitle: "Responsive arithmetic web application",
    tagline: "A responsive calculator built using HTML, CSS, and JavaScript with clean cross-device handling.",
    category: "Web Application",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Built a responsive calculator using HTML, CSS, and JavaScript.",
      "Added basic arithmetic operations, clear and delete functions, and handling for invalid inputs.",
      "Created a clean interface that works smoothly across devices.",
    ],
    badgeColor: "teal",
    githubUrl: "https://github.com/kishor5656/calculator-web-app",
    liveUrl: "https://kishor5656.github.io/calculator-web-app",
    previewTheme: "calculator",
  },
  {
    id: "idos-healthcare",
    title: "IDOS – Healthcare & Medical Travel Platform",
    subtitle: "Appointments, medical records & travel bookings",
    tagline: "A healthcare platform connecting patients, doctors, and administrators with medical travel capabilities.",
    category: "Company Project • Flutter",
    techStack: ["Flutter", "Dart", "RESTful APIs", "JWT"],
    features: [
      "Contributed to a healthcare platform connecting patients, doctors, and administrators.",
      "Developed APIs and features for appointments, medical records, payments, and medical travel bookings.",
      "Implemented JWT-based role access and built mobile app and admin portal features.",
    ],
    badgeColor: "emerald",
    githubUrl: "https://github.com/kishor5656/idos-healthcare",
    liveUrl: null,
    previewTheme: "healthcare",
  },
  {
    id: "ilaj-hospital-system",
    title: "ILAJ Hospital Management System",
    subtitle: "Spring Boot, Angular & Flutter system",
    tagline: "A comprehensive hospital management system with a Spring Boot backend, Angular portal, and Flutter mobile app.",
    category: "Company Project • Flutter & Angular",
    techStack: ["Flutter", "Angular", "Spring Boot", "MySQL", "REST APIs"],
    features: [
      "Contributed to a hospital management system with a Spring Boot backend, Angular portal, and Flutter mobile app.",
      "Supported frontend and backend integration and API workflows connecting web and mobile.",
      "Assisted with testing, component debugging, and version control collaboration.",
    ],
    badgeColor: "blue",
    githubUrl: "https://github.com/kishor5656/ilaj-hospital-management",
    liveUrl: null,
    previewTheme: "hospital",
  },
  {
    id: "rental-app",
    title: "Rental App",
    subtitle: "Android & iOS rental management",
    tagline: "A cross-platform rental and sales management platform built for Android and iOS using Flutter.",
    category: "Company Project • Flutter",
    techStack: ["Flutter", "Dart", "Cross-Platform", "RESTful APIs"],
    features: [
      "Contributed to a rental and sales management platform for Android and iOS using Flutter.",
      "Built clean, responsive mobile interfaces and supported client application workflows.",
      "Collaborated with team members to debug components and deliver features.",
    ],
    badgeColor: "violet",
    githubUrl: "https://github.com/kishor5656/rental-app",
    liveUrl: null,
    previewTheme: "rental",
  },
  {
    id: "rbtec-app",
    title: "RBTEC",
    subtitle: "Top-ups, bill payments & digital vouchers",
    tagline: "A fintech mobile platform facilitating mobile top-ups, bill payments, and vouchers.",
    category: "Company Project • Flutter",
    techStack: ["Flutter", "Dart", "RESTful APIs", "State Management"],
    features: [
      "Contributed to a fintech platform for mobile top-ups, bill payments, and vouchers using Flutter.",
      "Engineered mobile user workflows and supported secure API transaction handling.",
      "Participated in testing and debugging for consistent cross-platform performance.",
    ],
    badgeColor: "amber",
    githubUrl: "https://github.com/kishor5656/rbtec-app",
    liveUrl: null,
    previewTheme: "fintech",
  },
];

export const educationData = {
  degree: "Bachelor of Technology in Electronics and Communication",
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

export const softSkillsData = [
  "Leadership",
  "Problem Solving",
  "Team Collaboration",
  "Time Management",
  "Communication",
  "Analytical Thinking",
];

export const languagesData = [
  { language: "English", level: "B2", proficiency: "Professional Working Proficiency" },
  { language: "Malayalam", level: "Native", proficiency: "Native or Bilingual Proficiency" },
  { language: "Hindi", level: "A2", proficiency: "Elementary Proficiency" },
];
