import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./components/Articles/AllArticles";
import Article from "./components/Articles/Article";
import NewArticle from "./components/Articles/NewArticle";
import Home from "./components/Home/Home";
import Categorys from "./components/Catégories/Categorys";
import Category from "./components/Catégories/Category";

function App() {
  return (
    <div className="App">

      {/* Définition des routes */}
      <Routes>
        <Route path="/fullstack-js-andil" element={<Home />} />
        <Route path="/fullstack-js-andil/categories" element={<Categorys />} />
        <Route path="/fullstack-js-andil/categories/:id" element={<Category />} />
        <Route path="/fullstack-js-andil/articles" element={<AllArticles />} />
        <Route path="/fullstack-js-andil/articles/:id" element={<Article />} />
        <Route path="/fullstack-js-andil/nouvel-article" element={<NewArticle />} />
      </Routes>

    </div>
  );
}

export default App;
