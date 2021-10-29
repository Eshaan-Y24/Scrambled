import classes from "./Footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <ul>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
      </ul>
    </div>
  );
};

export default Footer;
