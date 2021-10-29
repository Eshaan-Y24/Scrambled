import React from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <h2 className={classes.logo}>Scrambled</h2>
      <ul>
        <li>Shop</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Register</li>
      </ul>
    </nav>
  );
};

export default Navbar;
