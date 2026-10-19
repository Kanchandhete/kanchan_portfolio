import React, { useState, useMemo } from "react";

// ==========================================
// DATA DEFINITIONS (CDAC PG-DAC PROFILE)
// ==========================================

const PERSONAL_INFO = {
  name: "Kanchan Dhete",
  title: "Full-Stack Software Engineer",
  subtitle: "CDAC PG-DAC Graduate | Java • Spring Boot • Microservices • React",
  location: "Nagpur, Maharashtra, India",
  email: "kanchandhete@gmail.com",
  phone: "+91 7774953956",
  github: "https://github.com/Kanchandhete",
  linkedin: "https://www.linkedin.com/in/kanchan-dhete/",
  leetcode: "https://www.hackerrank.com/profile/kanchandhete",
  status: "Available for Immediate Joining",
  summary: `Full-Stack developer trained through the Advanced Computing programme at CDAC’s Authorized Training Centre, Nagpur, 
where I finished second in my batch. My work so far has been building full-stack applications end to end — REST APIs 
in Spring Boot, a React front end wired up with Redux Toolkit and React Router, and a relational schema underneath in 
MySQL or Oracle SQL. I am comfortable owning a feature from the database design through to the screen the user 
actually sees, and I am looking for a developer role where I can do that on a production codebase.`,
};

const STATS = [
  {
    label: "CDAC Lab Hours",
    value: "900+",
    subtext: "Intensive Hands-on Coding",
  },
  {
    label: "DSA Problems Solved",
    value: "100+",
    subtext: "LeetCode & HackerRank",
  },
  {
    label: "Core Modules Mastered",
    value: "8+",
    subtext: "Java, DB, OS, Web, DSA, C++",
  },
  {
    label: "Notice Period",
    value: "0 Days",
    subtext: "Ready for Immediate Joining",
  },
];

const SKILL_CATEGORIES = [
  { id: "all", label: "All Disciplines" },
  { id: "backend", label: "Backend & Java" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "database", label: "Databases & ORM" },
  { id: "devops", label: "DevOps & Tooling" },
  { id: "core", label: "Core CS" },
];

const SKILLS = [
  // Backend & Java
  {
    name: "Java (Core & Adv / Java 17)",
    category: "backend",
    level: 92,
    badge: "Primary",
  },
  { name: "Spring Boot 3.x", category: "backend", level: 90, badge: "Primary" },
  {
    name: "Spring Microservices",
    category: "backend",
    level: 82,
    badge: "Advanced",
  },
  {
    name: "Spring Security & JWT",
    category: "backend",
    level: 85,
    badge: "Essential",
  },
  {
    name: "Hibernate / Spring Data JPA",
    category: "backend",
    level: 88,
    badge: "Primary",
  },
  {
    name: "RESTful Web API Architecture",
    category: "backend",
    level: 90,
    badge: "Primary",
  },
  { name: "C++ (OOP & Memory)", category: "backend", level: 85, badge: "Core" },

  // Frontend
  {
    name: "React.js (Hooks & Context)",
    category: "frontend",
    level: 81,
    badge: "Primary",
  },
  {
    name: "JavaScript (ES6+) & TypeScript Basics",
    category: "frontend",
    level: 85,
    badge: "Primary",
  },
  {
    name: "Tailwind CSS & Responsive Layouts",
    category: "frontend",
    level: 75,
    badge: "Modern UI",
  },
  {
    name: "HTML5 / Semantic Web / CSS3",
    category: "frontend",
    level: 92,
    badge: "Foundational",
  },
  {
    name: "Redux Toolkit",
    category: "frontend",
    level: 78,
    badge: "State Mgmt",
  },

  // Databases
  {
    name: "MySQL (3NF, Joins, Triggers, Procs)",
    category: "database",
    level: 92,
    badge: "Primary",
  },
  { name: "PL/SQL", category: "database", level: 81, badge: "Enterprise" },
  {
    name: "Query Indexing & Execution Plans",
    category: "database",
    level: 80,
    badge: "Optimization",
  },

  // DevOps & Tooling
  {
    name: "Git, GitHub & Branching Sprints",
    category: "devops",
    level: 88,
    badge: "CI/CD",
  },
  {
    name: "Postman API Suite & Swagger",
    category: "devops",
    level: 88,
    badge: "API QA",
  },

  // Core CS & Testing
  {
    name: "Data Structures & Algorithms",
    category: "core",
    level: 85,
    badge: "Core",
  },
  {
    name: "OOP Design Principles & SOLID",
    category: "core",
    level: 90,
    badge: "Architecture",
  },
  {
    name: "Agile / Scrum Team Methodology",
    category: "core",
    level: 88,
    badge: "Workflow",
  },
];

const PROJECTS = [
  {
    id: "libraquiz-microservices",
    title: "LibraQuiz - Library Management & Online Examination System",
    tagline:
      "Scalable distributed microservices ecosystem uniting digital library inventory tracking with faculty quiz orchestration and timer-enforced online exams.",
    type: "CDAC Capstone Project",
    category: "Full-Stack",
    period: "4-Week Project",
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "Spring Security",
      "JWT",
      "MySQL",
      "Hibernate JPA",
      "Tailwind CSS",
    ],
    highlights: [
      "Architected distributed microservices ecosystem across 15 Spring Boot backend services and a React SPA, unified via Spring Cloud Gateway and Eureka Service Discovery.",
      "Enforced Role-Based Access Control (RBAC) across STUDENT, TEACHER, LIBRARIAN, and ADMIN roles using Spring Security and stateless JWT token claims propagation via custom Gateway filters.",
      "Integrated Digital Library Management System (DLMS) with physical copy barcode tracking (BC-...), catalog indexing, automated 14-day loan due dates, and fine calculation workflows.",
      "Built faculty-driven assessment studio with Fisher-Yates randomized question sampling from a 100-MCQ question bank, paired with deterministic question-locking for fair exam retakes.",
      "Engineered synchronized live examination session engine featuring real-time countdown timers, auto-submission on expiry, automated evaluation, and multi-tenant student/teacher data scoping.",
    ],
    architecture: {
      layers:
        "Client (React SPA) ➔ API Gateway / CORS & JWT Global Filter ➔ Eureka Service Discovery ➔ Microservice Controller Layer ➔ Service Orchestration & Domain Logic ➔ Spring Data JPA / Hibernate ➔ MySQL 8.0 Databases",
      patterns:
        "Database-per-Service Pattern, API Gateway Pattern, Service Registry & Discovery, OpenFeign Declarative REST Client, Repository Pattern, DTO Pattern, Global Exception Handler (@RestControllerAdvice), Fisher-Yates Sampling & Locking Engines",
      databaseDetails:
        "Database-per-Service architecture with 3NF normalized schemas across isolated MySQL databases (lq_identitydb, lq_bookdb, lq_questionbankdb, lq_quizdb) with transactional rollbacks, plus user-scoped client LocalStorage caching.",
    },
    metrics: [
      { label: "Backend Microservices", value: "15" },
      { label: "Total Source Files", value: "302" },
      { label: "Seeded MCQ Bank", value: "100" },
      { label: "Loan Due Period", value: "14 Days" },
      { label: "API Response Time", value: "< 120ms" },
    ],
    githubUrl: "https://github.com/bhushank5599/LibraQuiz",
    liveUrl: "https://github.com",
  },
  {
    id: "ecommerce-product-manager",
    title: "E-Commerce & Product Inventory Management System",
    tagline:
      "Interactive catalog and inventory engine featuring dynamic multi-part product uploads, blob stream image rendering, and live keyword filtering.",
    type: "Full-Stack Web Application",
    category: "Full-Stack",
    period: "1-Week Project",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Web (REST API)",
      "React.js",
      "React Router DOM",
      "Axios",
      "JavaScript (ES6+)",
      "CSS3 / Bootstrap",
    ],
    highlights: [
      "Engineered full-stack product management system with Spring Boot REST API controllers and dynamic React SPA components.",
      "Built multi-part form-data pipeline for product cataloging, handling binary image file uploads alongside serialized JSON product payloads.",
      "Implemented real-time client-side keyword search routing with URL search param sync (`/?search=keyword`) and dynamic backend query delegation.",
      "Constructed blob stream lifecycle management (`URL.createObjectURL` and `URL.revokeObjectURL`) to prevent browser memory leaks during dynamic product image rendering and previews.",
      "Engineered full CRUD lifecycle (Create, Read, Update, Delete) with stock validation, product availability toggle, category categorization, and pre-filled edit forms.",
    ],
    architecture: {
      layers:
        "Client (React SPA) ➔ React Router (Navigation & URL Search Params) ➔ Axios / Fetch API Client (FormData & Blobs) ➔ Spring Boot RestController Layer ➔ Spring MVC Request Mapping ➔ Backend Service & Database Layer",
      patterns:
        "MVC Pattern, RESTful Resource Controller Pattern, Controlled Component Pattern, Container / Presentational Pattern, Form Data & Binary Streaming Pattern",
      databaseDetails:
        "Relational product entity structure containing ID, name, brand, description, price, category, stock quantity, release date, availability flag, and associated image binary/metadata.",
    },
    metrics: [
      { label: "Client Routes", value: "5+" },
      { label: "Supported Categories", value: "6" },
      { label: "Image Format", value: "Blob / Multipart" },
      { label: "Frontend State Management", value: "React Hooks" },
      { label: "Default Backend Port", value: "8080" },
    ],
    githubUrl: "https://github.com/Kanchandhete/Shopping-App",
    liveUrl: "https://github.com",
  },
  {
    id: "java-quiz-engine",
    title: "Core Java Examination Engine & Algorithmic Leaderboard Generator",
    tagline:
      "High-performance CLI examination system featuring Fisher-Yates question randomization, custom MergeSort tie-breaking, and automated HTML report generation.",
    type: "Core Java & Algorithms Project",
    category: "Backend / Algorithms",
    period: "Mini Project",

    tech: [
      "Java",
      "JDBC",
      "MySQL 8.0",
      "HTML5 / CSS3 (Report Generation)",
      "Algorithms (Fisher-Yates Shuffle, MergeSort)",
      "POJO / Entity Layer",
      "Data Structures (Maps, Lists)",
    ],

    highlights: [
      "Engineered a full-fledged CLI examination platform using Core Java and native JDBC with clean POJO entity and DAO abstractions.",
      "Implemented the Fisher-Yates shuffle algorithm for O(n) unbiased random sampling of questions from the database repository.",
      "Constructed a custom in-place MergeSort algorithm sorting submissions by primary key (descending score) and secondary key (ascending elapsed time) without standard library sort utilities.",
      "Built an automated static HTML generator rendering clean, styled leaderboards with CSS styling, table striping, and rank badges.",
      "Designed a normalized relational schema across Student, Question, Options, and Submission entities with parameterized PreparedStatement query security.",
    ],

    architecture: {
      layers:
        "CLI Interface (Scanner Input) ➔ Algorithmic Engine (Fisher-Yates & Scorer) ➔ Entity / POJO Model Layer ➔ Data Access Object (DAO) Layer ➔ Native JDBC Driver ➔ MySQL Database ➔ MergeSort Sorting Engine ➔ HTML Report File Generator",
      patterns:
        "DAO (Data Access Object) Pattern, POJO / Domain Entity Pattern, Singleton Connection Pattern, Separation of Concerns (SoC), Builder/Assembler Pattern (HTMLWriter)",
      databaseDetails:
        "MySQL relational database ('quiz_engine') containing normalized 3NF tables: Student (id, name), Question (id, text, category, difficulty), Options (id, question_id, text, is_correct), and Submission (id, student_id, score, percentage, time_seconds).",
    },

    metrics: [
      { label: "Shuffle Complexity", value: "O(n)" },
      { label: "Leaderboard Sort Complexity", value: "O(n log n)" },
      { label: "Database Layer", value: "Native JDBC" },
      { label: "Report Format", value: "Styled HTML" },
      { label: "Domain Entities", value: "5 POJOs" },
    ],
    githubUrl: "https://github.com/Kanchandhete/Quiz-project",
    liveUrl: "https://github.com",
  },
];

const JOURNEY = [
  {
    period: "Feb 2026 – Aug 2026",
    role: "Post Graduate Certificate Programme in Advanced Computing (PGCP-AC)",
    institution: "Centre for Development of Advanced Computing (C-DAC)",
    location: "Nagpur, Maharashtra",
    grade: "Grade: First Class with Distinction",
    badge: "Post Graduate",
    points: [
      "Completed 900+ clock hours of intensive laboratory and theoretical curriculum spanning Core & Enterprise Java, Data Structures & Algorithms, Database Internals, and Full-Stack Web Technologies.",
      "Cleared all modules through competitive internal evaluations, CCAT aptitude benchmarks, and rigorous viva examinations.",
      "Led technical development and database design for the capstone enterprise project, following Agile/Scrum delivery cadences.",
    ],
  },
  {
    period: "2020 – 2022",
    role: "Master of Business Administration (MBA) – Human Resource Management",
    institution: "Rashtrasant Tukdoji Maharaj Nagpur University",
    location: "Nagpur, Maharashtra",
    grade: "First Class with Distinction (9.54 CGPA)",
    badge: "Postgraduate",
    points: [
      "Built rigorous foundations in Strategic HRM, Talent Acquisition, Performance Management Systems, Industrial Relations, and Labor Legislation.",
      "Spearheaded HR-centric student initiatives, management conclaves, and industry outreach as a Core Committee Member of the Management Forum.",
      "Executed a comprehensive final-year dissertation project on employee retention strategies and the impact of organizational culture on workforce performance.",
    ],
  },
  {
    period: "2017 – 2020",
    role: "Bachelor of Engineering (B.E.) in Electronics Engineering",
    institution: "Yeshwantrao Chavan College ofengineering (YCCE)",
    location: "Nagpur, Maharashtra",
    grade: "First Class with Distinction (7.98 CGPA)",
    badge: "Undergraduate",
    points: [
      "Built rigorous foundations in Digital Signal Processing, Microcontrollers & Embedded Systems, VLSI Design, and Analog/Digital Communication.",
      "Spearheaded technical events, hardware hackathons, and circuit design workshops as an active member of the Electronics Engineering Association.",
      "Designed and developed a capstone hardware/software project focused on microcontroller-based automation and sensor data acquisition.",
    ],
  },
  {
    period: "Ongoing Milestones",
    role: "Competitive Programming & Continuous Skill Advancement",
    institution: "LeetCode, HackerRank & Community Code",
    location: "Self-Paced / Online",
    grade: "Active Contributor",
    badge: "Certification & Code",
    points: [
      "Solved 100+ algorithm problems with focus on Arrays, HashMaps, Trees, Graphs, Two-Pointers, and Dynamic Programming.",
      "Certified in Core & Enterprise Java by C-DAC academic evaluation body.",
      "Regularly practicing modular system design and microservice patterns.",
    ],
  },
];

// ==========================================
// INLINE HANDCRAFTED SVG ICONS
// ==========================================

function TerminalIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  );
}

function CodeIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

function ServerIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  );
}

function DatabaseIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  );
}

function LayersIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
  );
}

function CheckCircleIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function FileTextIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function DownloadIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );
}

function ChevronRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function MapPinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function CopyIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function SendIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
}

function CloseIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

function AwardIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );
}

function CpuIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
  });

  // Filtered skills list
  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return SKILLS;
    return SKILLS.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormStatus({ loading: true, success: false });

    setTimeout(() => {
      setFormStatus({ loading: false, success: true });
      setContactForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus({ loading: false, success: false }), 5000);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* AMBIENT CYBER-GLASS GLOW ACCENTS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-indigo-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px]" />
      </div>

      {/* ========================================================= */}
      {/* 1. GLASSMORPHIC STICKY NAVBAR */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#070b14]/80 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#090e1a] rounded-[10px] flex items-center justify-center font-black text-cyan-400 text-sm tracking-wider">
                KD
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                {PERSONAL_INFO.name}
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  CDAC PGCP-AC
                </span>
              </div>
              <div className="text-[11px] text-slate-400 leading-none">
                Full-Stack Engineer
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              Overview
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills Matrix
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#journey"
              className="hover:text-cyan-400 transition-colors"
            >
              CDAC & Academics
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 transition-all shadow-sm"
            >
              <FileTextIcon className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 transition-all"
            >
              <span>Hire Me</span>
              <ChevronRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400"
              title="Resume Preview"
            >
              <FileTextIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              <TerminalIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#090e1a]/95 backdrop-blur-xl px-4 py-4 space-y-3">
            {["About", "Skills", "Projects", "Journey", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-slate-300 hover:text-cyan-400 font-medium py-1"
                >
                  {link}
                </a>
              ),
            )}
            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded-lg text-xs font-bold bg-cyan-500 text-slate-950"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================= */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-28">
        {/* ========================================================= */}
        {/* 2. HERO SECTION */}
        {/* ========================================================= */}
        <section id="home" className="pt-6 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left copy & profile */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="font-semibold text-emerald-300">
                  {PERSONAL_INFO.status}
                </span>
                <span className="text-slate-400">
                  • Pune / Bangalore / Remote
                </span>
              </div>

              {/* Headings */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                    {PERSONAL_INFO.name}
                  </span>
                </h1>
                <h2 className="text-lg sm:text-2xl text-slate-300 font-medium flex items-center gap-2">
                  {/* <TerminalIcon className="w-5 h-5 text-cyan-400 shrink-0" /> */}
                  Full-Stack Software Engineer & CDAC Alumnus
                </h2>
              </div>

              {/* Bio Summary */}
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                Trained in enterprise architecture through the premier{" "}
                <strong>CDAC PGCP-AC</strong> program. I specialize in
                engineering high-throughput backend services using{" "}
                <strong>Java 17 & Spring Boot</strong>, crafting fluid web
                interfaces in <strong>React.js</strong>, and optimizing
                relational schemas for scale and zero concurrency lock
                contention.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <CodeIcon className="w-4 h-4" />
                  <span>Inspect Projects</span>
                </a>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold flex items-center gap-2 transition-all shadow-md"
                >
                  <DownloadIcon className="w-4 h-4 text-cyan-400" />
                  <span>View CV / Resume</span>
                </button>
              </div>

              {/* Social and quick copy links */}
              <div className="pt-4 flex flex-wrap items-center gap-3 text-slate-400">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Profiles:
                </span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="LeetCode Profile"
                >
                  <CpuIcon className="w-5 h-5" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors relative flex items-center gap-1.5 text-xs"
                  title="Copy Developer Email"
                >
                  {copiedEmail ? (
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                  <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                </button>
              </div>
            </div>

            {/* Right Card: IDE / Java Class Snapshot */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0b1220]/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* IDE Bar */}
                <div className="px-4 py-3 bg-[#070c17] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    {/* <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" /> */}
                    CDACGraduate.java
                  </span>
                  <div className="w-12"></div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto">
                  <div className="text-slate-400">
                    // Ready for Corporate Onboarding
                  </div>
                  <div>
                    <span className="text-purple-400">public class</span>{" "}
                    <span className="text-yellow-300">SoftwareEngineer</span>{" "}
                    {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">String</span> candidate ={" "}
                    <span className="text-emerald-300">
                      "{PERSONAL_INFO.name}"
                    </span>
                    ;
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">String</span> qualification
                    ={" "}
                    <span className="text-emerald-300">
                      "CDAC PG-DAC (Distinction)"
                    </span>
                    ;
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">String[]</span> coreTech ={" "}
                    {"{"}
                  </div>
                  <div className="pl-8 text-cyan-300">
                    "Java", "Spring Boot", "React.js", "MySQL"
                  </div>
                  <div className="pl-4">{"};"}</div>
                  <div className="pl-4">
                    <span className="text-purple-400">boolean</span>{" "}
                    immediateJoiner ={" "}
                    <span className="text-cyan-400">true</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">boolean</span>{" "}
                    readyToRelocate ={" "}
                    <span className="text-cyan-400">true</span>;
                  </div>
                  <div className="pl-4 mt-2">
                    <span className="text-purple-400">public void</span>{" "}
                    <span className="text-blue-300">
                      deliverEnterpriseValue
                    </span>
                    () {"{"}
                  </div>
                  <div className="pl-8 text-slate-400">
                    writeCleanTestedCode();
                    <br />
                    optimizeDatabaseIndexes();
                    <br />
                    deployMicroservices();
                  </div>
                  <div className="pl-4">{"}"}</div>
                  <div>{"}"}</div>
                </div>

                {/* Card Sub-banner */}
                <div className="px-5 py-3 bg-cyan-950/20 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400" />{" "}
                    CDAC Curriculum Aligned
                  </span>
                  <span className="font-mono text-slate-400">2026 Batch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/90 backdrop-blur-md hover:border-slate-700 transition-all text-center sm:text-left group"
              >
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ABOUT / VALUE PROPOSITION */}
        {/* ========================================================= */}
        <section id="about" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Why Hire a CDAC PG-DAC Graduate?
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Trained through India's premier government-backed advanced
              software curriculum with industry-aligned discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <ServerIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Full-Stack Backend Heavy
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Trained in multi-tiered enterprise architecture: building robust
                REST APIs in Spring Boot, handling JWT authentication, and
                integrating seamlessly with reactive modern SPAs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <DatabaseIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Database & ORM Mastery
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Strong focus on 3NF relational schemas, complex query
                optimization, indexing strategies, stored procedures, and
                resolving race conditions with Hibernate pessimistic locking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Engineering Quality & Testing
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Instilled with automated testing habits, strict Git branching
                discipline, and continuous compliance with SOLID principles.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. INTERACTIVE SKILLS MATRIX */}
        {/* ========================================================= */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Competencies
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Technical Skills & Tooling
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800">
              {SKILL_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                    {skill.badge}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. FEATURED PROJECTS SECTION */}
        {/* ========================================================= */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Featured Capstone & Enterprise Projects
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Click "Architecture Deep Dive" on any card to view detailed system
              layer designs, DB schemas, and patterns.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-cyan-500/5 group"
              >
                <div className="p-6 space-y-4">
                  {/* Top tags */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {project.period}
                    </span>
                  </div>

                  {/* Title & description */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Key highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 3).map((hl, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-slate-300 flex items-start gap-2"
                      >
                        <CheckCircleIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Architecture Deep Dive</span>
                    <ChevronRightIcon className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                      title="View Spec Modal"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. CDAC & ACADEMIC JOURNEY TIMELINE */}
        {/* ========================================================= */}
        <section id="journey" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Education
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                CDAC & Academic Journey
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Progression from university computer engineering foundations to
              specialized advanced computing.
            </p>
          </div>

          <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {JOURNEY.map((item, index) => (
              <div key={index} className="relative group">
                {/* Node marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#070b14] border-2 border-cyan-500 group-hover:scale-125 transition-transform flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                      {item.period}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <AwardIcon className="w-3.5 h-3.5" />
                      {item.grade}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.role}
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium">
                      {item.institution} • {item.location}
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-2">
                    {item.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs sm:text-sm text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 font-bold leading-none mt-1.5">
                          •
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. INTERACTIVE CONTACT SECTION */}
        {/* ========================================================= */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Connect
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Ready for Technical Interviews & Hiring
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Currently available for full-time Software Engineer, Backend
              Developer, or Full-Stack roles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  Direct Coordinates
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Feel free to reach out directly for hiring discussions,
                  technical assessments, or to review project repositories.
                </p>

                <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-300 font-mono">
                  <div className="flex items-center gap-3">
                    <MailIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 font-sans">
                    <MapPinIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex gap-3">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    {copiedEmail ? (
                      <CheckIcon className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <CopyIcon className="w-4 h-4" />
                    )}
                    <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <SendIcon className="w-3.5 h-3.5" />
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>

              {/* Hiring Checklist Box */}
              <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 space-y-2.5">
                <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                  Candidate Quick Specs
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />{" "}
                    Notice: 0 Days
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />{" "}
                    Relocation: Yes
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />{" "}
                    Java Certified
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />{" "}
                    Work Auth: Citizen
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleContactSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl"
              >
                <h3 className="text-lg font-bold text-white">
                  Send Direct Message
                </h3>

                {formStatus.success && (
                  <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold">
                        Message Submitted Successfully!
                      </p>
                      <p className="text-emerald-400/80 text-xs">
                        Thank you for getting in touch. I will respond to your
                        email within 12 hours.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      placeholder="e.g. Technical Recruiter / Team Lead"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b14] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="recruiter@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b14] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Role Title / Subject
                  </label>
                  <input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        subject: e.target.value,
                      })
                    }
                    placeholder="e.g. SDE-1 (Java/Spring Boot) Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b14] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    placeholder="Please include details about tech stack, team, compensation bracket, or interview process..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b14] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50"
                >
                  {formStatus.loading ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4" />
                      <span>Dispatch Inbound Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}
      <footer className="mt-20 border-t border-slate-800/80 bg-[#070b14] py-8 relative z-10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 {PERSONAL_INFO.name} • CDAC PG-DAC Alumnus • Enterprise
            Software Engineer
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Top
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="hover:text-cyan-400 transition-colors"
            >
              Printable Resume
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* MODAL: PROJECT ARCHITECTURE & DB SCHEMA DEEP DIVE */}
      {/* ========================================================= */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c1322] border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto flex flex-col">
            {/* Header */}
            <div className="sticky top-0 bg-[#0c1322]/95 backdrop-blur border-b border-slate-800 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <span className="text-[11px] font-mono uppercase text-cyan-400 font-bold tracking-wider">
                  Technical Architecture Specification
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-sm">
              {/* Architecture layers flow */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider flex items-center gap-1.5">
                  <LayersIcon className="w-4 h-4 text-cyan-400" />
                  System Request Flow & Layers
                </h4>
                <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 font-mono text-xs text-cyan-300 leading-relaxed">
                  {activeModalProject.architecture.layers}
                </div>
              </div>

              {/* Design patterns & DB */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#070b14] border border-slate-800 space-y-1.5">
                  <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider flex items-center gap-1.5">
                    <CpuIcon className="w-4 h-4 text-indigo-400" />
                    Applied Design Patterns
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {activeModalProject.architecture.patterns}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070b14] border border-slate-800 space-y-1.5">
                  <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider flex items-center gap-1.5">
                    <DatabaseIcon className="w-4 h-4 text-emerald-400" />
                    Database Strategy & Schema
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {activeModalProject.architecture.databaseDetails}
                  </p>
                </div>
              </div>

              {/* Key Implementation Points */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                  Full Feature Implementations
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((hl, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-300 flex items-start gap-2 bg-[#070b14]/50 p-2.5 rounded-lg border border-slate-800/60"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benchmark Metrics */}
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                  Engineering Benchmarks
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeModalProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#070b14] border border-slate-800 text-center"
                    >
                      <div className="text-sm sm:text-base font-bold text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#070b14] border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Close Spec
              </button>
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Open Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 7. RECRUITER-READY RESUME MODAL WITH PRINT CAPABILITY */}
      {/* ========================================================= */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c1322] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-[#0c1322] border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileTextIcon className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Curriculum Vitae — {PERSONAL_INFO.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <DownloadIcon className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Document Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 bg-[#070b14] font-sans text-slate-300 text-xs sm:text-sm">
              {/* Resume Header */}
              <div className="border-b border-slate-800 pb-5 space-y-1">
                <h1 className="text-2xl font-black text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-cyan-400 font-semibold">
                  {PERSONAL_INFO.title} • CDAC PG-DAC Alumnus
                </p>
                <div className="text-xs text-slate-400 flex flex-wrap gap-x-4 gap-y-1 pt-1 font-mono">
                  <span>{PERSONAL_INFO.location}</span>
                  <span>{PERSONAL_INFO.email}</span>
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider border-b border-slate-800 pb-1">
                  Professional Summary
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Technical Skills Table */}
              <div className="space-y-1">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider border-b border-slate-800 pb-1">
                  Technical Core Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div>
                    <strong>Backend:</strong> Java, Spring Boot, Microservices
                    Architecture, Spring Security, Hibernate ORM, REST APIs
                  </div>
                  <div>
                    <strong>Frontend:</strong> React.js, JavaScript (ES6+),
                    Redux, HTML5/CSS3
                  </div>
                  <div>
                    <strong>Databases:</strong> MySQL, Oracle SQL, PL/SQL
                  </div>
                  <div>
                    <strong>Tools & Build:</strong> Git, GitHub, Postman, VS
                    Code, NetBeans
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider border-b border-slate-800 pb-1">
                  Education & Professional Diplomas
                </h4>
                {JOURNEY.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex justify-between font-bold text-slate-200">
                      <span>{edu.role}</span>
                      <span className="text-xs text-cyan-400">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-slate-400 text-xs">
                      {edu.institution} | {edu.grade}
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Projects */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider border-b border-slate-800 pb-1">
                  Enterprise Capstone Projects
                </h4>
                {PROJECTS.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-1">
                    <div className="flex justify-between font-bold text-slate-200">
                      <span>{proj.title}</span>
                      <span className="text-xs text-cyan-400">
                        {proj.tech.slice(0, 4).join(", ")}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5">
                      {proj.highlights.slice(0, 2).map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider border-b border-slate-800 pb-1">
                  Achievements
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  <ul>
                    • Second Rank, PGCP Advanced Computing — February 2026
                    batch, CDAC Authorized Training Centre, Nagpur. Recognised
                    with a certificate of appreciation and a cash prize for
                    academic performance across the programme.
                  </ul>
                  <ul>
                    • Solve data structures and algorithm problems regularly on
                    LeetCode and HackerRank, with a focus on recognising
                    patterns and reasoning about time complexity rather than
                    memorising solutions
                  </ul>
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#0c1322] border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>CDAC PG-DAC Standardized Format</span>
              <button
                onClick={() => setIsResumeOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
