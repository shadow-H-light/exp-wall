import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { profile } from "../data/content"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-svh flex-col justify-end px-6 pb-16 pt-24 md:px-12"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-5 font-display text-[11px] tracking-[0.42em] text-mist"
      >
        {profile.school} · {profile.grade}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.08 }}
        className="hero-heading font-display text-[14vw] leading-[0.86] font-semibold tracking-tight md:text-[9vw]"
      >
        {profile.nameEn}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.18 }}
        className="mt-8 flex max-w-3xl flex-col gap-3 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="font-display text-2xl font-light tracking-wide text-ice md:text-3xl">
            {profile.name} · {profile.role}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-mist">
            {profile.headline}
          </p>
        </div>
        <p className="text-xs tracking-[0.18em] text-mist/80">
          {profile.availability}
        </p>
      </motion.div>
      <a
        href="#about"
        className="mt-14 inline-flex w-fit items-center gap-2 text-[11px] tracking-[0.28em] text-ice/80"
      >
        SCROLL
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </section>
  )
}
