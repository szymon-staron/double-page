import React from "react";
import styles from "./downNav.module.scss";
import { NavLink } from "react-router-dom";

const DownNav = () => (
  <nav className={styles.downNav}>
    <NavLink to="/">Strona główna</NavLink>
    <NavLink to="/prododuct">Produkty</NavLink>
    <NavLink to="/bike-scott">Rowery Scott</NavLink>
    <NavLink to="/rental">Wypożyczalnia</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/news">Nowości</NavLink>
    <NavLink to="/sale">Wyprzedaż</NavLink>
  </nav>
);
export default DownNav;
