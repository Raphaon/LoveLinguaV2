# LoveLingua

LoveLingua est une application mobile qui aide les couples et les célibataires à mieux se comprendre grâce aux langages de l'amour, des quiz, des mini-jeux et des outils de coaching relationnel.

---

## 🎯 Objectif

LoveLingua est une application mobile (Ionic / Angular) avec un backend Node.js / Express / TypeScript et une base de données PostgreSQL.

Ce projet suit une méthode de travail structurée pour faciliter la collaboration avec une IA (Codex / ChatGPT) :

- Définir clairement les **prérequis** et l'**environnement**
- Structurer le projet en **backend**, **frontend**, **docs** (et **mobile**)
- Travailler par **tranches verticales (vertical slices)** : une fonctionnalité complète à la fois (backend + frontend)
- Générer des documents clairs pour guider l'IA (pré-requis, méthode, plan de features)

---

## 🧱 Structure du projet

```text
lovelingua/
 ├─ backend/          # API Node/TS, Express, logique métier, Prisma plus tard
 ├─ frontend/         # App mobile Ionic/Angular
 ├─ mobile/           # Capacitor / plateformes mobiles (Android, iOS)
 ├─ docs/             # cahier des charges, specs, méthode, etc.
 │   ├─ architecture/
 │   └─ specs/
 ├─ .env.example
 └─ README.md
```

---

## 🖥 Environnement détecté

- **OS** : MINGW64_NT-10.0-26200 (3.6.4-b9f03e96.x86_64)
- **Node** : v22.13.1
- **npm** : 11.1.0
- **TypeScript** : non installé
- **Angular CLI** : non installé
- **Ionic CLI** : 7.2.1

---

## 🗄 Stack choisie

- **Backend** : Node + Express + TypeScript
- **Frontend** : Ionic + Angular (mobile-first)
- **Base de données** : PostgreSQL (nom : lovelingua_db)
- **Mobile (Capacitor)** : Oui (prévu via dossier mobile/)

---

## 🧠 Méthode de travail (Résumé)

1. **Définir la structure de données (entités LoveLingua)** avant la base de données.
2. Concevoir les **modèles** (Prisma, schéma SQL) à partir des entités.
3. Implémenter la **BDD** (migrations, connexion).
4. Travailler par **fonctionnalités complètes** :
   - Définir le *contrat d'API* (URL, body, réponse)
   - Implémenter le **backend** (endpoint, service, tests)
   - Implémenter le **frontend** (page, service, intégration)
5. Ajouter progressivement :
   - Tests
   - Sécurité
   - Optimisations / refactor

Voir `docs/methodologie.md` pour plus de détails.

---

## 🤖 Travail avec l'IA (Codex / ChatGPT)

1. Fournir à l'IA :
   - ce `README.md`
   - `docs/prerequis.md`
   - `docs/plan-features.md`
   - la structure du projet (arborescence)

2. Demander à l'IA :
   - d'analyser le projet
   - de proposer un plan par **LOTS / SPRINTS** (Auth, Onboarding, Mode Solo/Couple, Quiz, etc.)
   - de générer le code **fichier complet** par **tranche verticale**

---

## 👤 Auteur

- Projet : **LoveLingua**
- Auteur : **Rapha ONDOBO**

