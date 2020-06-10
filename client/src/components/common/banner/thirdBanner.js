import React from "react";
import styles from "./banner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const ThirdBanner = () => (
  <div className={[styles.banner, styles.thirdBanner].join(" ")}>
    <NavLink to="/servis">
      <FontAwesomeIcon icon={faTools} className={styles.icon} />
      <header>Serwis</header>
      <p>Serwisowanie sprzetu!</p>
      <p>Nie ma dla nas niewykonalnego!</p>
    </NavLink>
  </div>
);

export default ThirdBanner;
