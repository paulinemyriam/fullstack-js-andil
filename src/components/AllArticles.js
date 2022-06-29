import React, { useState } from "react";

class AllArticles extends React.Component {
  render() {
    return (
        <div>
            <Navbar />

            <div id="head-all-articles">
                <h1>Tous les articles</h1>
                <form>
                    <input type="text" placeholder="Rechercher un tag, un titre"/>
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
  }
}

export default AllArticles;
