import React from "react";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className={styles.conteiner}>
      <div className={styles.information}>
        <h3 className={styles.title}>INFORMACJE</h3>
        <ul>
          <li>
            <NavLink to="/form_to_pay">Formy płatności</NavLink>
          </li>
          <li>
            <NavLink to="/delivery">Dostawa - czas i koszt</NavLink>
          </li>
          <li>
            <NavLink to="/bicycle_point">Punkty odbioru rowerów</NavLink>
          </li>
          <li>
            <NavLink to="/return">Zwrot</NavLink>
          </li>
          <li>
            <NavLink to="/reclamation">Reklamacja</NavLink>
          </li>
          <li>
            <NavLink to="/warranty">Gwarancje producentów</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/regulations">Regulamin sklepu</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.bikeCentrum}>
        <h3 className={styles.title}>CENTRUM ROWEROWE</h3>
        <ul>
          <li>
            <NavLink to="/why_us">Dlaczego my</NavLink>
          </li>
          <li>
            <NavLink to="/about_us">O nas</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/brands">Marki</NavLink>
          </li>
          <li>
            <NavLink to="/blog">BLOG</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.joinTo}>
        <h3 className={styles.title}>DOŁĄCZ DO NAS</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/" alt="Facebook">
              <FontAwesomeIcon
                className={styles.facebookIcon}
                icon={faFacebook}
              />
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.instagram.com/" alt="Instagram">
              <FontAwesomeIcon
                className={styles.instagramIcon}
                icon={faInstagram}
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" alt="Youtube">
              <FontAwesomeIcon
                className={styles.youtubeIcon}
                icon={faYoutube}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.aboutUs}>
        <h3 className={styles.title}>O NAS</h3>
        <ul>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
