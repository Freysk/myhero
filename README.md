# MyHero Plugin

Ce plugin a pour but de permettre à n'importe quel utilisateur de styliser facilement des "Hero-sections" avec des images ou des vidéos sans faire de CSS.

Les possibilités de personnalisation sont les suivantes :

- Aligner l'image/vidéo dans son container
- Ajout un filtre couleur ou dégradé
- utiliser des modes de fusions pour personnalisés les filtres (Hue/Color)


## Comment s'utilise t'il ?

### Pour les images

Tout d'abord, il vous faut copier ce morceau de code dans votre HTML :

`<div class="myhero-element" data-myheroURL="../img/image-name.jpg">
  <!-- Ce block ne sert que si vous souhaiter utiliser un filter. -->
  <div class="myhero-filter--none" data-fx="" data-filter-opacity="1"></div>
  <div class="myhero-content">
    <!-- CONTENT HERE -->
  </div>
</div>`

Pour personnaliser ce plugin, il y a plusieurs choses de base à faire :

#### 1. Copier le fichier "myhero-style.css" dans votre dossier de style CSS et ajouter la balise `<link rel="stylesheet" href="css/myhero-style.css">` après vos autres feuilles de style dans votre HTML.

#### 2. Copier le fichier "myhero.js" dans votre dossier JS et ajouter la balise `<script src="js/myhero.js"></script>` à la fin de votre balise `<body></body>`

#### 3. Indiquer le lien de votre image dans le `data-myheroURL=" HERE "`