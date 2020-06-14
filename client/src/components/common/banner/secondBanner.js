/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styles from "./banner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SecondBanner = (props) => (
  <div className={[styles.banner, styles.secondBanner].join(" ")}
  css={css`
  height:${props.height}`}>
    <NavLink to="/news">
      <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
      <header>Nowości</header>
      <p>Zobacz nową kolekcje produktów!</p>
    </NavLink>
  </div>
);

export default SecondBanner;
