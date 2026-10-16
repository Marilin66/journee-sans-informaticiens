/**
 * content.js — TOUT le contenu textuel du site est centralisé ici.
 * Une seule fonte de vérité faciale : pour changer un texte, éditez ce fichier.
 */

// ── Configuration du lien WhatsApp (à éditer uniquement ici) ─────────────
export const whatsappNumber = '2290199395776' // +229 01 99 39 57 76
export const whatsappMessage =
  'Tu me demandais ce que nous faisons. Maintenant tu sais.'

export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`

// ── Contenu global ───────────────────────────────────────────────────────
const content = {
  // Section Hero : 6h00, tout fonctionne… pour l'instant.
  hero: {
    hour: '06:00',
    hourLabel: 'Mardi matin — la ville dort encore',
    title: 'Une journée',
    titleAccent: 'sans informaticiens',
    message: 'Bonjour Germaine. Tout fonctionne. Profite, ça ne va pas durer.',
    cta: 'Retirer les informaticiens',
  },

  // Section Blackout : la cascade des pannes après le clic.
  blackout: {
    signal: 'Signal réseau',
    signalOff: 'Hors service',
    bsoDTitle: ':( Quelque chose s’est mal passé',
    bsoDText:
      'Une panne générale a été détectée et votre connexion doit redémarrer.',
    bsoDPourcent: '0 % terminé',
    steps: [
      { key: 'telecom',  label: 'Réseaux télécoms',            detail: 'Toutes les antennes sont hors service.' },
      { key: 'whatsapp', label: 'WhatsApp & réseaux sociaux',  detail: 'Impossible d’envoyer ou de recevoir un message.' },
      { key: 'money',    label: 'Mobile Money',                detail: 'Aucun transfert n’aboutit. Solde bloqué.' },
      { key: 'banque',   label: 'Banques & guichets',          detail: 'Serveurs injoignables, files d’attente.' },
      { key: 'hopital',  label: 'Hôpitaux',                    detail: 'Dossiers patients inaccessibles.' },
      { key: 'electric', label: 'Électricité',                 detail: 'Réseau intelligent coupé, villes dans le noir.' },
    ],
  },

  // Mini-scénario : Germaine tente d’agir dans un monde sans informaticiens.
  journey: {
    heading: 'Essaie par toi-même',
    subheading: 'Chaque action échoue. Compte ce qui marche encore.',
    counter: 'Choses qui marchent encore :',
    actions: [
      {
        button: 'Commander un repas',
        error: 'Erreur 404 : l’informaticien est introuvable.',
        detail: 'L’application de livraison tourne… nulle part. Il faudra aller au marché à pied.',
      },
      {
        button: 'Payer avec Mobile Money',
        error: 'Erreur 503 : service de paiement indisponible.',
        detail: 'Aucune transaction ne passe. Le marchand n’accepte que le cash… qu’il n’y a plus.',
      },
      {
        button: 'Écrire à Marilin',
        error: 'Erreur 500 : message non envoyé.',
        detail: 'Sans réseau ni serveurs, ton message restera coincé dans le vide.',
      },
      {
        button: 'Regarder une vidéo',
        error: 'Erreur : fichier introuvable.',
        detail: 'Pas de streaming, pas de télévision numérique, pas de Wi-Fi. Juste le silence.',
      },
    ],
  },

  // Bouton de rappel à la raison.
  reboot: {
    cta: 'Rappeler un informaticien',
    steps: [
      'Nettoyage des serveurs…',
      'Redémarrage des antennes…',
      'Paiements rétablis…',
      'Dossiers hospitaliers rechargés…',
      'Lumière !',
    ],
  },

  // Page de rétablissement affichée APRÈS le reboot (avant l'accueil).
  restored: {
    kicker: '06:04 — RÉTABLISSEMENT COMPLET',
    title: 'Tout est de retour.',
    titleAccent: 'Et pas par magie.',
    lead:
      'Réseau, paiements, hôpitaux, énergie : six services sur six repartis après un seul appel à un informaticien.',
    services: [
      'Réseaux télécoms',
      'WhatsApp & réseaux sociaux',
      'Mobile Money',
      'Banques & guichets',
      'Hôpitaux',
      'Électricité',
    ],
    stats: [
      { value: '6/6', label: 'services rétablis' },
      { value: '1', label: 'appel suffit' },
      { value: '0', label: 'réponse du service client' },
    ],
    serious:
      'Ce n’était pas de la magie : c’est un métier. Des heures de formation, des nuits d’astreinte, et le réflexe de savoir quoi faire quand plus rien ne répond.',
    cta: 'Découvrir ce qu’il fait vraiment',
    hint: 'La suite du site : nos métiers, en clair.',
  },

  // Compétences métier (cartes au scroll).
  skills: {
    heading: 'Ce que nous faisons vraiment, tous les jours',
    subheading:
      'Derrière chaque écran vert de « ça fonctionne », il y a des techniciens. Voici mon métier.',
    items: [
      {
        title: 'Développement web & mobile',
        text: 'Sites, applications et API taillés pour notre quotidien : offline-first, légers, rapides.',
      },
      {
        title: 'Réseaux & télécoms',
        text: 'Fibre, antennes relais, VPN : nous tissons l’artère numérique qui connecte les gens.',
      },
      {
        title: 'Maintenance & dépannage',
        text: 'Nous sauvons vos outils du naufrage : postes, imprimantes, serveurs, sauvegardes.',
      },
      {
        title: 'Cybersécurité',
        text: 'Piratages, fraude digitale, arnaques : nous construisons les murs et surveillons les portes.',
      },
      {
        title: 'Hébergement & bases de données',
        text: 'Vos données vivent quelque part : nous les installons, les chiffrons et les relançons.',
      },
    ],
  },

  // Finale + footer.
  finale: {
    typed: 'Tu me demandais ce que nous faisons. Maintenant tu sais.',
    cta: 'Me répondre',
    footer:
      'Marilin BADJI, technicien supérieur en informatique et télécommunications',
  },
}

export default content
