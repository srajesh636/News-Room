import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as Moment from "moment";
import React from "react";
import config from "../config.json";

const styles = theme => ({
  card: {
    width:300,
    height:300,
    maxWidth: 400,
    minWidth: 130,
    minHeight:300,
    maxHeight:310,
    marginTop:20,
    marginBottom:3,
    textAlign:'left !important',
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
  avatar: {
    backgroundColor: red[500]
  },
  newsTitle: {
    fontSize: "16px !important"
  }
});

class ShimmerCard extends React.Component {
  render() {
    let {classes}= this.props;
    return (
      <Card className={classes.card + " card"}>
        <div className="box shine"></div>
        <div className="lines shine mt-4"></div>
        <div className="lines shine"></div>
        <div className="lines shine"></div>
      </Card>
    );
  }
}

export default withStyles(styles)(ShimmerCard);
