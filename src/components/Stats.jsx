import { motion } from "framer-motion";
import { stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

export default function Stats() {
  return (
    <section className="relative bg-white pb-20 sm:pb-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4 rounded-3xl border border-brand-100/80 bg-white/95 px-4 py-10 shadow-glow ring-1 ring-brand-200/40 backdrop-blur-sm sm:px-8 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} divider={i !== stats.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat, divider }) {
  const [count, ref] = useCountUp(stat.value, 1800);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center px-4 py-2 text-center ${
        divider ? "md:border-r md:border-ink-900/10" : ""
      }`}
    >
      <div className="text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text sm:text-4xl">
        {count.toLocaleString()}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-wider text-ink-900/60 sm:text-sm">
        {stat.label}
      </div>
    </div>
  );
}
