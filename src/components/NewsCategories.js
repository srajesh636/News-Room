import React from "react";
import Chip from "@material-ui/core/Chip";
import getNews from "../helpers/API";
import {connect} from 'react-redux';

let categories = [
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology"
];

class NewsCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getCategoryNews = (category) =>{
    this.props.dispatch({
      type:'SHOW_SHIMMER',
      payload:true
    })
    this.props.dispatch({
      type:'CURRENT_CATEGORY',
      payload:category
    })
    getNews(category);
    setTimeout(()=>{
      this.props.dispatch({
        type:'SHOW_SHIMMER',
        payload:false
      })
    },1500)
  }

  showAllCategory = _ => {
    return categories.map(i => (
      <div className="mr-1 ml-1 mt-2" key={i}>
        <Chip label={i} onClick={()=>{this.getCategoryNews(i)}}/>
      </div>
    ));
  };

  render() {
    return (
      <div className="mt-4 d-flex justify-content-center flex-wrap">
        {this.showAllCategory()}
      </div>
    );
  }
}

export default connect()(NewsCategories);
