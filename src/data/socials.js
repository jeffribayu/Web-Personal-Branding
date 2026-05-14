import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { socialLinks } from "./content.js";

const ICONS = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  linkedin: FaLinkedinIn,
  web: FiGlobe,
};

/** About + Footer — icons from `platform`, URLs from `src/data/content.js` → `socialLinks` */
export const socials = socialLinks.map((s) => ({
  icon: ICONS[s.platform] ?? FiGlobe,
  href: s.href,
  label: s.label,
}));
