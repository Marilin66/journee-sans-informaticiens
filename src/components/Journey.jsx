import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import content from '../content.js'
import { CodeIcon, WalletIcon, MessageIcon, SignalIcon, DismissIcon } from './Icons.jsx'

/* Icône par action du scénario (icônes SVG dessinées à la main). */
const actionIcons = [
  CodeIcon,
  WalletIcon,
  MessageIcon,
  SignalIcon,
]

/**
 * Journey — mini-scénario interactif : Germaine tente 4 actions, chacune
 * échoue avec une erreur drôle. Le compteur reste désespérément à zéro.
 */
export default function Journey() {
  const { journey } = content
  const scope = useRef(null)
  const inView = useInView(scope, { once: true, margin: '-80px' })
  const [failed, setFailed] = useState([]) // index des actions tentées

  /* Boutons en cours d'échec (tremblement), plusieurs en parallèle possibles. */
  const [shaking, setShaking] = useState(() => new Set())

  /* Chaque clic déclenche indépendamment son propre échec : un utilisateur
     qui pave les 4 actions à la suite doit voir les 4 échecs. */
  const failAction = (index) => {
    if (failed.includes(index)) return
    setShaking((prev) => new Set(prev).add(index))
    // Court délai avant l'affichage de l'erreur : effet « ça tourne… puis plante »
    setTimeout(() => {
      setFailed((prev) => [...prev, index])
      setShaking((prev) => {
        const next = new Set(prev)
        next.delete(index)
        return next
      })
    }, 700)
  }

  return (
    <section
      ref={scope}
      className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
      aria-labelledby="journey-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2
          id="journey-heading"
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {journey.heading}
        </h2>
        <p className="mt-3 text-center text-slate-400">{journey.subheading}</p>
      </motion.div>

      {/* Les 4 actions tentées, échouées une par une */}
      <div className="mt-12 grid gap-4">
        {journey.actions.map((action, index) => {
          const Icon = actionIcons[index]
          const isFailed = failed.includes(index)
          const isShaking = shaking === index
          return (
            <motion.button
              key={action.button}
              type="button"
              onClick={() => failAction(index)}
              disabled={isFailed}
              whileTap={isFailed ? undefined : { scale: 0.98 }}
              animate={
                isShaking ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }
              }
              transition={{ duration: 0.4 }}
              className={`group flex w-full flex-col items-start rounded-2xl border p-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ice sm:flex-row sm:items-center sm:gap-4 sm:p-5 ${
                isFailed
                  ? 'border-alert/40 bg-alert/5'
                  : 'border-edge bg-panel hover:border-ice/50'
              }`}
              aria-live="polite"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  isFailed ? 'bg-alert/15 text-alert' : 'bg-ice/10 text-ice'
                }`}
              >
                {isFailed ? (
                  <DismissIcon className="h-5 w-5" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </div>

              <div className="mt-3 sm:mt-0 sm:flex-1">
                <p
                  className={`text-sm font-semibold sm:text-base ${
                    isFailed ? 'text-alert' : 'text-white'
                  }`}
                >
                  {isFailed ? action.error : action.button}
                </p>
                {isFailed && (
                  <AnimatePresence>
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="mt-1 text-xs text-slate-400"
                    >
                      {action.detail}
                    </motion.p>
                  </AnimatePresence>
                )}
              </div>

              {!isFailed && (
                <span className="mt-3 rounded-full border border-ice/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ice sm:mt-0">
                  Essayer
                </span>
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Compteur désespéré */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex items-center justify-between rounded-2xl border border-edge bg-panel px-5 py-4"
      >
        <span className="text-sm text-slate-300">{journey.counter}</span>
        <span className="font-mono text-2xl font-bold text-alert">
          {journey.actions.length - failed.length}
        </span>
      </motion.div>
    </section>
  )
}
