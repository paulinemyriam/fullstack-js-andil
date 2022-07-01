import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: this.props.article.title,
      content: this.props.article.content,
      lastVersion: this.props.article.lastVersion,
    };

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.id;
    this.setState({ [name]: event.target.value });
  }
  deleteArticle() {
    console.log(this.state);
    let uri =
      "http://localhost:3001/articles?title=" + this.props.article.title;
    fetch(uri, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: this.props.title }),
    })
      .then((res) => res.json())
      .then((data) => {
        //this.setState({items:data})
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
  editArticle() {
    let data = {
      title: this.props.article.title,
      content: this.props.article.title,
      tags: this.props.article.title,
      lastVersion: this.props.article.lastVersion + 1,
    };

    let uri = "http://localhost:3001/articles"; //?title='+this.props.article.title
    fetch(uri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        //this.setState({items:data})
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div id="article">
        <h1>Editer mon article</h1>
        <h2>{this.state.title}</h2>
        <input
          type="text"
          id="content"
          placeholder="Votre article"
          value={this.state.content}
          onChange={this.handleChange}
        />
        {this.props.article.lastVersion}
        <button onClick={() => this.editArticle(this.state)}>
          Valider modification
        </button>
      </div>
    );
  }
}
export default Article;
