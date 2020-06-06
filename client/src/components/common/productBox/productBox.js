/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import styles from "./productBox.module.scss";
import Button from "../button/button";

const ProductBox = (props) => (
  <div
    className={styles.product}
    css={css`
      width: ${props.width};
    `}
  >
    <div className={styles.firstSection}>
      <img src="https://www.mediaexpert.pl/media/cache/gallery/product/3/862/849/348/d7vcgzvt/images/22/2292130/Z557269-2292132.jpg" />
      <div className={styles.labelProduct}>
        <span>Promocja</span>
        <span>Towar polecany</span>
      </div>
      <p className={styles.description}>
        Rower miejski DAWSTAR Moly D2028 Biały + Stylowy kosz wiklinowy VÖGEL
        VKS-502
      </p>
    </div>
    <div className={styles.secondSection}>
      <p className={styles.price}>
        150 <span>PLN</span>
      </p>
      <span className={styles.oldPrice}>99.99 PLN</span>
      <Button>Dodaj do koszyka</Button>
    </div>
  </div>
);

export default ProductBox;
