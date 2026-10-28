export const profile = {
  name: "Kishan Kumar Jha",
  wordmark: "KISHAN JHA",
  title: "Full Stack Developer | MERN Stack | React | Next.js",
  location: "New Delhi, India",
  /** Set NEXT_PUBLIC_SITE_URL to the deployed domain so social previews use absolute URLs. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

const phoneDigits = "919525640866";

export const contact = {
  email: "kishanj1093@gmail.com",
  phoneDisplay: "+91 95256 40866",
  phoneHref: "tel:+919525640866",
  whatsappHref: `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
    "Hi Kishan, I found your portfolio and would like to discuss a project.",
  )}`,
  linkedin: "https://linkedin.com/in/kishan-kumarjha",
  linkedinLabel: "linkedin.com/in/kishan-kumarjha",
  github: "https://github.com/Kishan0888",
  githubLabel: "github.com/Kishan0888",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const heroStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Supabase",
  "Shopify",
];

export const services = [
  {
    title: "Full stack web development",
    body: "Interface, API and database handled by one developer, so the product doesn't stall between handoffs.",
    icon: "layers",
  },
  {
    title: "Frontend development",
    body: "Responsive React and Next.js interfaces that work on every screen your customers use.",
    icon: "monitor",
  },
  {
    title: "Backend API development",
    body: "REST APIs with Node.js and Express, connected to MongoDB, MySQL, Firebase or Supabase, for apps that need real data behind them.",
    icon: "server",
  },
  {
    title: "Business websites",
    body: "A clear website that explains what you do and makes it easy for customers to reach you.",
    icon: "building",
  },
  {
    title: "Shopify e-commerce",
    body: "Store setup, product catalogue and theme customisation for a mobile-friendly shopping experience.",
    icon: "bag",
  },
  {
    title: "Customisation and maintenance",
    body: "Changes, fixes and new features on existing Shopify, WordPress and PHP sites, without starting over.",
    icon: "wrench",
  },
  {
    title: "SaaS and web applications",
    body: "Multi-user applications with modular workflows, such as admin panels and management systems.",
    icon: "app",
  },
] as const;

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "HTML5", "CSS3", "PHP", "Java"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Responsive Design"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { label: "Databases", items: ["MongoDB", "MySQL", "Firebase Firestore", "Supabase"] },
  { label: "Platforms", items: ["Shopify", "WordPress"] },
  { label: "Tools and deployment", items: ["Git", "GitHub", "Vercel", "Render"] },
];

export const experience = [
  {
    role: "Full Stack Developer",
    org: "SEO Web Technology, New Delhi",
    period: "Dec 2024 – Present",
    points: [
      "Design, develop and deploy responsive web applications and live client websites using React, Node.js and modern JavaScript.",
      "Build backend APIs and manage databases (MongoDB, MySQL, Firebase, Supabase) for production applications.",
      "Develop and customise Shopify and PHP-based websites to meet client business requirements.",
      "Deploy and maintain applications on Vercel and Render, using Git and GitHub for version control.",
      "Work with clients and cross-functional teams to turn business requirements into working features.",
    ],
  },
  {
    role: "Summer Intern",
    org: "Code Alpha",
    period: "Jul 2023 – Aug 2023",
    points: ["Completed a two-month internship focused on software development and practical project work."],
  },
];

export const education = [
  {
    title: "B.Tech, Computer Science and Engineering",
    org: "Dr. A.P.J. Abdul Kalam Technical University",
    period: "2020 – 2024",
  },
  { title: "Intermediate (Class XII)", org: "G.M. College, Bettiah", period: "2018 – 2020" },
  { title: "Matriculation (Class X)", org: "New Era Senior Secondary School", period: "2017 – 2018" },
];

export const processSteps = [
  { n: "01", title: "Discover", body: "Understand the client's business, requirements and objectives." },
  {
    n: "02",
    title: "Plan",
    body: "Define the scope, user experience, technical architecture and implementation plan.",
  },
  { n: "03", title: "Build", body: "Develop, test and refine the solution." },
  { n: "04", title: "Launch", body: "Deploy the project and support ongoing improvements where agreed." },
];

export const projectTypes = [
  "Business website",
  "Web application / SaaS",
  "Shopify store",
  "Backend API",
  "Changes to an existing site",
  "Something else",
];
