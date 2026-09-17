import { Mail, MapPin, Phone } from "lucide-react"
import { profile } from "../data/content"

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-12">
      <p className="font-display text-[11px] tracking-[0.4em] text-mist">CONTACT</p>
      <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ice md:text-6xl">
        可以开始一起干活
      </h2>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        <li className="border border-white/10 p-6">
          <Phone className="h-4 w-4 text-sky-300" />
          <p className="mt-4 text-xs tracking-[0.2em] text-mist">PHONE</p>
          <a className="mt-2 block text-lg text-white" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
        </li>
        <li className="border border-white/10 p-6">
          <Mail className="h-4 w-4 text-sky-300" />
          <p className="mt-4 text-xs tracking-[0.2em] text-mist">EMAIL</p>
          <a className="mt-2 block text-lg text-white" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </li>
        <li className="border border-white/10 p-6">
          <MapPin className="h-4 w-4 text-sky-300" />
          <p className="mt-4 text-xs tracking-[0.2em] text-mist">LOCATION</p>
          <p className="mt-2 text-lg text-white">{profile.location}</p>
        </li>
      </ul>
      <p className="mt-16 pb-8 text-center text-[11px] tracking-[0.28em] text-mist/70">
        {profile.name} · {profile.school} · {new Date().getFullYear()}
      </p>
    </section>
  )
}
