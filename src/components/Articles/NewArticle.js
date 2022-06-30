import React from "react";
import clavier from "./clavier.gif";
import Navbar from "../Navbar/Navbar";

class NewArticle extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div id="newArticle">
          <h1>Ecrire un nouvel article</h1>

          <div id="box">
            <div id="box-left">
              <img src={clavier} />
            </div>

            <div id="box-right">
              <form method="POST" action="" id="formArticle">
                <input type="text" name="" placeholder="Titre" />
                <input type="text" name="" placeholder="Votre article ici" id="article" />
                <label>Illustrez votre article avec une image</label>
                <input type="file" accept="image/png, image/jpeg" />
                <label>Choisir une catégorie</label>
                <select name="category" id="category-select">
                  <option value="debutant">Débutant</option>
                  <option value="intermediaire">Intérmédiaire</option>
                  <option value="avance">Avancé</option>
                  <option value="expert">Expert</option>
                </select>
                <input type="submit" value="Publier" id="submitNewArt"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArticle;
