import React from "react";
import Navbar from "../Navbar/Navbar";
import Tabs from "../TabsHome/Tabs";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>WikiAndil, la plateforme collaborative</h1>
        <Tabs title={"titre1"} content={"contenuuuuuuu"} category={"cat1"} />
      </div>
    );
  }
}

export default Home;
