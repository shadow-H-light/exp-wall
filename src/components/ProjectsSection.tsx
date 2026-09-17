import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { projects, type Project } from "../data/content"
import { ProjectModal } from "./ProjectModal"

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-12">
      <p className="font-display text-[11px] tracking-[0.4em] text-mist">PROJECTS</p>
      <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ice md:text-6xl">
        从零到一上线的经历
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            onClick={() => setActive(project)}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-8 text-left"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-linear-to-br ${project.accent} opacity-70 transition group-hover:opacity-100`}
            />
            <div className="relative">
              <p className="text-[11px] tracking-[0.22em] text-ice/70">
                {project.period}
              </p>
              <h3 className="mt-4 flex items-start justify-between gap-4 font-display text-2xl text-white">
                {project.title}
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </h3>
              <p className="mt-3 text-sm leading-7 text-mist">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/15 px-2 py-1 text-[10px] tracking-[0.16em] text-ice/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active ? (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  )
}
