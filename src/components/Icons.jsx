/**
 * Icons.jsx — Bibliothèque d'icônes SVG dessinées à la main, en ligne.
 * Aucune dépendance externe, aucun sticker ni émoji : uniquement des icônes
 * vectorielles cohérentes (trait 1.8, arrondi, grille 24×24).
 * Chaque icône accepte `className` pour la colorer via Tailwind.
 */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

/* ── Icônes de pannes (cascade du Blackout) ── */

export function AntennaIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="m9.5 12.5-4.5 7M14.5 12.5l4.5 7" />
      <path d="M8.2 4.2a6 6 0 0 1 7.6 0M6 2a9 9 0 0 1 12 0" />
    </svg>
  )
}

export function MessageIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 11.5c0 4.1-4 7.5-9 7.5-1 0-2-.13-2.9-.38L4 20l1.2-3.2A7.2 7.2 0 0 1 3 11.5C3 7.4 7 4 12 4s9 3.4 9 7.5Z" />
      <path d="m7.5 10.5 2 2M14.5 10.5l-2 2" />
    </svg>
  )
}

export function WalletIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M16.5 15h1.5" />
    </svg>
  )
}

export function BankIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m3 9 9-5 9 5" />
      <path d="M5 9v8M9.5 9v8M14.5 9v8M19 9v8" />
      <path d="M3 20h18M3 17h18" />
    </svg>
  )
}

export function HospitalIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M12 8v6M9 11h6" />
      <path d="M9 21v-2.5M15 21v-2.5" />
    </svg>
  )
}

export function PlugIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 7V3M15 7V3" />
      <path d="M7 7h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7Z" />
      <path d="M12 15v6" />
    </svg>
  )
}

/* ── Icônes de compétences (cartes Skills) ── */

export function CodeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m8 8-4.5 4L8 16M16 8l4.5 4L16 16M13.5 5l-3 14" />
    </svg>
  )
}

export function NetworkIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <rect x="3" y="17" width="6" height="4" rx="1" />
      <rect x="15" y="17" width="6" height="4" rx="1" />
      <path d="M12 7v4M6 17v-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" />
    </svg>
  )
}

export function WrenchIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.7L3 17.7 6.3 21l5.7-5.7a4.5 4.5 0 0 0 5.7-6l-3 3-2.6-2.6 3-3Z" />
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.4 3 7.6 7 10 4-2.4 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  )
}

export function DatabaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  )
}

/* ── Icônes système / UI ── */

export function BoltIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function SignalIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 18v-1M9 18v-3M14 18v-6M19 18V6" />
    </svg>
  )
}

export function RefreshIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6v5h-5" />
      <path d="M4 18v-5h5" />
      <path d="M19.5 11a7.5 7.5 0 0 0-13-4.3L4 9M4.5 13a7.5 7.5 0 0 0 13 4.3L20 15" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.8 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.6 1.4c.1.2 0 .4-.1.6l-.5.6c-.1.2-.1.3 0 .5.4.7 1 1.3 1.8 1.7.2.1.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.4.7c.4.2.5.4.5.6-.1.9-.8 1.5-1.6 1.5-2-.1-4.5-2.2-5.5-5.3-.3-.8-.2-1.6.2-2.1Z" />
    </svg>
  )
}

export function DismissIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}
