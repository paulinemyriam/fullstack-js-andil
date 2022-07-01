import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Article from "./Article";


class AllArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleTabs:1,
      title:'',
      error: null,
    isLoaded:false,
    items:[],
    articleEnCours:{ "title": "",  "content": ""}
  };
    
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
}
componentDidMount(){
  fetch('http://localhost:3001/all')
  .then(res=>res.json())
  .then((result)=>{
  
      this.setState({
          isLoaded:true,
          items:result
      });
  },
  (error) => {
      this.setState({
          isLoaded: true,
          error
      });
  }
  )
}
analyseVersionning(item){
  //parcours tout le tableau des index jusqu'a trouver la plus grande valeur de v en excluant la 1ere lettre
  //si une version est supprimé ex v5 entre v4 et v6 par exemple                
  let versionArray=[]
  let v=''
  for (const key in item){
      if (key[0]=='v' ){
          versionArray.push(key.substring(1))
      }  
  }
  v='v'+(Math.max(...versionArray))
  return v;
  
  
}


search(event){
    event.preventDefault();
    let name='title'
    let value=this.state.title
    if(event.target[0].value[0]=='#'){
      name="tags"
      value=value.substring(1)
    }
   
    
fetch('http://localhost:3001/find',{
        method:'POST',
        headers: {
        "Content-Type": "application/json"},
        body:JSON.stringify({[name]:value})
    })
    .then(res => res.json())
    .then(data=>{
      this.setState({items:data})
    })
    .catch(err => console.log(err));

}
displayArticle(e){
  this.setState({articleEnCours:e})
  console.log(this.state);
}
  render() {//mettre un #devant tag pour rechercher un tag 
    return (
      <div>
        <Navbar />
        

      
        <Article className={this.state.toggleTabs !== 1 ? "hide" : ""} 
        article={this.state.articleEnCours}></Article>

        <div id="head-all-articles">
          <h1>Tous les articles</h1>
          <form onSubmit={this.search}>
            <input type="search" id="find" value={this.state.title} onChange={this.handleChange} placeholder="#Tag, titre..." />
            <input type="submit" value="Rechercher" />
          </form>

          <Fragment>
            <ul id="listeArticles"> {/* AJOUTER CSS main qui clique  */}
              {this.state.items.map((item) => (
                <li key={item._id} onClick={()=>this.displayArticle(item)}>
                  <h3>{item[this.analyseVersionning(item)].title}</h3>
                  <img></img>
                  <p>{item[this.analyseVersionning(item)].content}</p>
                  <div className="tag-item">{item[this.analyseVersionning(item)].tags}</div> {/* css tags */}
                </li>
              ))}
            </ul>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default AllArticles;