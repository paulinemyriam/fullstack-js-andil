import React from "react";
import clavier from "./clavier.gif";
import Navbar from "../Navbar/Navbar";
import "../../App.css";

class NewArticle extends React.Component {
    
  constructor(props) {
      super(props);
      this.state = {title: '',content:'',tags:[],category:''};
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  
  handleChange(event) {
      const name=event.target.id
      this.setState({[name]: event.target.value})
  }
  handleKeyDown(e) {
    const arrayTags=this.state.tags.slice()
  
    if(e.key==' '){
      arrayTags.push(e.target.value.trim())
      this.setState({tags:arrayTags})
      e.target.value=''
    }
  }
  
  handleSubmit(event) {//envoi url en argument "articles" ou "find"
    event.preventDefault();

    if(window.confirm('voulez vous envoyer votre article ?')){
      console.log(this.state);
      const uri='http://localhost:3001/articles'
      
      
      fetch(uri,{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          mode:'no-cors',
          body:JSON.stringify(this.state)
      })
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
              console.log(response);
          } else {
              console.log('oops i did it again');
          }
      })
      .catch(err => err);
    }
    else{
      console.log('erreur')
    }
    
  }    
  
  render() {
      return (
        <div>
          <Navbar />
          
          
          <div id="newArticle">
              <h1>Ecrire un nouvel article</h1>
              
              <div id="box">
                  <div id="box-left">
                      <img src={clavier} />
                  </div>
          
                  <div id="box-right">
                      <form onSubmit={this.handleSubmit} id="formArticle">
                          <input type="text" id='title' placeholder="Titre" value={this.state.title} onChange={this.handleChange} />
                          
                          <input type="text" id='content' placeholder="Votre article" value={this.state.content} onChange={this.handleChange} />

                              <div id="tags-input-container">
                              {this.state.tags.map((tag) => (
                              <div className="tag-item">
                                  <span className="text">{tag}</span>
                                  <span className="close">x</span>
                              </div>
                              ))}
                              <div className="tag-item">
                              <span className="text">Tag + espace pour ajouter</span>
                              <span className="close">x</span>
                              </div>
                              <input
                              onKeyDown={this.handleKeyDown}
                              type="text"
                              name=""
                             
                              placeholder="Vos tags"
                              className="tags"
                              />
                              </div>

                  
                          <label>Illustrez votre article avec une image</label>
                              <input type="file" accept="image/png, image/jpeg" />
                          <label>Choisir une catégorie</label>
                              <select name="category" id="category" onChange={this.handleChange}>
                                  <option value="debutant">Débutant</option>
                                  <option value="intermediaire">Intérmédiaire</option>
                                  <option value="avance">Avancé</option>
                                  <option value="expert">Expert</option>
                              </select>
                          <input type="submit" value="Publier" id="submitNewArt" />
                      </form>
                  </div>
              </div>
          </div>
        </div>

          );
      }
  }
export default NewArticle;

