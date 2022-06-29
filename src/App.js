import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/TabsHome/Tabs";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./components/Articles/AllArticles";
import Article from "./components/Articles/Article";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>WikiAndil, la plateforme collaborative</h1>
      <Tabs title={"titre1"} content={"contenuuuuuuu"} category={"cat1"} />

      <Routes>
        <Route path="/fullstack-js-andil/articles" element={<AllArticles />} />
        <Route path="/fullstack-js-andil/articles/:id" element={<Article />} />
      </Routes>
      
    </div>
  );
}

export default App;
