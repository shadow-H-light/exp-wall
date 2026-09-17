import { motion } from "framer-motion"
import { about } from "../data/content"

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:px-12">
      <p className="font-display text-[11px] tracking-[0.4em] text-mist">ABOUT</p>
      <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ice md:text-6xl">
        北航测控 · 能把业务做到上线
      </h2>
      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {about.education.map((item) => (
            <motion.article
              key={item.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] tracking-[0.22em] text-sky-300/80">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl text-white">{item.school}</h3>
              <p className="mt-1 text-sm text-mist">
                {item.college} · {item.major}
              </p>
              <p className="mt-1 text-sm text-ice/70">{item.note}</p>
            </motion.article>
          ))}
        </div>
        <ul className="space-y-5">
          {about.points.map((point) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="border-l border-sky-400/40 pl-5 text-sm leading-7 text-mist"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
