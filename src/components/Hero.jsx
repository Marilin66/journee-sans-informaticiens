import { motion } from 'framer-motion'
import content from '../content.js'
import { ClockIcon, BoltIcon } from './Icons.jsx'

/**
 * Hero — 06h00, tout fonctionne. Le bouton rouge pulsant retire les
 * informaticiens et déclenche le Blackout via `onTrigger`.
 */
export default function Hero({ onTrigger }) {
  const { hero } = content

  return (
    <header className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      {/* Horloge géante à 06h00 */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8 flex flex-col items-center"
      >
        <ClockIcon className="h-6 w-6 text-ice/80" />
        <p className="mt-3 font-mono text-6xl font-bold tracking-tight text-neon drop-shadow-[0_0_24px_rgba(57,255,20,0.35)] sm:text-7xl">
          {hero.hour}
        </p>
        <p className="mt-2 text-sm text-slate-400">{hero.hourLabel}</p>
      </motion.div>

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
      >
        {hero.title}{' '}
        <span className="bg-gradient-to-r from-neon to-ice bg-clip-text text-transparent">
          {hero.titleAccent}
        </span>
      </motion.h1>

      {/* Message à Germaine */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        className="mt-6 max-w-md text-lg text-slate-300"
      >
        {hero.message}
      </motion.p>

      {/* Bouton rouge pulsant — déclencheur du Blackout */}
      <motion.button
        type="button"
        onClick={onTrigger}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="group relative mt-10 inline-flex items-center gap-3 rounded-full bg-alert px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(255,45,85,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-alert focus-visible:ring-offset-2 focus-visible:ring-offset-night"
        aria-label={hero.cta}
      >
        {/* Halo pulsant, animation sur opacity et transform uniquement */}
        <motion.span
          aria-hidden
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.55, 0.15, 0.55],
          }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-alert"
        />
        <BoltIcon className="relative h-5 w-5" />
        <span className="relative">{hero.cta}</span>
      </motion.button>

      {/* Indicateur de scroll discret */}
      <motion.div
        aria-hidden
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 h-10 w-6 rounded-full border border-slate-500/50"
      >
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto mt-1.5 block h-2 w-1 rounded-full bg-ice"
        />
      </motion.div>
    </header>
  )
}
