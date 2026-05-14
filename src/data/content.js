import {
  FiCode,
  FiTrendingUp,
  FiSearch,
  FiHeadphones,
  FiSmartphone,
  FiLayers,
} from "react-icons/fi";

// Local images from src/assets/ — replace these files (keep the same filenames)
// to swap photos without touching any code.
import heroImg from "../assets/hero.png";
import aboutImg from "../assets/about.png";
import servicesImg from "../assets/services.png";

// Easy place to update the personal brand
export const profile = {
  brand: "Portfolio",
  fullName: "Jefri Bayu Saputra",
  role: "Frontend Developer",
  tagline:
    "Frontend Developer & Fresh Graduate 2026 focused on creating modern, responsive, and visually engaging web experiences. Available for freelance work and ready to bring your digital ideas to life.",
  email: "Jeffsmith1401@gmail.com",
  phone: "+21 234 567 8901",
  from: "Yogyakarta, Indonesia",
  bioTitle: "Creative Frontend Developer & Freelance Web Designer",
  bio: "Passionate about building beautiful and high-performance websites, I specialize in crafting intuitive user interfaces and seamless user experiences. As a fresh graduate in 2026, I am actively working as a freelance frontend developer, helping individuals and businesses build impactful digital products.",
  /** CV "Download" button — path to file in `public/` (e.g. `/cv.pdf`) or full URL (Google Drive, etc.) */
  cvUrl: "https://drive.google.com/file/d/1xzTmGpocfzHZxrCwuKVlw5m4fGk0zpYi/view?usp=sharing",
};
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog", hasDropdown: true },
  { label: "Pages", href: "#pages", hasDropdown: true },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: FiCode,
    title: "Modern Frontend Development",
    desc: "Crafting high-quality web applications with modern technologies to create fast, scalable, and engaging digital experiences.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Interface Design",
    desc: "Designing and developing interfaces that adapt beautifully across desktop, tablet, and mobile platforms.",
  },
  {
    icon: FiLayers,
    title: "Figma to Code",
    desc: "Converting UI/UX designs into clean, reusable, and pixel-perfect frontend code with precision and consistency.",
  },
  {
    icon: FiTrendingUp,
    title: "Web Performance Enhancement",
    desc: "Optimizing website speed, accessibility, and responsiveness for a smoother and more professional user experience.",
  },
  {
    icon: FiSearch,
    title: "UI/UX Research",
    desc: "Analyzing user behavior and interface needs to create intuitive digital products that solve real user problems.",
  },
  {
    icon: FiHeadphones,
    title: "Freelance Project Support",
    desc: "Helping businesses, startups, and personal brands build impactful websites through flexible freelance collaboration.",
  },
];

export const stats = [
  { value: 1350, label: "Finished Projects" },
  { value: 2250, label: "Working Hours" },
  { value: 1146, label: "Online Support" },
  { value: 2703, label: "Happy Customers" },
];

export const portfolio = [
  {
    title: "Modern Web Experience",
    category: "Frontend Development",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Interface & Interaction Design",
    category: "UI / UX",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Design to Production Code",
    category: "Figma to Code",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Responsive Product Layouts",
    category: "Responsive UI",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Performance-Focused Builds",
    category: "Web Performance",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Freelance Client Websites",
    category: "Freelance Projects",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
  },
];

export const clients = [
  "Startup Projects",
  "Personal Brands",
  "Small Businesses",
  "Freelance Clients",
];

/**
 * Social links (About + Footer). Edit `href` only — order: Instagram, TikTok, LinkedIn, Website.
 * `platform` must stay one of: instagram | tiktok | linkedin | web (used to pick the icon).
 */
export const socialLinks = [
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/_jeffsmith07?igsh=MXNjYmF2NXNmNjZ4eQ%3D%3D&utm_source=qr",
  },
  {
    platform: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@jeff_smith07?_r=1&_t=ZS-96MHffwrX3w",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jefri-bayu-saputra-b40547409?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    platform: "web",
    label: "Website",
    href: "https://yourdomain.com",
  },
];

export const heroImage = heroImg;
export const aboutImage = aboutImg;
export const servicesPortrait = servicesImg;

// Hero background (workspace photo) stays remote — change to a local import
// from src/assets/ if you'd like to fully self-host.
export const heroBackground =
  "https://i.pinimg.com/736x/3f/bf/c3/3fbfc3bf89a9e814b502d1ba42bedda4.jpg";
