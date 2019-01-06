import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsCategories from "./components/NewsCategories";
import NewsList from "./components/NewsList";
import getNews from "./helpers/API";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    getNews();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <NewsCategories />
        </div>
        <NewsList />
      </div>
    );
  }
}

export default App;
