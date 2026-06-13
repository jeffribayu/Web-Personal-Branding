import { motion } from "framer-motion";
import { FiExternalLink, FiPlus } from "react-icons/fi";
import { portfolio } from "../data/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-gradient-to-b from-white via-slate-50/80 to-white py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/4 top-32 h-40 w-40 rounded-full bg-brand-200/30 blur-2xl gpu-layer" />
      <div className="container relative mx-auto">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="section-label">Portfolio</span>
          <h2 className="heading-xl">My Success Work</h2>
          <p className="mt-4 text-sm text-ink-900/65 sm:text-base">
            Selected work aligned with my focus: modern frontend, responsive
            interfaces, and visually engaging web experiences.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolio.map((p) => (
            <motion.figure
              key={p.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-brand-100/80 transition-shadow duration-300 hover:ring-2 hover:ring-brand-300/60"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-900/90 via-brand-900/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-end justify-between p-5 text-white">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-accent-300">
                      {p.category}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                  </div>
                  <a
                    href={p.link ?? p.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full image: ${p.title}`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-white shadow-soft transition-transform duration-300 hover:scale-110"
                  >
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Top-left plus icon */}
              <div className="absolute left-4 top-4 grid h-9 w-9 -translate-y-3 place-items-center rounded-full bg-gradient-to-br from-white to-brand-50 text-brand-600 opacity-0 shadow-md ring-1 ring-brand-200/50 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <FiPlus className="h-4 w-4" />
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
