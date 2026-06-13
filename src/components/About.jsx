import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import { profile, aboutImage } from "../data/content";
import { socials } from "../data/socials";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl gpu-layer" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-48 w-48 rounded-full bg-accent-200/35 blur-3xl gpu-layer" />
      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-card ring-2 ring-brand-400/25">
              <img
                src={aboutImage}
                alt="Biography"
                className="h-[480px] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/35 via-transparent to-accent-500/10" />
            </div>

            {/* Decorative accent square */}
            <div className="absolute -bottom-6 -right-6 -z-10 hidden h-40 w-40 rounded-2xl bg-gradient-to-br from-brand-400/35 to-accent-400/25 lg:block" />
            <div className="absolute -top-6 -left-6 -z-10 hidden h-32 w-32 rounded-2xl border-2 border-dashed border-brand-500/40 lg:block" />
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-label">My Biography</span>
            <h2 className="heading-xl text-balance">
              {profile.bioTitle}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-900/70 sm:text-base">
              {profile.bio}
            </p>

            {/* Info grid */}
            <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
              <InfoLine label="Name" value={profile.fullName} />
              <InfoLine label="From" value={profile.from} />
              <InfoLine label="Email" value={profile.email} />
              <InfoLine label="Phone" value={profile.phone} />
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium text-ink-900/70">
                Follow me on
              </span>
              <ul className="flex items-center gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group grid h-9 w-9 place-items-center rounded-full border border-ink-900/10 text-ink-900/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="btn-primary"
              >
                Hire Me <FiArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-7 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:from-accent-400 hover:to-accent-500"
              >
                <FiDownload className="h-4 w-4" /> Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({ label, value }) {
  return (
    <div className="flex items-center gap-3 border-b border-ink-900/5 py-2">
      <span className="w-16 text-sm font-semibold text-ink-900">{label}:</span>
      <span className="text-sm text-ink-900/70">{value}</span>
    </div>
  );
}
