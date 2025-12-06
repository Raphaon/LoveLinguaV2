# 🧠 Méthode de travail avec l'IA (Vertical Slice) - LoveLingua

LoveLingua est développée en suivant la méthode des **tranches verticales** :

1. **Choisir une fonctionnalité précise** (ex: Auth, Onboarding, Mode Solo/Couple, Quiz Langages de l'amour, Résultats, Mini-jeux, etc.).
2. **Spécifier le contrat d'API** pour cette fonctionnalité :
   - URL, méthode HTTP
   - Body (JSON)
   - Réponses (200, 4xx)
3. **Implémenter le backend** :
   - Modèles de données (Prisma plus tard)
   - Services / Use cases
   - Controllers / Routes Express
   - Tests unitaires (Jest à prévoir)
4. **Implémenter le frontend** :
   - Pages / Components Ionic
   - Services d'appel API
   - Gestion des erreurs, état, UX mobile
5. **Tester de bout en bout** (du clic dans l'app jusqu'à la réponse de l'API).
6. Passer à la **fonctionnalité suivante**.

---

## 🤖 Collaboration avec l'IA

Lors de l'utilisation de Codex / ChatGPT :

1. **Toujours fournir** :
   - README du projet
   - docs/prerequis.md
   - docs/plan-features.md (quand il sera complété)

2. **Toujours demander** :
   - Un plan pour la fonctionnalité visée (ex: "implémenter le module Auth LoveLingua")
   - Les fichiers complets à créer/modifier (backend + frontend)
   - Une explication courte des changements
   - Les commandes à exécuter pour tester

3. **Ne pas tout demander en une fois** :
   - Travailler module par module
   - Tester entre chaque étape
