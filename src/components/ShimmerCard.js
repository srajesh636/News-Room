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
  }
});

class ShimmerCard extends React.Component {

  render() {
    return (
      <Card className={classes.card}>
      <Image
          width={380} height={50}
          style={{objectFit: 'cover'}} // Style your <img>
          delay={25}
          duration={0.9} // Customize the animation duration (s).
        />
      <br/>
      <Image
          width={380} height={200}
          style={{objectFit: 'cover'}} // Style your <img>
          delay={25}
          duration={0.9} // Customize the animation duration (s).
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

export default withStyles(styles)(ShimmerCard);
