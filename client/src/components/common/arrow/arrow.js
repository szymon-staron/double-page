/** @jsx jsx */
import styles from "./arrow.module.scss";
import { css, jsx } from "@emotion/core";
import ArrowLeft from "./arrowLeft";
import ArrowRight from "./arrowRight";


const Arrow = ({ direction, handleClick,color }) => (
  <div
    onClick={handleClick}
    className={styles.arrow}
    css={css`
      ${direction === "right" ? `right:20px` : `left:30px`};
      img {
        transform: translateX(${direction === "left" ? "-2" : "2"}px); 
      
      }
      ${color === 'light'? `color:white` : `color:black`}; 
    `}
  >
    {direction === "right" ? <ArrowRight /> : <ArrowLeft />}
  </div>
);

export default Arrow;
