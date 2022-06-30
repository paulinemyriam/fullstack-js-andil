import React from "react";
import Navbar from "../Navbar/Navbar";
import Tabs from "../TabsHome/Tabs";

class Home extends React.Component {
  constructor(props){
    super(props)
    console.log(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <h1>WikiAndil, la plateforme collaborative</h1>
        <Tabs data={this.props.data} />
      </div>
    );
  }
}

export default Home;
