import React, { useState } from "react";
import clavier from "./clavier.gif";
import Navbar from "../Navbar/Navbar";

function NewArticle() {
  {
    /* Ajout des tags sous forme de petites étiquettes */
  }
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
  }

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
              <input type="text" name="" placeholder="Titre" id="titre" />
              <input
                type="text"
                name=""
                placeholder="Votre article"
                id="article"
              />

              <div id="tags-input-container">
                {tags.map((tag, index) => (
                  <div className="tag-item">
                    <span className="text">{tag}</span>
                    <span className="close">x</span>
                  </div>
                ))}
                <div className="tag-item">
                  <span className="text">toggleTabs</span>
                  <span className="close">x</span>
                </div>
                <input
                  onKeyDown={handleKeyDown}
                  type="text"
                  name=""
                  placeholder="Vos tags"
                  className="tags"
                />
              </div>

              <label>Illustrez votre article avec une image</label>
              <input type="file" accept="image/png, image/jpeg" />
              <label>Choisir une catégorie</label>
              <select name="category" id="category-select">
                <option value="debutant">Débutant</option>
                <option value="intermediaire">Intérmédiaire</option>
                <option value="avance">Avancé</option>
                <option value="expert">Expert</option>
              </select>
              <input type="submit" value="Publier" id="submitNewArt"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArticle;
