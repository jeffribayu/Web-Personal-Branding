import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { services, servicesPortrait } from "../data/content";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="relative border-y border-brand-100/80 bg-gradient-to-b from-brand-50/90 via-white to-accent-50/50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />
      <div className="container relative mx-auto">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="section-label">What I Do</span>
          <h2 className="heading-xl">My Quality Services</h2>
          <p className="mt-4 text-sm text-ink-900/65 sm:text-base">
            A handful of services I offer to bring your next idea to life with
            quality, attention to detail and on-time delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
          {/* LEFT — service cards (2 cols) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2"
          >
            {services.map(({ icon: Icon, title, desc }) => (
              <motion.article
                key={title}
                variants={item}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-brand-100/80 bg-white/90 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-brand-400/50 hover:shadow-glow"
              >
                {/* subtle hover gradient */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-100/80 via-transparent to-accent-50/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-500/15 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="flex items-center gap-2 text-base font-semibold text-ink-900">
                  <FiCheckCircle className="h-4 w-4 text-brand-500" />
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                  {desc}
                </p>
              </motion.article>
            ))}
          </motion.div>

          {/* RIGHT — portrait */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto hidden h-full max-w-sm lg:block"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 via-brand-50 to-accent-100 shadow-card ring-1 ring-brand-200/50">
              <img
                src={servicesPortrait}
                alt="Designer portrait"
                className="h-[520px] w-full object-cover"
              />
            </div>
            {/* floating accent */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-3 text-white shadow-glow">
              <div className="text-2xl font-bold leading-none">10+</div>
              <div className="text-[11px] uppercase tracking-wider">
                Years experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
