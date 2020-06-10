import React from "react";
import styles from "./product.module.scss";
import Container from "../../layout/container/container";
import SearchBox from '../../features/searchProductBox/searchBox';
import ContentBox from '../../features/contentProductBox/contentBox';

const Product = () => (
  <Container>
    <section className={styles.productPage}>
     <SearchBox/>
   <ContentBox/>
    </section>
  </Container>
);

export default Product;
