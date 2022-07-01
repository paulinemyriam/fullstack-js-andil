# Démarrer le projet

## Installation

### Télécharger le zip 
### `npm install`
### `npm start`
#### Si problème de CORS, installer l'extension CORS Google : https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=fr


## Voir le projet Front en live

Retrouvez le projet front en live ici : https://paulinemyriam.github.io/fullstack-js-andil/

## Contrat d'interface

### Présentation générale de l'API
Elle a pour but de permettre une collaboration entre des utilisateurs en offrant la possibilité sur une plateforme générale de créer, consulter, modifier et supprimer des articles collaboratifs.
Elle permet de retourner les informations suivantes : un article, son titre, son contenu, sa catégorie, ses tags, son illustration. 

### Les méthodes utilisées au sein de l'API
L'API dispose de plusieurs méthodes : GET, POST, DELETE et PUT. 

GET/all :
POST/find : recherche par #tag ou par titre
POST/articles : ajouter 
DELETE/articles : supprimer
PUT/articles : modification 

## Fonctionnalités développées

### Front

Plusieurs fonctionnalités ont été développées : 
- La navigation entre les vues : permet d'aller sur la page d'accueil, les catégories, les articles ou la page pour ajouter un nouvel article 
- La page d'accueil est composée d'un bloc de deux onglets : les catégories et les derniers articles. Le but aurait été à terme de présenter sur le premier onglet les catégories les plus populaires et sur le deuxième onglet les deux derniers articles publiés
- La page catégories propose 4 boutons corresponsant aux 4 catégories. Le clic n'a pas été fait
- La page articles nous montre tous les articles publiés et une barre de recherche. Au clic sur un article, cela nous renvoie vers l'article complet 
- La page d'écriture d'un article est composé de plusieurs input pour la création d'articles : un titre, un contenu, des tags, l'ajout d'une image, le choix d'une catégorie
- Pour l'ajout de tag, le nom du tag suivi d'un espace sert à ajouter l'étiquette

### Back 

- Enregistrement dans une base de données MongoDB
- Possibilité d'ajouter, de lire, de supprimer, de modifier et de télécharger les versions précédentes d'un article
- Possibilité de rechercher par tag ou par titre. Pour les tags, il faudra utiliser le préfixe # suivi du tag dans la barre de recherche




