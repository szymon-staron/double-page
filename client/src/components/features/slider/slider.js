import React from "react";
import styles from "./slider.module.scss";
import Container from "../../layout/container/container";
import Arrow from "../../common/arrow/arrow";

const Slider = () => (
  <div className={styles.sliderBgc}>
    <Container className={styles.noneM}>
      <div id="main-slider" className={styles.slider}>
        <div className={styles.show}>
          <Arrow direction="left" color='light' />
        </div>

        <div className={styles.slick_list}>
          <div className={styles.slick_track}>
            <div className={styles.img}>
              <img
                alt="slider-photo"
                src="https://cdn.pixabay.com/photo/2014/09/07/21/59/bicycle-438400_1280.jpg"
              />
            </div>
            <div className={styles.img}>
              <img alt="slider-photo" src="/public/img/slider-1.jpg" />
            </div>
            <div className={styles.img}>
              <img alt="slider-photo" src="../../../public/img/slider-1.jpg" />
            </div>
            <div className={styles.img}>
              <img alt="slider-photo" src="../../../public/img/slider-1.jpg" />
            </div>
            <div className={styles.img}>
              <img alt="slider-photo" src="../../../public/img/slider-1.jpg" />
            </div>
          </div>
        </div>
        <ul className={styles.slick_dots}>
          <li>
            <button role="button" tabIndex="0">
              1
            </button>
          </li>
          <li>
            <button tabIndex="0">2</button>
          </li>
          <li>
            <button tabIndex="0">3</button>
          </li>
          <li>
            <button tabIndex="0">4</button>
          </li>
          <li className={styles.active}>
            <button tabIndex="0">5</button>
          </li>
        </ul>
        <div className={styles.show}>
          <Arrow direction="right" color='light' />
        </div>
      </div>
    </Container>
  </div>
);

export default Slider;
