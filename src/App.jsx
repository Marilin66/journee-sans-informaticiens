import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import Hero from './components/Hero.jsx'
import Blackout from './components/Blackout.jsx'
import Journey from './components/Journey.jsx'
import Reboot from './components/Reboot.jsx'
import Restored from './components/Restored.jsx'
import Footer from './components/Footer.jsx'

/* Chargement paresseux : sections non critiques au premier écran. */
const Skills = lazy(() => import('./components/Skills.jsx'))
const Finale = lazy(() => import('./components/Finale.jsx'))

/* Petit utilitaire : délai promesse. */
const delayMs = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * App — machine à états narrative du site :
 *   home → blackout (glitch, pannes, écran bleu) → journey → reboot →
 *   restored (page de rétablissement) → home.
 */
export default function App() {
  const [phase, setPhase] = useState('home')
  const [busy, setBusy] = useState(false) // verrou anti double-clic du Hero

  /* Le clic du Hero : le Blackout démarre avec son propre glitch plein écran. */
  const triggerBlackout = async () => {
    if (busy) return
    setBusy(true)
    await delayMs(400)
    setPhase('blackout')
    setBusy(false)
    window.scrollTo({ top: 0 })
  }

  /* Fin du Blackout (écran bleu) : ouverture du scénario interactif. */
  const finishBlackout = () => {
    setPhase('journey')
    window.scrollTo({ top: 0 })
  }

  /* Reboot terminé : page de rétablissement (pas encore l'accueil). */
  const finishReboot = () => {
    setPhase('restored')
    window.scrollTo({ top: 0 })
  }

  /* La page de rétablissement mène ensuite à l'accueil complet du site. */
  const backHome = () => {
    setPhase('home')
    window.scrollTo({ top: 0 })
  }

  /* Verrou du scroll uniquement pendant les actes plein écran. */
  useEffect(() => {
    document.body.style.overflow = phase === 'blackout' ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [phase])

  return (
    /* reducedMotion="user" : Framer Motion respecte prefers-reduced-motion,
       en désactivant les animations de transform pour les utilisateurs sensibles. */
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-night text-slate-200">
      {phase === 'blackout' && <Blackout onDone={finishBlackout} />}

      {phase === 'journey' && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Journey />
          <Reboot onDone={finishReboot} />
        </motion.main>
      )}

      {phase === 'restored' && <Restored onEnter={backHome} />}

      {phase === 'home' && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero onTrigger={triggerBlackout} />

          <Suspense fallback={<div className="h-40" aria-hidden />}>
            <Skills />
            <Finale />
          </Suspense>

          <Footer />
        </motion.main>
      )}
    </div>
    </MotionConfig>
  )
}
