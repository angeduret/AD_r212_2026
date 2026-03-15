# Rapport — TP1

## Points clés

### 1. Grid Garden
Pour pouvoir bouger les objets dans une grille et les mettres où on veux

### 2. Hover
C'est une action de changement d'état sur un élément (par exemple un changement de couleur au survol sur un bouton)
Je n'avais jamais fait de hover mais je trouve que le site est plus dynamique

## Utilisation de l'IA

### Démarche

J'ai utilisé l'IA Claude en version Sonnet 4.6 pour qu'il m'explique étape par étape comment faire le responsive de mon site,
à travers une explication simple et des exercices

### Apports et limites

L'ia m'a aidé a comprendre le responsive et comment l'écrire et le mettre en place dans le code
Une fois avoir fait cette partie, il m'a dit ce qui n'allait pas et m'aider aider à le corriger pour qu'il fonctionne

### Prompts significatifs
- Prompt : aide moi a faire le responsive de mon site internet avec cette contrainte : @media (max-width: 600px)
explique moi etape par etapes le proceder d'un bon responsive simple a travers des exercie pour que je
sois a la fin capable de le faire moi meme sur mon site

- Réponse :
Super, j'ai ce qu'il me faut pour créer un tutoriel interactif. Voilà comment on va procéder :
je vais t'expliquer le responsive pas à pas, avec des exercices pratiques et des démos visuelles interactives à chaque étape.
À la fin, tu pourras appliquer tout ça seul sur ton site.
La logique du responsive en @media (max-width: 600px)L'idée est simple :
tu écris d'abord ton CSS normal (desktop), puis dans le bloc @media tu redéfinis uniquement ce qui doit changer sur mobile.
Tout le reste est hérité automatiquement.

/* CSS normal — s'applique toujours */
.mon-element {
  font-size: 18px;
}

/* S'applique UNIQUEMENT si l'écran est ≤ 600px */
@media (max-width: 600px) {
  .mon-element {
    font-size: 14px;
  }
}

Voilà un tutoriel interactif avec 4 exercices progressifs

Les 4 règles d'or du responsive
Pour chaque exercice, retiens ces réflexes :
1. Texte → réduire font-size, augmenter line-height si besoin.
2. Layout → passer flex-direction: column ou grid-template-columns: 1fr pour empiler les éléments.
3. Navigation → display: none pour masquer, display: block (ou flex) pour afficher.
4. Images & espaces → width: 100%, float: none, réduire les padding et margin.


Ce prompt à été utile pour apprendre à faire le reponsive car je ne savais pas par quoi commencer ni quoi mettre exactement
