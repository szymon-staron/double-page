import React from "react";
import styles from "./arrow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ArrowLeft = () => (
  <div className={styles.arrow}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </div>
);

export default ArrowLeft;