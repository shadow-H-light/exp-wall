const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm tracking-[0.28em] text-ice">
          EXP WALL
        </a>
        <ul className="flex gap-7 text-[11px] font-medium tracking-[0.22em] text-ice/80">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:opacity-60" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
