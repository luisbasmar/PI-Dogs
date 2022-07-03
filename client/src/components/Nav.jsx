/** @format */

import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.contenedor}>
        <Link to="/home" className={style.link}>
          <h1 className={style.name}>Dogs Library </h1>
        </Link>
        <Link to="/dog" className={style.link}>
          <h2 className={style.create}>Create Dog</h2>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
