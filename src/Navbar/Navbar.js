import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return(
        <nav>

            <ul className="liste">
                <li className="items">Accueil</li>
                <li className="items">Catégories</li>
                <li className="items">Articles</li>
                <button className="btnArt">✒️ Ecrire un article</button>
            </ul>
        </nav>
    )
}