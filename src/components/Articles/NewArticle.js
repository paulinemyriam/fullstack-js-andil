import { Component } from "react";
import clavier from './clavier.gif';

class NewArticle extends Component {
  render() {
    return (
      <div>
        <h1>Ecrire un nouvel article</h1>

        <img src={clavier} />

        <form method="POST" action="">
          <input type="text" name="" placeholder="Titre" />
          <input type="text" name="" placeholder="Votre article ici" />
          <input type="file" accept="image/png, image/jpeg" />
          <label>Choisir une catégorie de niveau</label>
          <select name="category" id="category-select">
            <option value="debutant">Débutant</option>
            <option value="intermediaire">Intérmédiaire</option>
            <option value="avance">Avancé</option>
            <option value="expert">Expert</option>
          </select>
          <input type="submit" value="Publier"/>
        </form>
      </div>
    );
  }
}

export default NewArticle;
