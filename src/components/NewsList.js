import React, { Suspense } from "react";
import Loader from "./Loader";
import { connect } from "react-redux";
const NewsCard = React.lazy(() => import("./NewsCard"));

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.newsList !== nextProps.newsList) {
      this.setState({
        newsList: nextProps.newsList.news
      });
    }
  }

  showNews() {
    return this.state.newsList !== undefined ?(
      <div className="container-fluid mt-4">
        <div className="d-flex justify-content-between flex-wrap">
          {this.state.newsList.length > 0 &&
            this.state.newsList.map(i => (
              <div className="mb-2 mt-2" key={i.title}>
                <NewsCard news={i}/>
              </div>
            ))}
        </div>
      </div>
    ) : <div className="mt-5">No News Found </div>
  }

  showLoader() {
    return <Loader />;
  }

  render() {
    return <Suspense fallback={this.showLoader()}>{this.showNews()}</Suspense>;
  }
}

const mapStateToProps = state => {
  return {
    newsList: state.newsCategory
  };
};

export default connect(mapStateToProps)(NewsList);
