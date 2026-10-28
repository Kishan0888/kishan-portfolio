/**
 * Project content lives here so copy, links and images can be updated
 * without touching components.
 *
 * To use a real screenshot, put the file in /public/projects/ and add:
 *   image: { src: "/projects/the-ca-connect.png", alt: "Home page of The CA Connect" }
 * When `image` is set, the card shows it instead of the illustrative visual.
 */

export type ProjectStatus = "live" | "in-development";

export type ProjectVisualTheme = "network" | "signal" | "care" | "catalogue" | "modules";

export interface Project {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  /** Public URL. Leave undefined when there is nothing live to link to. */
  url?: string;
  /** Only set when a verified public repository exists. */
  repoUrl?: string;
  summary: string;
  /** What the work involved, taken from the resume. */
  highlights: string[];
  /** Technologies the resume names for this project. Omit when it names none. */
  stack?: string[];
  /** Used when no specific stack is documented. */
  focus?: string[];
  visual: ProjectVisualTheme;
  image?: { src: string; alt: string; width: number; height: number };
}

export const projects: Project[] = [
  {
    slug: "the-ca-connect",
    name: "The CA Connect",
    category: "Professional networking platform",
    status: "live",
    url: "https://thecaconnect.com",
    summary:
      "A networking platform for Chartered Accountants, where opportunities are posted and interest is managed in one place.",
    highlights: [
      "Built with Next.js and Firebase Firestore",
      "Admin workflows for posting opportunities",
      "Interest management for efficient content and lead handling",
    ],
    stack: ["Next.js", "Firebase Firestore"],
    visual: "network",
  },
  {
    slug: "torque-network",
    name: "Torque Network",
    category: "Business website",
    status: "live",
    url: "https://torquenetwork.in",
    summary:
      "A live business website built for a professional online presence, with a clean structure that holds up on every device.",
    highlights: [
      "Responsive, user-friendly interface",
      "Cross-device compatibility",
      "Clean structure and fast page loading",
    ],
    focus: ["Responsive design", "Cross-device", "Performance"],
    visual: "signal",
  },
  {
    slug: "shaurya-diagnostic",
    name: "Shaurya Diagnostic Centre",
    category: "Healthcare website",
    status: "live",
    url: "https://shaurya-diagnostic.vercel.app",
    summary:
      "A responsive website that presents a diagnostic centre's services and helps patients reach the centre easily.",
    highlights: [
      "Service presentation for patients",
      "Easy ways for patients to get in touch",
      "Deployed on Vercel with Git-based updates",
    ],
    stack: ["Vercel", "Git"],
    visual: "care",
  },
  {
    slug: "ledawai",
    name: "LeDawai",
    category: "Shopify e-commerce",
    status: "live",
    url: "https://ledawai.com",
    summary:
      "A Shopify store for the brand, from storefront setup and product catalogue to a customised, mobile-friendly theme.",
    highlights: [
      "Storefront setup and product catalogue",
      "Theme and layout customisation",
      "Smooth, mobile-friendly shopping experience",
    ],
    stack: ["Shopify"],
    visual: "catalogue",
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    category: "SaaS platform",
    status: "in-development",
    summary:
      "A SaaS hospital management system for healthcare facilities, designed around the day-to-day operations of a hospital.",
    highlights: [
      "Frontend, backend APIs and database design",
      "Modular workflows for hospital operations",
      "Scalable, multi-user architecture",
    ],
    focus: ["Frontend", "Backend APIs", "Database design"],
    visual: "modules",
  },
];
