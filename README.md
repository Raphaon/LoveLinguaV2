Voici un **README complet, professionnel, structuré**, parfaitement adapté au projet **LoveLingua**, conforme aux standards GitHub et optimisé pour travailler avec **Codex / ChatGPT / GPT-Engineer**.

Tu peux le mettre dans :
📄 `README.md` (racine du projet)

---

# ❤️ **LoveLingua — Application Mobile d’Amélioration Relationnelle**

### *Comprendre, aimer mieux, se connecter profondément*

---

## 📌 **Présentation**

**LoveLingua** est une application mobile intuitive et interactive qui aide les couples et les célibataires à mieux comprendre leur style d’amour et à renforcer leur communication.

Elle s’appuie sur :

* Les **5 langages de l’amour**
* Des **quiz psychologiques**
* Un **mode couple** synchronisé
* Des **mini-jeux** émotionnels
* Un **dashboard relationnel intelligent**
* Un modèle **freemium/premium**

LoveLingua est conçue comme un véritable **coach relationnel de poche**.

---

# 🏛 **Architecture du Projet**

LoveLingua repose sur une architecture moderne et modulaire :

```
lovelingua/
 ├── backend/        → API Node.js + Express + TypeScript (+ Prisma prochainement)
 ├── frontend/       → App mobile Ionic + Angular (UI/UX mobile-first)
 ├── mobile/         → Capacitor (Android/iOS)
 ├── docs/           → Spécifications, méthode, architecture, roadmap
 ├── .env.example    → Variables d’environnement
 └── README.md       → Ce document
```

---

# 🚀 **Technologies Principales**

### **Backend**

* Node.js
* Express
* TypeScript
* Prisma ORM (bientôt)
* PostgreSQL
* JWT (access + refresh tokens)
* Zod (validation des inputs)

### **Frontend Mobile**

* Ionic
* Angular
* Capacitor
* UI Material + Design premium LoveLingua

### **Infrastructure (plus tard)**

* Docker
* CI/CD GitHub Actions
* Déploiement API (Render, Railway ou VPS)
* Store Android (AAB) / iOS (IPA)

---

# 🎯 **Objectifs Fonctionnels**

### ✔ Pour les utilisateurs en SOLO

* Comprendre leur style d’amour
* Réaliser des quiz personnalisés
* Accéder à une analyse de personnalité
* Voir leur évolution dans le temps
* Utiliser des mini-jeux émotionnels

### ✔ Pour les COUPLES

* Se synchroniser via un **code de couple**
* Comparer leurs résultats
* Recevoir des recommandations
* Jouer à des mini-jeux à deux
* Suivre un dashboard relationnel dynamique

### ✔ Pour tous

* Fonctionnalités gratuites attractives
* Contenu premium débloquable

---

# 🧱 **Structure Backend (Express + TypeScript)**

```
backend/
 ├── src/
 │    ├── routes/
 │    │      └── health.ts
 │    ├── app.ts
 │    └── server.ts
 ├── package.json
 ├── tsconfig.json
 └── README.md
```

### Endpoint de test

```http
GET /health
```

Renvoie :

```json
{
  "status": "ok",
  "message": "API LoveLingua en ligne",
  "timestamp": "2025-12-05T..."
}
```

---

# 🧩 **Structure Frontend (Ionic + Angular)**

```
frontend/
 ├── src/
 └── README.md
```

L'application inclura :

### Pages principales

* Onboarding
* Register / Login
* Dashboard émotionnel
* Quiz Love Languages
* Résultats & compatibilité
* Mode Couple
* Mini-Jeux
* Paramètres

---

# 🧩 **Fonctionnalités — Roadmap (Vertical Slices)**

Document complet dans `docs/plan-features.md`.
Résumé ici :

### **LOT 1 — Authentification**

* Signup
* Login
* Tokens
* Profil minimal

### **LOT 2 — Onboarding + Profil**

* 3–5 écrans d’introduction
* Édition du profil utilisateur

### **LOT 3 — Mode Solo / Mode Couple**

* Création de couple
* Joindre couple via code
* Synchronisation des résultats

### **LOT 4 — Quiz “Langages de l’Amour”**

* 30 questions
* Calcul du langage dominant
* Analyse détaillée

### **LOT 5 — Dashboard Relationnel**

* Résultats solo
* Comparaison couple
* Conseils personnalisés

### **LOT 6 — Mini-Jeux**

* Connais-tu ton partenaire ?
* True/False
* Défis relationnels
* Cartes conversationnelles

### **LOT 7 — Freemium / Premium**

* Accès restreint pour free
* Comparaison avancée & coaching IA pour premium

---

# 🧠 **Modèle de Données (Prisma – à venir)**

Voici les entités principales :

### **User**

```
id, email, password, firstName, language, country, avatar
```

### **Couple**

```
id, partner1Id, partner2Id, joinCode
```

### **Quiz**

```
id, userId, answers[], score, primaryLoveLanguage
```

### **Questions**

```
id, textFr, textEn, category
```

### **MiniGame**

```
id, type, difficulty, payload
```

---

# 🧪 **Tests**

À intégrer :

* Jest pour le backend
* Tests d’intégration (API REST)
* Tests end-to-end (plus tard avec Cypress)

---

# 🔐 Sécurité

* Hashing passwords → BCrypt
* JWT (Access + Refresh)
* Validation Zod
* Protection rate-limit
* Sanitization inputs

---

# 📦 Installation & Démarrage

## 1️⃣ Cloner le projet

```bash
git clone https://github.com/raphaon/lovelingua.git
cd lovelingua
```

---

## 2️⃣ Configurer la base de données

Créer une DB PostgreSQL nommée :

```
lovelingua_db
```

Remplir le fichier `.env` à partir de `.env.example`.

---

## 3️⃣ Backend

```bash
cd backend
npm install
npm run dev
```

Serveur disponible sur :

```
http://localhost:3000/health
```

---

## 4️⃣ Frontend

```bash
cd frontend
ionic serve
```

---

## 5️⃣ Build mobile (plus tard)

```bash
ionic build
npx cap init lovelingua com.example.lovelingua
npx cap add android
```

---

# 🤖 **Guide d’Utilisation pour Codex / ChatGPT**

Pour travailler efficacement avec l’IA :

## Fournir systématiquement :

* `README.md`
* `docs/prerequis.md`
* `docs/plan-features.md`
* Le LOT en cours
* La structure backend/frontend

## Exemple de prompt :

> Analyse le projet LoveLingua (README + docs).
> Nous allons développer le LOT 1 : Auth.
> Génère les fichiers complets pour :
>
> * route Express
> * controller
> * service
> * validation
> * schema Prisma
>   Respecte TypeScript, Express, structure backend, sécurité JWT, et génère les fichiers complets.

---

# 📄 **Licence**

© 2025 – Rapha ONDOBO.
Projet privé. Tous droits réservés.

---

# 💬 **Auteur**

**Raphaël ONDOBO**
Développeur Full-Stack • Architecte Mobile • Ingénieur Systèmes

---

# ❤️ Merci d’utiliser LoveLingua

Souhaites-tu que je génère aussi :

* le **README spécifique backend** ?
* le **README spécifique frontend** ?
* une **doc Swagger API** ?
* une **spécification Prisma complète** ?

Je peux tout produire.
