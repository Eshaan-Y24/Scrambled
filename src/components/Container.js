import React from "react";
import classes from "./Container.module.css";
const Container = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <h1>Scrambled</h1>
      </div>
      <div className={classes.right}>login</div>
    </div>
  );
};

export default Container;
