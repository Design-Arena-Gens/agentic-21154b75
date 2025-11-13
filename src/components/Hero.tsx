'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-28 pt-40 text-center text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 translate-y-16 bg-radial-grid opacity-80 blur-3xl" />
        <div className="absolute inset-x-12 top-0 h-[500px] rounded-full bg-gradient-to-br from-brand-500/30 via-sky-400/20 to-transparent blur-3xl" />
      </div>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70"
      >
        Studio Spotlight
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl font-display text-5xl leading-tight tracking-tight md:text-6xl"
      >
        Designing digital universes for brands that refuse to blend in.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-2xl text-lg text-white/70 md:text-xl"
      >
        We combine narrative, design, and code to craft immersive digital experiences that radiate
        personality, respond intelligently, and scale globally.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Link
          href="#contact"
          scroll={false}
          className="rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 px-6 py-3 text-sm font-semibold shadow-glow transition hover:shadow-lg hover:shadow-brand-500/40"
        >
          Schedule Discovery Call
        </Link>
        <Link
          href="#work"
          scroll={false}
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
        >
          See Recent Launches
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative mt-10 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 mix-blend-overlay" />
        <video
          src="https://cdn.coverr.co/videos/coverr-cyber-lights-1628299710056?download=1"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050715] via-transparent to-transparent" />
      </motion.div>
    </section>
  );
}
