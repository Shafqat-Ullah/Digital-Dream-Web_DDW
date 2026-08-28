export const ASSET_BASE = process.env.NEXT_PUBLIC_GH_PAGES === "true" ? "/Digital-Dream-Web_DDW" : "";

export function asset(path: string): string {
  return `${ASSET_BASE}${path}`;
}

export const site = {
  name: "Digital Dream Web",
  legalName: "Digital Dream Web",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://digitaldreamweb.com",
  description:
    "A digital solutions agency building professional websites, web applications, e-commerce stores, and custom digital experiences that help businesses and individuals grow online.",
  tagline: "Building Digital Solutions That Help Businesses Grow.",
  email: "qazithekingston@gmail.com",
  phone: "+92 325 5635495",
  phoneDisplay: "+92 325 5635495",
  whatsapp: "923255635495",
  location: "Peshawar, Pakistan",
  address: ["Street 1, University Road", "Peshawar, KPK, Pakistan"],
  founded: 2024,
  social: {
    linkedin: "https://www.linkedin.com/in/qazi-farhan-ahmad",
    github: "https://github.com/Qaziaaaa",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Mobile Development", href: "/services#mobile-development" },
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
    { label: "AI & Automation", href: "/services#ai-and-automation" },
    { label: "SaaS & Product Engineering", href: "/services#saas-and-product-engineering" },
    { label: "Digital Marketing & SEO", href: "/services#digital-marketing-and-seo" },
  ],
  process: [
    { label: "How We Work", href: "/work" },
    { label: "Our Process", href: "/work#process" },
    { label: "Why Choose Us", href: "/#why-choose-us" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;