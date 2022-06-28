import React, { useState } from "react";

//test gittt
//function Tabs() {//conversion du module Tabs en Class
class Tabs extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      toggleTabs: 1,
    };
  }
  toggleTab(index) {
    this.setState({ toggleTabs: index });
  }

  render() {
    return (
      <div className="container">
        <div className="bloc-tabs">
          <div
            className={
              this.state.toggleTabs === 1 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.toggleTab(1)}
          >
            Catégories
          </div>

          <div
            className={
              this.state.toggleTabs === 2 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.toggleTab(2)}
          >
            Articles
          </div>
        </div>

        <div className="contenu-onglets">
          <div
            className={
              this.state.toggleTabs === 1 ? "active-contenu" : "contenu"
            }
          >
            <h3>Toutes les catégories</h3>
            <p>{this.props.category}</p>
          </div>
          <div
            className={
              this.state.toggleTabs === 2 ? "active-contenu" : "contenu"
            }
          >
            <h3>Les derniers articles</h3>
            <p>{this.props.title}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
