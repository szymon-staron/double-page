/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styles from "./productBox.module.scss";
import Button from "../button/button";
import PropTypes from "prop-types";

const ProductBox = ({ width, description, price, oldPrice, image }) => {
  return (
    <div
      className={styles.product}
      css={css`
        width: ${width};
      `}
    >
      <div className={styles.firstSection}>
        <img src={image} />
        <div className={styles.labelProduct}>
          <span>Promocja</span>
          <span>Towar polecany</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.secondSection}>
        <p className={styles.price}>
          {price} <span>PLN</span>
        </p>
        <span className={styles.oldPrice}>{oldPrice} PLN</span>
        <Button>Dodaj do koszyka</Button>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  width: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  label: PropTypes.array,
};
ProductBox.defaultProps = {
  description:
    " Rower miejski DAWSTAR Moly D2028 Biały + Stylowy kosz wiklinowy VÖGEL VKS-502",
  image:
    "https://www.mediaexpert.pl/media/cache/gallery/product/3/862/849/348/d7vcgzvt/images/22/2292130/Z557269-2292132.jpg ",
  price: 99.99,
  oldPrice: 150,
  label: ["promocja", "Towar polecany"],
};

export default ProductBox;
