import React from "react";
import styles from "./bottomBanner.module.scss";
import Container from "../../layout/container/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faHistory,
  faPaperPlane,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

const BottomBanner = () => (
  <Container>
    <section className={styles.bottomBanner}>
      <div className={styles.banner}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faCreditCard} />
        </div>
        <div className={styles.description}>
          <h3>Przelewy24</h3>
          <p>Płatność online</p>
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
        <div className={styles.description}>
          <h3>Wysyłka gratis</h3>
          <p>Dla zamówień powyż. 100zł</p>
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faHistory} />
        </div>
        <div className={styles.description}>
          <h3>Realizacja zamówien</h3>
          <p>W ciągu 24h!</p>
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faHeadphones} />
        </div>
        <div className={styles.description}>
          <h3>Profesjonalne</h3>
          <p>doractwo</p>
        </div>
      </div>
    </section>
  </Container>
);

export default BottomBanner;
