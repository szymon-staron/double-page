import React from "react";
import styles from './card.module.scss';

const Card = (props) => {
  return (
    <div className={styles.img}
    >
      <img
        alt="slider-photo"
        src={props.cardSrc}
      />
    </div>
  );
};

export default Card;
