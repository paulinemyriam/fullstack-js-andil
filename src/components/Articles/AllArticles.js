import React, { Fragment, useState } from "react";
import Navbar from "../Navbar/Navbar";

class AllArticles extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <Navbar />

        <div id="head-all-articles">
          <h1>Tous les articles</h1>
          <form>
            <input type="search" placeholder="Tag, titre..." />
            <input type="submit" value="Rechercher" />
          </form>

        {/* Affichage de tous les articles requêtés depuis App.js */}
          <Fragment>
            <ul id="listeArticles">
              {this.props.data.map((item) => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <img></img>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default AllArticles;
