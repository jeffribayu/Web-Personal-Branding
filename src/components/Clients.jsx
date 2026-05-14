import { motion } from "framer-motion";
import { FaSpa, FaAward, FaLeaf, FaCrown } from "react-icons/fa";
import { clients } from "../data/content";

const logoIcons = [FaSpa, FaAward, FaLeaf, FaCrown];

export default function Clients() {
  return (
    <section className="relative bg-white pb-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-teal-gradient px-6 py-10 shadow-glow ring-1 ring-white/20 sm:px-10 sm:py-12"
        >
          <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.06)_50%,transparent_60%)]" />
          <div className="absolute inset-0 grain opacity-35" />
          <div className="absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-brand-300/20 blur-3xl" />

          <div className="relative grid grid-cols-2 items-center gap-y-8 text-white sm:grid-cols-4">
            {clients.map((name, i) => {
              const Icon = logoIcons[i % logoIcons.length];
              return (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center justify-center gap-2 text-white/85 transition-colors duration-300 hover:text-white"
                >
                  <Icon className="h-9 w-9" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
