import React from "react";
import classes from "./Title.module.css";

const Title = (props) => {
  return (
    <p className={classes.title}>
      <span className={classes.bold}>{props.bold}</span> {props.children}
    </p>
  );
};

export default Title;
