import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsCategories from "./components/NewsCategories";
import NewsList from "./components/NewsList";
import getNews from "./helpers/API";
import {connect }from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    maxWidth: 400,
    minWidth: 130,
    minHeight:320,
    maxHeight:310,
    marginTop:20,
    marginBottom:3,
    textAlign:'left !important',
    cursor:'default !important'
  },
  title:{
    fontFamily:'Raleway'
  },
  media: {
    height: 0,
    paddingTop: "40.25%" ,
    marginBottom:5
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  newsTitle: {
    fontSize: "16px !important"
  }
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    window.addEventListener('load', window.setup);
    this.props.dispatch({
      type:'SHOW_SHIMMER',
      payload:true
    })
    this.props.dispatch({
      type:'CURRENT_CATEGORY',
      payload: 'Top Headlines'
    })
    getNews();
    setTimeout(()=>{
      this.props.dispatch({
        type:'SHOW_SHIMMER',
        payload:false
      })
    },1500)
  }

  render() {
    let {classes} = this.props
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <NewsCategories />
          <Typography variant="h5" gutterBottom className={classes.title + " mt-5 mb-2"}>
            {this.props.newsList.currentCategory}
          </Typography>
          <hr style={{width:'40%' ,height:7}}/>
        </div>
        <NewsList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newsList: state.newsCategory
  };
};

export default connect(mapStateToProps)(withStyles(styles)(App));
