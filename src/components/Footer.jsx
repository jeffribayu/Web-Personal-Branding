import { motion } from "framer-motion";
import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { profile } from "../data/content";
import { socials } from "../data/socials";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-white pt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative w-full overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-brand-950 px-6 py-12 text-white sm:px-10 lg:px-16"
      >
        <div className="absolute inset-0 grain opacity-30" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl gpu-layer" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-700/20 blur-3xl gpu-layer" />

        <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-brand-400 via-brand-500 to-accent-500 shadow-glow">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                  <text
                    x="12"
                    y="17.5"
                    textAnchor="middle"
                    fill="white"
                    fontSize="15"
                    fontWeight="700"
                    fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                  >
                    J
                  </text>
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight">
                {profile.brand}
              </span>
            </a>

            {/* Contact info */}
            <ul className="flex flex-col items-start gap-3 text-sm text-white/80 md:items-center md:gap-5 md:text-center lg:flex-row lg:justify-center">
              <li className="flex items-center gap-2">
                <FiPhone className="h-4 w-4 text-brand-300" />
                {profile.phone}
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="h-4 w-4 text-brand-300" />
                {profile.email}
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="h-4 w-4 text-brand-300" />
                2026 Sleman, Yogyakarta, Indonesia
              </li>
            </ul>

          {/* Socials */}
          <ul className="flex items-center gap-2 md:justify-end">
            {socials.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider + bottom strip — kept inside the dark band so the whole footer feels full-screen */}
        <div className="relative mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/60 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {profile.brand}. All Rights
              Reserved. Design by{" "}
              <span className="font-semibold text-brand-300">JeffSmith</span>.
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-medium text-white/70 transition-all hover:border-brand-400 hover:bg-brand-500 hover:text-white"
            >
              Back to top <FiArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
