import React from "react";
import Chip from "@material-ui/core/Chip";
import getNews from "../helpers/API";

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
    getNews(category);
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

export default NewsCategories;
