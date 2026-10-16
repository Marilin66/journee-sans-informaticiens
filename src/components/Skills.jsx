import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import content from '../content.js'
import {
  CodeIcon,
  NetworkIcon,
  WrenchIcon,
  ShieldIcon,
  DatabaseIcon,
} from './Icons.jsx'

/* Correspondance index → icône SVG dessinée à la main. */
const skillIcons = [CodeIcon, NetworkIcon, WrenchIcon, ShieldIcon, DatabaseIcon]

/* Accents colorés alternés pour un rendu vivant sans multiplier les couleurs. */
const skillAccents = ['text-ice', 'text-neon', 'text-ice', 'text-neon', 'text-ice']

/**
 * Skills — cinq cartes animées au scroll (whileInView) : développement, 
 * réseaux, maintenance, cybersécurité, hébergement & bases de données.
 */
export default function Skills() {
  const { skills } = content
  const scope = useRef(null)
  const inView = useInView(scope, { once: true, margin: '-80px' })

  return (
    <section
      ref={scope}
      className="mx-auto max-w-5xl px-6 py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2
          id="skills-heading"
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {skills.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          {skills.subheading}
        </p>
      </motion.div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.items.map((skill, index) => {
          const Icon = skillIcons[index]
          return (
            <motion.li
              key={skill.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="group rounded-2xl border border-edge bg-panel p-6 transition-colors hover:border-ice/60"
            >
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-edge ${skillAccents[index]}`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {skill.text}
              </p>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
