import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import content from '../content.js'
import { RefreshIcon, BoltIcon } from './Icons.jsx'

/* Petit utilitaire : délai promesse. */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Reboot — bouton vert « Rappeler un informaticien ». Les étapes de
 * redémarrage s'enchaînent progressivement, puis `onDone` révèle la suite
 * du site (Skills, Finale) via une remontée progressive du contenu.
 */
export default function Reboot({ onDone }) {
  const { reboot } = content
  const [started, setStarted] = useState(false)
  const [step, setStep] = useState(0) // étape de redémarrage en cours

  /* Défilement des étapes de redémarrage après le clic. */
  useEffect(() => {
    if (!started) return
    let cancelled = false
    ;(async () => {
      for (let i = 0; i <= reboot.steps.length; i += 1) {
        await delay(700)
        if (cancelled) return
        setStep(i)
      }
      await delay(900)
      if (cancelled) return
      onDone()
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started])

  const progress = Math.min(1, step / reboot.steps.length)

  return (
    <section
      className="relative mx-auto max-w-3xl px-6 pb-24 text-center"
      aria-live="polite"
    >
      {/* Barrage de néon : le vert repousse progressivement le rouge */}
      <motion.div
        aria-hidden
        animate={{ opacity: progress > 0 ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -inset-x-24 -top-24 h-[420px] rounded-full bg-alert/10 blur-[96px]"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: progress }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute -inset-x-24 -top-24 h-[420px] rounded-full bg-neon/10 blur-[96px]"
      />

      {!started ? (
        <>
          <p className="relative text-sm text-slate-400">
            Franchement, sans eux, on ne va pas loin.
          </p>
          <motion.button
            type="button"
            onClick={() => setStarted(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="relative mt-6 inline-flex items-center gap-3 rounded-full bg-neon px-8 py-4 text-base font-bold text-night shadow-[0_0_40px_rgba(57,255,20,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-night"
          >
            {/* Halo pulsant : transform + opacity uniquement */}
            <motion.span
              aria-hidden
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.55, 0.15, 0.55],
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full bg-neon"
            />
            <RefreshIcon className="relative h-5 w-5" />
            <span className="relative">{reboot.cta}</span>
          </motion.button>
        </>
      ) : (
        <div className="relative">
          <p className="font-mono text-sm text-neon">
            {reboot.steps[Math.min(step, reboot.steps.length - 1)]}
          </p>
          {/* Jauge de rallumage : scaleX uniquement */}
          <div className="mx-auto mt-4 h-1.5 max-w-xs overflow-hidden rounded-full bg-edge">
            <motion.div
              animate={{ scaleX: progress }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="h-full w-full rounded-full bg-neon"
            />
          </div>
          {/* Vérification visuelle que tout se rallume */}
          <BoltIcon className="mx-auto mt-6 h-10 w-10 text-neon drop-shadow-[0_0_24px_rgba(57,255,20,0.6)]" />
        </div>
      )}
    </section>
  )
}
