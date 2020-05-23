import React from "react";
import styles from "./upNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';

const UpNav = () => (
  <nav className={styles.upNav}>
    <div className={styles.containerNav}>
      <ul>
        <li>
          <span>
            <FontAwesomeIcon icon={faMobile} />
          </span>
          <a href='tel:532-563-956'>532-563-956</a>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </span>
          <a href="mailto:info@test.pl">info@test.pl</a>
        </li>
      </ul>
      <ul>
        <li><NavLink to='/about'>O nas</NavLink></li>
        <li><NavLink to='/news'>Nowości</NavLink></li>
        <li><NavLink to='/contact'>Kontakt</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default UpNav;
