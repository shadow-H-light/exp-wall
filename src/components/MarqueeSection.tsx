import { skills } from "../data/content"

export function MarqueeSection() {
  const loop = [...skills, ...skills]

  return (
    <section className="relative z-10 overflow-hidden border-y border-white/10 py-5">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {loop.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-display text-sm font-light tracking-[0.32em] text-ice/70"
          >
            {skill}
            <span className="ml-10 text-sky-400/70">/</span>
          </span>
        ))}
      </div>
    </section>
  )
}
