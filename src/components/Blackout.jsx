import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import content from '../content.js'
import {
  AntennaIcon,
  MessageIcon,
  WalletIcon,
  BankIcon,
  HospitalIcon,
  PlugIcon,
  SignalIcon,
  DismissIcon,
} from './Icons.jsx'

/* Correspondance clé → icône dessinée à la main (aucun sticker). */
const stepIcons = {
  telecom: AntennaIcon,
  whatsapp: MessageIcon,
  money: WalletIcon,
  banque: BankIcon,
  hopital: HospitalIcon,
  electric: PlugIcon,
}

/* Petit utilitaire : délai promesse. */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Blackout — enchaîne 4 actes après le clic du Hero :
 * 1. glitch plein écran  2. cascade de pannes  3. signal à zéro  4. écran bleu.
 * À la fin, `onDone` est appelé pour déverrouiller la section Journey.
 */
export default function Blackout({ onDone }) {
  const { blackout } = content
  const [phase, setPhase] = useState('glitch') // glitch | cascade | signal | bsod
  const [shown, setShown] = useState(0) // nombre de pannes affichées

  /* Séquence chronologique unique au montage. */
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      await delay(1200) // glitch plein écran
      if (cancelled) return
      setPhase('cascade')
      for (let i = 0; i < blackout.steps.length; i += 1) {
        await delay(650)
        if (cancelled) return
        setShown(i + 1)
      }
      await delay(700)
      if (cancelled) return
      setPhase('signal')
      await delay(1600)
      if (cancelled) return
      setPhase('bsod')
      await delay(2600)
      if (cancelled) return
      onDone() // la suite du site apparaît (Journey)
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6"
      aria-live="polite"
    >
      {/* ── Acte 1 : glitch plein écran ── */}
      <AnimatePresence>
        {phase === 'glitch' && (
          <motion.div
            key="glitch"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.3, 1, 0.5, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'linear' }}
            className="fixed inset-0 z-50"
          >
            <div className="absolute inset-0 bg-alert/90 mix-blend-multiply" />
            <div className="absolute inset-0 animate-glitch-shift bg-ice/60 mix-blend-screen" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Acte 2 : cascade de pannes ── */}
      {phase !== 'glitch' && (
        <div className="w-full max-w-md">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.3em] text-alert">
            {blackout.signal}
          </p>

          {/* Barre de signal qui tombe à zéro */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-edge bg-panel p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-300">
                <SignalIcon className="h-4 w-4" />
                <span className="text-xs">{blackout.signal}</span>
              </div>
              <span className="font-mono text-xs text-slate-500">
                {phase === 'signal' || phase === 'bsod'
                  ? blackout.signalOff
                  : `${Math.max(0, 100 - shown * 20)} %`}
              </span>
            </div>
            {/* Jauge : largeur animée par transform via scaleX (60 fps) */}
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-edge">
              <motion.div
                animate={{
                  scaleX:
                    phase === 'signal' || phase === 'bsod'
                      ? 0
                      : Math.max(0, 1 - shown * 0.2),
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ originX: 0 }}
                className="h-full w-full rounded-full bg-gradient-to-r from-ice to-neon"
              />
            </div>
          </div>

          {/* Notifications de panne, une par une */}
          <ul className="grid gap-3">
            <AnimatePresence>
              {blackout.steps.slice(0, shown).map((step) => {
                const Icon = stepIcons[step.key]
                return (
                  <motion.li
                    key={step.key}
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex items-start gap-3 rounded-xl border border-alert/40 bg-alert/5 p-4"
                    role="alert"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-alert" />
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">
                        {step.label}
                      </p>
                      <p className="text-xs text-slate-400">{step.detail}</p>
                    </div>
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
        </div>
      )}

      {/* ── Acte 4 : écran bleu ── */}
      <AnimatePresence>
        {phase === 'bsod' && (
          <motion.div
            key="bsod"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0078D7] p-8 text-left text-white sm:p-16"
          >
            <DismissIcon className="h-24 w-24" strokeWidth={2} />
            <div>
              <p className="text-2xl font-semibold sm:text-4xl">
                {blackout.bsoDTitle}
              </p>
              <p className="mt-4 max-w-lg text-sm text-blue-100 sm:text-base">
                {blackout.bsoDText}
              </p>
              <p className="mt-8 font-mono text-sm text-blue-200">
                {blackout.bsoDPourcent}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
