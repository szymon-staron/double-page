import React from 'react';
import styles from './contentBox.module.scss';
import ProductBox from '../../common/productBox/productBox';
const ContentBox =()=>{

    return(
        <section className={styles.contentProduct}>
        <div className={styles.listOrder}>
          <span>Sortuj według:</span>
          <input type="hidden" name='sort' value/>
          <select>
            <option value="1">Najczęściej kupowane</option>
             <option value="2">Nazwa(A-Z)</option>
             <option value="3">Nazwa(Z-A)</option>
             <option value="4">Cena malejąco</option>
             <option value="5">Cena rosnąco</option>
          </select>
        </div>
        <div className={styles.content} id="content">
        <header >
          <h3 className={styles.title}>Części</h3>
        </header>
        <ProductBox width="calc(33% - 20px) " />
        <ProductBox width="calc(33% - 20px) " />
        <ProductBox width="calc(33% - 20px) " />
        <ProductBox width="calc(33% - 20px) " />
        <ProductBox width="calc(33% - 20px)" />
        <ProductBox width="calc(33% - 20px)" />
        <ProductBox width="calc(33% - 20px)" />
        <ProductBox width="calc(33% - 20px)" />
        <ProductBox width="calc(33% - 20px) " />
        <ProductBox width="calc(33% - 20px) " />
        <ProductBox width="calc(33% - 20px) " />
        <ProductBox width="calc(33% - 20px) " />
        <ProductBox width="calc(33% - 20px)" />
        <ProductBox width="calc(33% - 20px)" />
        <ProductBox width="calc(33% - 20px)" />
        <ProductBox width="calc(33% - 20px)" />
        </div>
      </section>
   
    )
}

export default ContentBox;