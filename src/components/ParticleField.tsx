import { useEffect, useRef } from "react"

type Point = { x: number; y: number; z: number }

const COUNT = 1400
const CUBE = 1200
const CAMERA_Z = 220

function makePoints(): Point[] {
  return Array.from({ length: COUNT }, () => ({
    x: (Math.random() - 0.5) * CUBE,
    y: (Math.random() - 0.5) * CUBE,
    z: (Math.random() - 0.5) * CUBE,
  }))
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const points = makePoints()
    let rotY = 0
    let rotX = 0
    let frame = 0
    let running = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      if (!running) return
      frame = requestAnimationFrame(draw)
      rotY += 0.0012
      rotX += 0.0004

      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)

      for (const p of points) {
        const xz = p.x * cosY - p.z * sinY
        const zz = p.x * sinY + p.z * cosY
        const yz = p.y * cosX - zz * sinX
        const z = p.y * sinX + zz * cosX
        const depth = CAMERA_Z / (CAMERA_Z + z + CUBE / 2)
        if (depth <= 0) continue
        const x = w / 2 + xz * depth * 0.55
        const y = h / 2 + yz * depth * 0.55
        const alpha = 0.18 + depth * 0.45
        ctx.fillStyle = `rgba(120, 168, 255, ${alpha})`
        ctx.fillRect(x, y, 1.4, 1.4)
      }
    }

    draw()
    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  )
}
