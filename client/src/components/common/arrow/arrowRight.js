import React from "react";
import styles from "./arrow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ArrowRight = () => (
  <div className={styles.arrow}>
    <FontAwesomeIcon icon={faArrowRight} />
  </div>
);

export default ArrowRight;