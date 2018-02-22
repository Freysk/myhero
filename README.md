# MyHero Plugin

Ce plugin a pour but de permettre à n'importe quel utilisateur de styliser facilement des "Hero-sections" avec des images ou des vidéos sans faire de CSS.

Les possibilités de personnalisation sont les suivantes :

- Aligner l'image/vidéo dans son container
- Ajout un filtre couleur ou dégradé
- utiliser des modes de fusions pour personnalisés les filtres (Hue/Color)

## Demo
[Lien vers la demo](http://cepegra-labs.be/webdesign/2017/fdef/web/_html-css-js/_plugins-js/myhero-plugin-master/dist/)

## Comment s'utilise t'il ?

Tout d'abord, il vous faut copier ce morceau de code dans votre HTML :

```
<div class="myhero-element myhero-element--CC" data-url="../img/pexels-photo-132037.jpeg">

  <!-- Ce block ne sert que si vous souhaiter utiliser un filter. -->
  <div class="myhero-filter" data-opacity="1" data-fx="hue" data-color1="red" data-color2="" data-gradient-direction="90deg"></div>

  <div class="myhero-content">
    <!-- CONTENT HERE -->
  </div>

</div>
```

Pour personnaliser ce plugin, il y a plusieurs choses de base à faire :

#### 1. Copier le fichier "myhero-style.css" dans votre dossier de style CSS et ajouter la balise ```<link rel="stylesheet" href="css/myhero-style.css">``` après vos autres feuilles de style dans votre HTML.

#### 2. Copier le fichier "myhero.js" dans votre dossier JS et ajouter la balise ```<script src="js/myhero.js"></script>``` à la fin de votre balise ```<body></body>```

#### 3. Indiquer l'URL de votre image dans le data de <b>.myhero-element</b> pour afficher l'image :
- data-url : "../img/image-name.jpg"

#### 4. Concernant les filtres (facultatif). Dans ce cas, personnaliser avec les <i>data</i> :
- <b>data-opacity</b> : permet de doser la visibilité du filtre appliqué
- <b>data-color1</b> : indiquer une couleur primaire pour appliquer un filtre couleur
- <b>data-color2</b> : indiquer une seconde couleur pour réaliser un effet dégradé
- <b>data-gradient-direction</b> : indiquer une valeur en degrée, e.g. : "68deg" pour orienter le gradient dans la direction désirée.
- <b>data-fx</b> : personnaliser le filtre color/gradient avec un mode de fusion. Il n'y a que 2 valeurs disponibles ( "hue" et "color" )
- <b>data-blur</b>: Indiquer une valeur chiffré, l'unité est en ' px'
- <b>data-gray</b>: 0-100 (%)

Et voilà, tout devrait fonctionner. Ciao !
