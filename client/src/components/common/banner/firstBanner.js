/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styles from './banner.module.scss';
import { NavLink } from "react-router-dom";

const FirstBanner =(props)=>(
    <div className={[styles.banner, styles.firstBanner].join(" ")}
    css={css`
    margin-top:${props.margin};
    height:${props.height};
    width:${props.width};
    background-position: ${props.position};
    `}
    >
    <NavLink to="/discount">
      <p>Wyjątkowa oferta tylko teraz</p>
      <p>Wyprzedaż do</p>
      <span>-50%</span>
    </NavLink>
  </div>

);


export default FirstBanner;