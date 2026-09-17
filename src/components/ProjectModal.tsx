import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"
import { createPortal } from "react-dom"
import type { Project } from "../data/content"

type Props = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose])

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.35 }}
        className="max-h-[82vh] w-full max-w-2xl overflow-auto border border-white/10 bg-[#111318] p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.24em] text-sky-300/80">
              {project.period}
            </p>
            <h3 className="mt-2 font-display text-3xl text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-mist">{project.role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 p-2 text-ice hover:bg-white/5"
            aria-label="关闭"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-6 text-sm leading-7 text-ice/80">{project.summary}</p>
        <ul className="mt-6 space-y-3">
          {project.body.map((line) => (
            <li key={line} className="text-sm leading-7 text-mist">
              {line}
            </li>
          ))}
        </ul>
      </motion.article>
    </motion.div>,
    document.body,
  )
}
