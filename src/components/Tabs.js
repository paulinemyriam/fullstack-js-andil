import React, { useState } from "react";

function Tabs() {

  // Gestion des onglets sur la page d'accueil
  const [toggleTabs, setToggleTabs] = useState(1);

  const toggleTab = (index) => {
    console.log(index);
    setToggleTabs(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div className={toggleTabs === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
          Catégories
        </div>

        <div className={toggleTabs === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>
          Articles
        </div>
      </div>

      <div className="contenu-onglets">
        <div className={toggleTabs === 1 ? 'active-contenu' : 'contenu'}>
            <h3>Toutes les catégories</h3>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className={toggleTabs === 2 ? 'active-contenu' : 'contenu'}>
            <h3>Les derniers articles</h3>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
