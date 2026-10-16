import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import content, { whatsappLink } from '../content.js'
import { WhatsAppIcon } from './Icons.jsx'

/**
 * Finale — effet machine à écrire « Tu me demandais ce que nous faisons.
 * Maintenant tu sais », puis bouton Me répondre (WhatsApp configurable
 * en une ligne dans content.js).
 */
export default function Finale() {
  const { finale } = content
  const scope = useRef(null)
  const inView = useInView(scope, { once: true, margin: '-100px' })

  const [typed, setTyped] = useState('')

  /* Machine à écrire : un caractère toutes les ~45 ms, démarrée au scroll. */
  useEffect(() => {
    if (!inView) return undefined
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(finale.typed.slice(0, i))
      if (i >= finale.typed.length) clearInterval(interval)
    }, 45)
    return () => clearInterval(interval)
  }, [inView, finale.typed])

  const done = typed.length === finale.typed.length

  return (
    <section
      ref={scope}
      className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32"
      aria-labelledby="finale-heading"
    >
      {/* Texte machine à écrire, avec caret clignotant */}
      <h2
        id="finale-heading"
        className="text-2xl font-semibold text-white sm:text-4xl"
      >
        {typed}
        <span
          aria-hidden
          className={`ml-1 inline-block h-[1em] w-[3px] translate-y-1 bg-neon ${
            done ? 'animate-caret-done' : 'animate-caret'
          }`}
        />
      </h2>

      {/* Bouton Me répondre — WhatsApp */}
      {done && (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-base font-bold text-night shadow-[0_0_32px_rgba(57,255,20,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-night"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {finale.cta}
        </motion.a>
      )}
    </section>
  )
}
