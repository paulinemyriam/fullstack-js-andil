import React, { useState } from "react";

class AllArticles extends React.Component {
  render() {
    return (
        <div>

            <div id="head-all-articles">
                <h1>Tous les articles</h1>
                <form>
                    <input type="search" placeholder="Tag, titre..."/>
                    <input type="submit" value="Rechercher"/>
                </form>
            </div>

        </div>
    );
  }
}

export default AllArticles;
