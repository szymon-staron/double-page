import React from "react";
import styles from "./banner.module.scss";
import Container from "../../layout/container/container";
import FirstBanner from "../../common/banner/firstBanner";
import SecondBanner from "../../common/banner/secondBanner";
import ThirdBanner from "../../common/banner/thirdBanner";

const Banner = () => (
  <div className={styles.content}>
    <Container>
      <div className={styles.mainBaner}>
        <FirstBanner  />
        <SecondBanner />
        <ThirdBanner />
      </div>
    </Container>
  </div>
);

export default Banner;
