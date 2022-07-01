import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./components/Articles/AllArticles";
import Article from "./components/Articles/Article";
import NewArticle from "./components/Articles/NewArticle";
import Home from "./components/Home/Home";
import Categorys from "./components/Catégories/Categorys";
import Category from "./components/Catégories/Category";
import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts',
      );

      setData(result.data);
    };
    fetchData();
  }, [])

  return (
    <div className="App">

      {/* Définition des routes */}
      <Routes>
        <Route path="/fullstack-js-andil" element={<Home data={data}/>} />
        <Route path="/fullstack-js-andil/categories" element={<Categorys />} />
        <Route path="/fullstack-js-andil/categories/:id" element={<Category />} />
        <Route path="/fullstack-js-andil/articles" element={<AllArticles data={data} />} />
        <Route path="/fullstack-js-andil/articles/:id" element={<Article data={data}/>} />
        <Route path="/fullstack-js-andil/nouvel-article" element={<NewArticle data={data}/>} />
      </Routes>

    {/*
      <Fragment>
        <ul>
          {data.map(item =>(
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </Fragment>
      */}


    </div>
  );
}


export default App;
