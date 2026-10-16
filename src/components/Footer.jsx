import content from '../content.js'
import { BoltIcon } from './Icons.jsx'

/**
 * Footer — signature de Marilin BADJI avec rappel du titre du site.
 */
export default function Footer() {
  const { finale, hero } = content

  return (
    <footer className="border-t border-edge px-6 py-10 text-center">
      <BoltIcon className="mx-auto h-5 w-5 text-neon/70" />
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
        {hero.title} {hero.titleAccent}
      </p>
      <p className="mt-2 text-sm font-semibold text-white">{finale.footer}</p>
    </footer>
  )
}
