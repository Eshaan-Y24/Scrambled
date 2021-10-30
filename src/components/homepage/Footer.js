import classes from "./Footer.module.css";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <Link>
          <li>GitHub</li>
        </Link>
        <Link>
          <li>LinkedIn</li>
        </Link>
        <Link>
          <li>Email</li>
        </Link>
      </ul>
      <p className={classes.copyright}>© Eshaan Yadav 2021</p>
    </footer>
  );
};

export default Footer;
