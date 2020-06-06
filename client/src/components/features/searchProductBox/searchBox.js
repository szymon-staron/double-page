import React from 'react';
import styles from './searchBox.module.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faLightbulb} from "@fortawesome/free-solid-svg-icons";

const searchBox =()=>{
    return(
        <div>
             <section className={styles.searchProductBox}>
        <div className={styles.searchPanel}>
          <header className={styles.headerPanel}>
            <FontAwesomeIcon icon={faBars} className={styles.icon} />
            Kategorie
          </header>
          <div className={styles.panelBody}>
            <ul>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Akcesoria rowerowe
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Bony podarunkowe
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Części rowerowe
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                 Haki do ram
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Hulajnogi
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Koła opony
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  test productu
                </a>
              </li>
             
            </ul>
          </div>
          <div className={styles.banners}>

            <div className={[styles.banner, styles.secondBanner].join(" ")}>
              <NavLink to="/news">
                <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
                <header>Nowości</header>
                <p>Zobacz nową kolekcje produktów!</p>
              </NavLink>
            </div>
            <div className={[styles.banner, styles.firstBanner].join(" ")}>
          <NavLink to="/discount">
            <p>wyjątkowa oferta tylko teraz</p>
            <p>Wyprzedaż do</p>
            <span>-50%</span>
          </NavLink>
        </div>
          </div>
        </div>
      </section>
        </div>
    )

}


export default searchBox;