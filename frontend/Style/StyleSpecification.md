# 🎨 LoveLingua – Charte Graphique & Guide UI/UX pour l’IA

> Document destiné à Codex / ChatGPT / outils d’IA pour générer des écrans **cohérents** avec l’identité de LoveLingua.

---

## 1. Vision & Positionnement

**LoveLingua** est une application mobile pour :
- aider les couples et les célibataires à mieux se comprendre,
- utiliser les langages de l’amour,
- jouer ensemble, planifier des moments, suivre leur humeur,
- gamifier la relation (points, badges, niveaux).

L’interface doit :
- être **chaleureuse**, **émotionnelle**, mais **propre** et **moderne**,
- rappeler l’univers **dating / love / self-care**,
- être **mobile-first**, pensée pour une utilisation quotidienne.

---

## 2. Modules fonctionnels (dérivés de l’API backend)

Les modules sont basés sur l’API existante (routes backend : `/auth`, `/me`, `/quiz`, `/questions`, `/moods`, `/actions`, `/couples`, `/couples_qr`, `/games`, `/agenda`, `/reminders`, `/gamification`, `/premium`, `/notifications`, `/admin`).

### 2.1 Authentification & Profil

- **Écrans :**
  - `Onboarding` (slides d’intro, 3–5 écrans)
  - `Register` (inscription)
  - `Login` (connexion)
  - `Mot de passe oublié` (plus tard)
  - `Mon profil` (infos utilisateur + plan free/premium)

- **API reliées :**
  - `POST /auth/register`
  - `POST /auth/login`
  - `GET /me`

---

### 2.2 Quiz “Langages de l’amour”

- **Écrans :**
  - `Quiz Intro` : explication courte du test
  - `Quiz Questions` : une question par écran (ou par carte), progression
  - `Résultats` : langage principal + répartition
  - `Compatibilité couple` : comparaison entre 2 membres

- **API reliées :**
  - `GET /questions` (liste des questions)
  - `POST /quiz/results` (enregistrement d’un résultat)
  - `GET /quiz/results/me/latest`
  - `GET /quiz/compatibility/{coupleId}`

---

### 2.3 Humeur & Actions quotidiennes

- **Écrans :**
  - `Mood Check-in` : choisir une humeur (émoticônes / smileys / sliders)
  - `Actions recommandées` (ex: “envoie un message d’appréciation”, etc.)

- **API reliées :**
  - `POST /moods`
  - `GET /moods`
  - `GET /actions` (suggestions d’actions)

---

### 2.4 Mode Couple & QR

- **Écrans :**
  - `Créer un couple` : générer un couple et un code/QR
  - `Rejoindre un couple` : saisir un code ou scanner un QR
  - `Home couple` : vue globale de la relation (quiz, humeur, agenda, etc.)

- **API reliées :**
  - `POST /couples`
  - `GET /couples/me`
  - `POST /couples_qr/generate`
  - `POST /couples_qr/scan` (selon implémentation)

---

### 2.5 Jeux (Gamification & Mini-jeux)

- **Écrans :**
  - `Games Hub` : liste des mini-jeux disponibles
  - `Game View` : surface de jeu (écran dédié)
  - `Résumé de partie` / résultats du jeu

- **API reliées :**
  - `GET /games`
  - `POST /games/play`
  - `POST /games/results` (selon API réelle)

- **Gamification :**
  - Points (`/gamification/points`)
  - Badges (`/gamification/badges`)
  - Niveaux (`/gamification/level`)

Affichage d’un **Progress header** (points, niveau, badge actuel) dans certaines pages.

---

### 2.6 Agenda & Rappels

- **Écrans :**
  - `Agenda` : liste d’événements (rendez-vous, dates, moments en couple)
  - `Créer un événement`
  - `Rappels` : liste de rappels (due_at, statut pending/done)

- **API reliées :**
  - `GET /agenda/{coupleId}/events`
  - `POST /agenda/{coupleId}/events`
  - `GET /reminders`
  - `POST /reminders`

---

### 2.7 Notifications

- **Écran :**
  - `Notifications` : liste des notifications importantes (quiz à refaire, action à réaliser, rappel…).

- **API reliée :**
  - `GET /notifications`

---

### 2.8 Premium

- **Écrans :**
  - `Paywall Premium` : différences free vs premium
  - `Gestion du plan` : voir son plan, upgrade, etc.
  - Les écrans “premium-only” doivent avoir un **badge Premium** visible.

- **API reliée :**
  - `GET /premium/status`
  - `POST /premium/activate` (selon implémentation)

---

### 2.9 Admin (web / interne)

- **Écran / zone admin web-only :**
  - Liste des utilisateurs, quiz, questions, paramètres globaux.
  - UI plus sobre, type dashboard, distinct de l’app grand public.

- **API reliée :**
  - `GET /admin/...`

> **Codex** : les écrans Admin ne doivent PAS utiliser exactement la même charte “love/dating” (mais rester sobres, professionnels).

---

## 3. Charte Graphique – LoveLingua

### 3.1 Identité

- Univers : **love / couple / bien-être / coaching**.
- Ambiance : **fond sombre chaleureux** + **accents rose/doré**.
- Style général : inspiration apps de rencontre (Tinder/Bumble) mais plus doux, moins agressif.

---

### 3.2 Palette de couleurs

> **Règle pour Codex :** utiliser uniquement ces couleurs (via variables CSS / SCSS). Ne pas inventer d’autres couleurs vives.

#### Couleurs principales

- **Primaire** (Love) : `#FF4B7D`
- **Primaire (hover)** : `#E63B6D`
- **Secondaire** (accent / premium) : `#FFC857`
- **Accent** (éléments interactifs) : `#6C63FF`

#### Fonds

- **Fond global / background app** : `#0F172A` (bleu nuit)
- **Fond des cartes / panneaux** : `#111827`
- **Fond clair alternatif (éventuellement pour certains écrans)** : `#F9FAFB`

#### Textes

- **Texte principal** : `#F9FAFB`
- **Texte secondaire** : `#9CA3AF`
- **Texte désactivé / hints** : `#6B7280`
- **Erreur** : `#F97373`
- **Succès** : `#22C55E`

---

### 3.3 Typographie

- Police principale : **Poppins** ou **Inter**
- Titres : semi-bold ou bold
- Texte courant : regular

Taille recommandée :
- H1 (titre d’écran) : 24–28 px
- H2 (sous-titre) : 20–22 px
- Corps : 14–16 px
- Petite légende / aide : 12–13 px

---

### 3.4 Boutons

> **Codex DOIT générer les boutons selon ce style :**

#### Bouton principal (CTA)

- Background : `#FF4B7D`
- Texte : `#F9FAFB`
- Border-radius : **9999px** (style pilule)
- Full width sur mobile (`width: 100%`)
- Font-weight : 600
- Padding vertical généreux (12–16 px)

#### Bouton secondaire

- Background : transparent ou `#111827`
- Bordure : `1px solid #FF4B7D`
- Texte : `#FF4B7D`
- Border-radius : 9999px

#### Interdits

- Boutons carrés
- Boutons aux bords non arrondis
- Boutons avec multiples couleurs ou ombres lourdes

---

### 3.5 Cartes & blocs de contenu

- Background carte : `#111827`
- Border-radius : **24 px**
- Padding : 16–20 px
- Ombre légère (optionnelle, mais discrète)
- Toujours bien séparer les cartes entre elles (margin bottom 12–16 px)

Utilisation :
- Carte de question de quiz
- Carte de mood
- Résumé de résultats
- Cartes de mini-jeux

---

### 3.6 Layout & Spacing

- **Mobile-first**.
- Chaque écran doit avoir :
  - un **header clair** (titre, éventuellement sous-titre)
  - une **zone de contenu principale** (une seule action ou focus principal)
  - une **zone d’action** (CTA(s) principaux en bas de l’écran)

- Marges & espacements :
  - Petits : 8 px
  - Normaux : 12–16 px
  - Grands : 24 px

- Éviter de surcharger :
  - préférer 1 idée / 1 action par écran.

---

### 3.7 Icônes & illustrations

- Icônes minimalistes, style lignes douces (Ionicons).
- Utiliser des symboles :
  - cœur ❤️ / icône `heart`
  - calendrier pour agenda
  - cloche pour notifications
  - smiley pour humeur
  - gamepad pour jeux

- **Ne pas** utiliser d’illustrations “clipart” trop enfantines.
- Garder une cohérence de style sur toutes les pages.

---

## 4. Conventions pour Ionic / Angular

> **IMPORTANT POUR CODEX** : utiliser les composants Ionic.

### Composants de base

- Layout :
  - `ion-page`
  - `ion-header`
  - `ion-toolbar`
  - `ion-title`
  - `ion-content`
- Formulaire :
  - `ion-item`
  - `ion-label`
  - `ion-input`
  - `ion-select`
  - `ion-textarea`
- Actions :
  - `ion-button`
  - `ion-icon`
- Cartes :
  - `ion-card`
  - `ion-card-header`
  - `ion-card-content`
- Navigation :
  - `ion-tabs`
  - `ion-tab-bar`
  - `ion-tab-button`

### Thème (variables SCSS)

Définir dans `src/theme/variables.scss` (ou équivalent) :

```scss
:root {
  --ion-color-primary: #FF4B7D;
  --ion-color-primary-rgb: 255, 75, 125;

  --ion-color-secondary: #FFC857;
  --ion-color-secondary-rgb: 255, 200, 87;

  --ion-color-dark-bg: #0F172A;
  --ion-color-card-bg: #111827;

  --ion-text-color: #F9FAFB;
  --ion-text-color-secondary: #9CA3AF;
}
