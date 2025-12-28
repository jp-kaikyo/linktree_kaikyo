# 📚 Linktree Kaikyo


un endroit où on peut accéder à chaque chaîne / compte de mon projet qui s’appelle kaikyo destiné à faire du contenu autour du jeu vidéo (“création de jeux et jeu à des jeux”)


## ✨ Fonctionnalités

### 🧮 Calcul simple
- Addition automatique de 5 nombres
- Affichage du résultat dans la page

### 🎨 Visuel et style
- Système de bulles modulaires (secondaire, info,)
- Effets hover et clic avec animations CSS
- Design responsive (écrans >1000px et <999px)
- logos animés
- liens vers réseaux sociaux


## 🛠️ Technologies utilisées

- HTML
- CSS (variables CSS, media queries)
- JavaScript (vanilla)


## 📖 Ce que j'ai appris

- Manipuler le DOM avec JavaScript (getElementById, innerHTML)
- Mettre à jour du contenu HTML dynamiquement
- Organiser un script JavaScript simple et lisible
- Faire un calcul automatique et afficher le résultat dans la page
- Relier correctement HTML, CSS et JavaScript dans un même projet
- Utiliser les variables CSS pour créer un design cohérent
- Adapter l’affichage selon la taille de l’écran avec des media queries
- Structurer un projet front-end proprement (fichiers, dossiers, logique)


## 📥 Installation

1. Cloner le projet
```bash
   git clone https://github.com/jp-kaikyo/linktree_kaikyo.git 
```

2. Ouvrir `index.html` dans un navigateur


## 📁 Structure du projet
```

├── image/
│   └── logo
│   └── profil
├── index.html
├── LICENSE
├── README.md
├── script.js
└── style.css
```


## 🎯 Utilisation

### Modifier les valeurs de calcul
Dans `script.js`, tu peux changer les valeurs les let :
```js
twitch_valeur = twitch.innerHTML = 41
```
Le JavaScript calcule automatiquement ces valeurs et affiche le résultat.

### Personnaliser les couleurs
Modifie les variables CSS dans `:root` :
```css
--fond-principal: #0F0F0F;
--objet-permanent: #8B5CF6;
```


## 📝 Notes

- Les images doivent rester dans le dossier `image/` pour que le HTML fonctionne
- Le projet est volontairement simple et modulable
- Facile d'ajouter de nouveaux composants ou exemples


## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésite pas à :
- Ouvrir une **issue** pour signaler un bug
- Proposer une **pull request** pour ajouter des fonctionnalités


## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.