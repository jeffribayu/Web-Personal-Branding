import { motion } from "framer-motion";
import { FiArrowRight, FiFolder } from "react-icons/fi";
import { profile, heroImage, heroBackground } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background image (edge-to-edge) */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Overlay — strong on the left for contrast; eases off toward the portrait */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/82 via-ink-900/35 to-brand-800/18" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-900/25" />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-600/20 via-transparent to-brand-400/15" />
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 grain opacity-50" />
      {/* Soft grid for extra texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Narrow left fade only (stays off the portrait column on large screens) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full max-w-md bg-gradient-to-r from-black/40 to-transparent lg:block lg:max-w-lg" />

      {/* Decorative blurred orbs + accent */}
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 animate-drift rounded-full bg-brand-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-brand-500/35 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-56 w-56 rounded-full bg-accent-500/25 blur-3xl" />
      <div className="pointer-events-none absolute left-10 bottom-24 hidden h-3 w-32 rotate-[-8deg] rounded-full bg-gradient-to-r from-brand-400 to-accent-400 opacity-80 sm:block" />

      {/* Inner content — full-screen height, edge-to-edge with comfortable side padding */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1680px] items-center px-6 pb-12 pt-28 sm:px-10 lg:px-16 lg:pt-32">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.22fr)] lg:gap-6 xl:gap-10">
            {/* LEFT — compact glass card (readable, not a huge slab) */}
            <div className="hero-glass relative z-10 max-w-xl rounded-2xl border border-white/15 bg-ink-950/70 px-5 py-6 text-white shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:px-7 sm:py-8">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-lg font-light text-white drop-shadow-sm sm:text-xl"
              >
                Hi, I'm{" "}
                <span className="font-semibold text-white">{profile.fullName}</span>
              </motion.p>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="mt-1 select-none font-display text-[88px] leading-[0.95] sm:text-[120px] md:text-[140px] lg:text-[160px]"
              >
                <span className="hero-role-title italic">{profile.role}</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="hero-tagline mt-6 max-w-md text-sm font-normal leading-relaxed sm:text-base"
              >
                {profile.tagline}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
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
                  href="#portfolio"
                  className="btn-ghost"
                >
                  <FiFolder className="h-4 w-4" />
                  My Portfolio
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT — Portrait (wider column + larger image) */}
            <div className="relative z-10 -mx-2 h-full w-full min-w-0 sm:-mx-0 lg:mx-0">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                className="relative mx-auto flex h-full w-full max-w-xl items-end justify-center sm:max-w-2xl lg:max-w-none lg:justify-end"
              >
                {/* Decorative rings — slightly busier */}
                <div className="absolute bottom-8 right-4 hidden h-72 w-72 rounded-full border border-white/12 lg:block xl:h-80 xl:w-80" />
                <div className="absolute bottom-20 right-14 hidden h-44 w-44 rounded-full border border-brand-300/20 lg:block" />

                {/* Portrait: no solid backing layer — multiply blends with the real hero backdrop so white matting does not become a teal "card" */}
                <img
                  src={heroImage}
                  alt={`${profile.fullName} portrait`}
                  loading="eager"
                  className="relative z-10 mx-auto block w-full max-w-md object-contain object-bottom mix-blend-multiply max-h-[500px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:max-h-[560px] sm:max-w-xl lg:mx-0 lg:ml-auto lg:mr-0 lg:max-h-[640px] lg:max-w-4xl lg:-mb-10 lg:translate-x-2 lg:scale-105 xl:max-w-[48rem] xl:translate-x-4 xl:scale-110"
                />

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute left-0 top-8 z-20 flex flex-col gap-2 sm:left-2 lg:left-4"
                >
                  <div className="hidden items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white shadow-lg ring-1 ring-white/20 backdrop-blur-md sm:flex">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
                    </span>
                    Available for work
                  </div>
                  <div className="hidden rounded-full bg-accent-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-md ring-1 ring-white/25 sm:block">
                    UI · Photo · Web
                  </div>
                </motion.div>
              </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
