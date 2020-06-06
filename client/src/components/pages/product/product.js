import React from 'react';
import styles from './product.module.scss';
import Container from '../../layout/container/container';

const Product =()=>(
    <Container>
        <section className={styles.productPage}>
        <section className={styles.searchProductBox}>
            <div className={styles.searchPanel}>
                <header className={styles.headerPanel}>
                icon
                Kategorie
                </header>
                <div className={styles.panelBody}>
panelBody       <ul>
    <li>
        <a href="#"></a>
    </li>
    <li>
        <a href="#"></a>
    </li>
    <li>
        <a href="#"></a>
    </li>
    <li>
        <a href="#"></a>
    </li>
</ul>
                </div>
            </div>
        </section>
        <section className={styles.contentProduct}>
            <div className={styles.listOrder}>
        list order
            </div>
contentProduct
        </section>
        </section>
    </Container>

   
)

export default Product;