import { motion } from 'framer-motion'
import content from '../content.js'
import {
  AntennaIcon,
  MessageIcon,
  WalletIcon,
  BankIcon,
  HospitalIcon,
  PlugIcon,
  CheckIcon,
  BoltIcon,
} from './Icons.jsx'

/* Icône associée à chaque service rétabli (icônes SVG dessinées à la main). */
const serviceIcons = [
  AntennaIcon,
  MessageIcon,
  WalletIcon,
  BankIcon,
  HospitalIcon,
  PlugIcon,
]

/**
 * Restored — page de rétablissement affichée APRÈS le reboot, avant l'accueil.
 * Séquence : grande coche néon qui surgit, services qui se rallument un à un,
 * compteurs de panne, conclusion sérieuse, puis entrée sur le site.
 * Animations limitées à transform + opacity (60 fps), respecte
 * prefers-reduced-motion via MotionConfig global.
 */
export default function Restored({ onEnter }) {
  const { restored } = content

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-20 text-center"
    >
      {/* Halo néon qui monte du bas : transform + opacity uniquement */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.14, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] rounded-full bg-neon blur-[110px]"
      />

      {/* Grande coche néon (ressort) */}
      <motion.span
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 13, delay: 0.15 }}
        className="relative flex h-20 w-20 items-center justify-center rounded-full border border-neon/50 bg-neon/10 text-neon shadow-[0_0_60px_rgba(57,255,20,0.35)]"
        aria-hidden
      >
        <CheckIcon className="h-10 w-10" strokeWidth={2.4} />
      </motion.span>

      {/* Titre */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-neon/90"
      >
        {restored.kicker}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.4 }}
        className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
      >
        {restored.title}
        <span className="block bg-gradient-to-r from-neon to-ice bg-clip-text text-transparent">
          {restored.titleAccent}
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.55 }}
        className="mt-5 max-w-xl text-base text-slate-300"
      >
        {restored.lead}
      </motion.p>

      {/* Services qui se rallument, un à un */}
      <ul className="mt-10 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
        {restored.services.map((service, index) => {
          const Icon = serviceIcons[index]
          return (
            <motion.li
              key={service}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.15 }}
              className="flex items-center gap-3 rounded-xl border border-neon/30 bg-panel px-3.5 py-3 text-left"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neon/10 text-neon">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-white">{service}</span>
              <CheckIcon className="ml-auto h-4 w-4 shrink-0 text-neon" strokeWidth={2.4} />
            </motion.li>
          )
        })}
      </ul>

      {/* Statistiques de la panne */}
      <dl className="mt-8 grid w-full max-w-xl grid-cols-3 gap-3">
        {restored.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.7 + index * 0.12 }}
            className="rounded-xl border border-edge bg-panel px-3 py-4"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-mono text-2xl font-bold text-ice">{stat.value}</dd>
            <dd className="mt-1 text-[11px] leading-tight text-slate-400">
              {stat.label}
            </dd>
          </motion.div>
        ))}
      </dl>

      {/* Conclusion sérieuse */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="mt-10 max-w-lg rounded-2xl border border-edge bg-panel/60 px-5 py-4 text-sm leading-relaxed text-slate-400"
      >
        {restored.serious}
      </motion.p>

      {/* Entrée sur le site */}
      <motion.button
        type="button"
        onClick={onEnter}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-ice px-8 py-4 text-base font-bold text-night shadow-[0_0_40px_rgba(34,211,238,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ice focus-visible:ring-offset-2 focus-visible:ring-offset-night"
      >
        <BoltIcon className="h-5 w-5" />
        {restored.cta}
      </motion.button>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.7 }}
        className="mt-4 text-xs text-slate-500"
      >
        {restored.hint}
      </motion.p>
    </motion.main>
  )
}
