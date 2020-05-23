import React from "react";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className={styles.conteiner}>
    <div className={styles.information}>
      <h3 className={styles.title}>Informacje</h3>
      <ul>
<li>Formy płatności</li>
<li>Zakupy na raty</li>
<li>Dostawa - czas i koszt</li>
<li>Punkty odbioru rowerów</li>
<li>Zwrot</li>
<li>Reklamacja</li>
<li>Gwarancje producentów</li>
<li>FAQ</li>
<li>Regulamin sklepu</li>
<li>Regulamin programu lojalnościowego</li>
      </ul>
    </div>
    <div className={styles.bikeCentrum}>
      <h3 className={styles.title}>Centrum Rowerowe</h3>
      <ul>

          <li>Dlaczego my</li>
          <li>O nas</li>
          <li>Kontakt</li>
          <li>Marki</li>
          <li>BLOG</li>
      </ul>
    </div>
    <div className={styles.joinTo}>
      <h3 className={styles.title}>Dołącz do nas</h3>
      <ul>
          <li>
             <FontAwesomeIcon className={styles.facebookIcon} icon={faFacebook}/>
          </li>
          <li><FontAwesomeIcon className={styles.instagramIcon} icon={faInstagram}/></li>
          <li><FontAwesomeIcon className={styles.youtubeIcon} icon={faYoutube}/></li>
      </ul>
    </div>
    <div className={styles.aboutUs}>
      <h3 className={styles.title}>O nas</h3>
      <ul><li> Bla bla Bla </li></ul>
    </div>
  </div>



);

export default Footer;
