import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as Moment from "moment";
import React from "react";
import config from "../config.json";
import Fab from "@material-ui/core/Fab";
import Share from "@material-ui/icons/Share";

const styles = theme => ({
  card: {
    maxWidth: 400,
    height: "auto",
    minWidth: 130,
    minHeight: 320,
    marginTop: 20,
    marginBottom: 3,
    textAlign: "left !important",
    cursor: "default !important"
  },
  title: {
    fontFamily: "Raleway"
  },
  media: {
    height: 0,
    paddingTop: "40.25%",
    marginBottom: 5
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
  avatar: {
    backgroundColor: red[500]
  },
  newsTitle: {
    fontSize: "16px !important"
  }
});

class NewsCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  badData = data => {
    if (data === null || data === undefined || data === "") {
      return true;
    }
    return false;
  };

  redirectTo = url => {
    window.location.href = url;
  };

  render() {
    const { classes, news } = this.props;
    let newsUrl = this.badData(news.urlToImage)
      ? config.defaultImageUrl
      : news.urlToImage;
    let newsContent = this.badData(news.content)
      ? config.defaultContent
      : news.content;

    let newsTime = Moment(news.publishedAt).format("dddd, MMMM Do YYYY");

    return (
      <Card
        className={classes.card + " card"}
        onClick={() => {
          this.redirectTo(news.url);
        }}
      >
        <CardMedia
          className={classes.media}
          image={newsUrl}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {news.title}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(NewsCard);
