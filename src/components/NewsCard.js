import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import config from "../config.json";
import * as Moment from 'moment';


const styles = theme => ({
  card: {
    maxWidth: 400,
    minWidth: 130
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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

  render() {
    const { classes, news } = this.props;
    let newsUrl = this.badData(news.urlToImage)
      ? config.defaultImageUrl
      : news.urlToImage;
    let newsContent = this.badData(news.content)
      ? config.defaultContent
      : news.content;

    let newsTime= Moment(news.publishedAt).format("dddd, MMMM Do YYYY")

    return (
      <Card className={classes.card}>
        <CardHeader title={news.title} subheader={newsTime} />
        <CardMedia
          className={classes.media}
          image={newsUrl}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p" className="news-content">
            {newsContent}
          </Typography>
        </CardContent>
        <Button
          size="small"
          color="primary"
          className="mb-2"
          href={news.url}
          target="_blank"
        >
          Read More
        </Button>
      </Card>
    );
  }
}

export default withStyles(styles)(NewsCard);
