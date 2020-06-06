import React from "react";
import styles from "./banner.module.scss";
import Container from "../../layout/container/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Banner = () => (
  <div className={styles.content}>
    <Container>
      <div className={styles.mainBaner}>
        <div className={[styles.banner, styles.firstBanner].join(" ")}>
          <NavLink to="/discount">
            <p>wyjątkowa oferta tylko teraz</p>
            <p>Wyprzedaż do</p>
            <span>-50%</span>
          </NavLink>
        </div>
        <div className={[styles.banner, styles.secondBanner].join(" ")}>
          <NavLink to="/news">
            <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
            <header>Nowości</header>
            <p>Zobacz nową kolekcje produktów!</p>
          </NavLink>
        </div>
        <div className={[styles.banner, styles.thirdBanner].join(" ")}>
          <NavLink to="/servis">
            <FontAwesomeIcon icon={faTools} className={styles.icon} />
            <header>Serwis</header>
            <p>Serwisowanie sprzetu!</p>
            <p>Nie ma dla nas niewykonalnego!</p>
          </NavLink>
        </div>
      </div>
    </Container>
  </div>
);

export default Banner;
