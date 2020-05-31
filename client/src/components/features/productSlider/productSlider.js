import React from "react";
import styles from "./productSlider.module.scss";
import Arrow from "../../common/arrow/arrow";
import Container from "../../layout/container/container";
import ProductBox from "../../common/productBox/productBox";
import PropTypes from 'prop-types';

const ProductSlider = ({title}) => (
  <Container>
    <header>
      <h3 className={styles.title}>{title}</h3>
    </header>
    <div className={styles.slider}>
      <div className={[styles.arrowBox, styles.left].join(" ")}>
        <Arrow direction="left" />
      </div>
      <div className={styles.sliderList}>
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <div  className={styles.dots}>
          <ul >
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li className={styles.active}>6</li>

          </ul>
      </div>
      </div>
      <div className={styles.arrowBox}>
        <Arrow direction="right" />
      </div>
     
    </div>
  </Container>
);

ProductSlider.propTypes={
  title:PropTypes.string,
}
export default ProductSlider;
