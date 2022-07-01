# Voir le projet live

Retrouvez le projet en live ici : https://paulinemyriam.github.io/fullstack-js-andil/

## Contrat d'interface

### Présentation générale de l'API
Elle a pour but de permettre une collaboration entre des utilisateurs en offrant la possibilité sur une plateforme générale de créer, consulter, modifier et supprimer des articles collaboratifs.
Elle permet de retourner les informations suivantes : un article, son titre, son contenu, sa catégorie, ses tags, son illustration. 

### Les méthodes utilisées au sein de l'API
L'API dispose de plusieurs méthodes : GET, POST, DELETE et PUT. 

## Fonctionnalités développées

### Front

Plusieurs fonctionnalités ont été développées : 
- La navigation entre les vues : permet d'aller sur la page d'accueil, les catégories, les articles ou la page pour ajouter un nouvel article 
- La page d'accueil est composée d'un bloc de deux onglets : les catégories et les derniers articles. Le but aurait été à terme de présenter sur le premier onglet les catégories les plus populaires et sur le deuxième onglet les deux derniers articles publiés
- La page catégories propose 4 boutons corresponsant aux 4 catégories. Au clic, cela nous renvoie vers les articles associés
- La page articles nous montre tous les articles publiés et une barre de recherche. Au clic sur un article, cela nous renvoie vers l'article complet 
- La page d'écriture d'un article est composé de plusieurs input pour la création d'articles : un titre, un contenu, des tags, l'ajout d'une image, le choix d'une catégorie

### Back 

où l'on pourra modifier, supprimer ou télécharger les versions précédentes de ce dernier. La barre de recherche, quant à elle, permet de faire une recherche en fonction des tag ou d'un titre

## Installation

### `npm install`


