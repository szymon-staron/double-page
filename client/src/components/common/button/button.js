import React from 'react';
import styles from './button.module.scss';
import PropTypes from "prop-types";

const Button =({children,click})=>(
    <button className={styles.btn}
    onClick={click}
    >
        {children}
    </button>
)

Button.propTypes ={
    click: PropTypes.func,
}
export default Button;