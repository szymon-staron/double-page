import React from "react";
import styles from "./searchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SecondBanner from '../../common/banner/secondBanner';
import FirstBanner from '../../common/banner/firstBanner';

const searchBox = () => {
  return (
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
                  <ul className={styles.hide}>
                    <li>
                      <a>Bagaznik</a>
                    </li>
                    <li>
                      <a>siadełko</a>
                    </li>
                    <li>
                      <a>dzwonek</a>
                    </li>
                    <li>
                      <a>spojlery</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Bony podarunkowe
                  <ul className={styles.hide}>
                    <li>
                      <a>Bagaznik</a>
                    </li>
                    <li>
                      <a>siadełko</a>
                    </li>
                    <li>
                      <a>dzwonek</a>
                    </li>
                    <li>
                      <a>spojlery</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Części rowerowe
                  <ul className={styles.hide}>
                    <li>
                      <a>Bagaznik</a>
                    </li>
                    <li>
                      <a>siadełko</a>
                    </li>
                    <li>
                      <a>dzwonek</a>
                    </li>
                    <li>
                      <a>spojlery</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Haki do ram
                  <ul className={styles.hide}>
                    <li>
                      <a>Bagaznik</a>
                    </li>
                    <li>
                      <a>siadełko</a>
                    </li>
                    <li>
                      <a>dzwonek</a>
                    </li>
                    <li>
                      <a>spojlery</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Hulajnogi
                  <ul className={styles.hide}>
                    <li>
                      <a>Bagaznik</a>
                    </li>
                    <li>
                      <a>siadełko</a>
                    </li>
                    <li>
                      <a>dzwonek</a>
                    </li>
                    <li>
                      <a>spojlery</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  Koła opony
                  <ul className={styles.hide}>
                    <li>
                      <a>Bagaznik</a>
                    </li>
                    <li>
                      <a>siadełko</a>
                    </li>
                    <li>
                      <a>dzwonek</a>
                    </li>
                    <li>
                      <a>spojlery</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.iconCircle}></span>
                  test productu
                  <ul className={styles.hide}>
                    <li>
                      <a>Bagaznik</a>
                    </li>
                    <li>
                      <a>siadełko</a>
                    </li>
                    <li>
                      <a>dzwonek</a>
                    </li>
                    <li>
                      <a>spojlery</a>
                    </li>
                  </ul>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.banners}>
           <SecondBanner height='100%'/>
           <FirstBanner height='100%' width='100%' position='center'/>
          </div>
        </div>
      </section>
  );
};

export default searchBox;
