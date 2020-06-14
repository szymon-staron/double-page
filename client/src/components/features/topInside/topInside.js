import React from "react";
import styles from "./topInside.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBasket,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import Logo from '../../common/logo/logo';

const TopIside = () => {
  return (
    <div className={styles.topInside}>
      <div className={styles.containerNav}>
        <div className={styles.topLogo}>
          <Logo/>
        </div>
        <div className={styles.topSearch}>
          <form method="get" id="searchSimple" className={styles.form}>
            <input
              type="text"
              name="search"
              placeholder="Szukaj towaru..."
              required="required"
              autoComplete="off"
            ></input>
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className={styles.topBasket}>
          <div className={styles.basketCard}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </span>

            <div className={styles.basket}>
              <span>
                <span>Koszyk</span>
                <span className={styles.amount}>(0)</span>
                <span className={styles.value}>0,00 PLN</span>
              </span>
            </div>
          </div>
          <div className={styles.basketList}></div>
        </div>
        <div className={styles.topAccont}>
          <div className={styles.login}>
            <span>
              <FontAwesomeIcon icon={faLock} />
            </span>
            <NavLink to='/accont'>Logowanie</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopIside;
