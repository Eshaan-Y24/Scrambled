import React from "react";
import classes from "./Container1.module.css";
const Container = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}><h2>Login</h2>
          <input className={classes.input} type="text" placeholder='email' />
          <input className={classes.input} type="text" placeholder='password' />
          <button className={classes.btn}>SUBMIT</button>
        </div>
        <div className={classes.right}>
          <h1>Scrambled</h1>
          <h3>cook ⋅ sizzle ⋅ revel</h3>
        </div>
      </div>
    </div>
  );
};

export default Container;
