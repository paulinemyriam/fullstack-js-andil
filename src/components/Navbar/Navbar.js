import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav>

            <ul className="liste">
                <li className="items"><Link to="/fullstack-js-andil">Accueil</Link></li>
                <li className="items"><Link to="/fullstack-js-andil">Catégories</Link></li>
                <li className="items"><Link to="/fullstack-js-andil/articles">Articles</Link></li>
                <button className="btnArt">✒️ Ecrire un article</button>
            </ul>
        </nav>
    )
}