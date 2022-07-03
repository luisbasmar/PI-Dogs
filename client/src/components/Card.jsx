import React from "react";
import { Link } from "react-router-dom";
import imgs from "./imgs/noimg.jpg";

import s from "./Card.module.css";

export const Card = ({ name, image, temperament, temperaments, id, weight }) => {
  return (
    <div className={s.container}>
      <Link to={`/dogs/${id}`}>
        <img src={image ? image : imgs} alt="breed" className="s.pict"/>
        <h2 id={s.name}>{name}</h2>
        <h4>Weight: {weight}</h4>
        <u>Temperament</u> <br />
        <p>{temperament
          ? temperament.map((el) => " - " + el + "  ")
          : temperaments?.map((el) => " - "+ el.name + "  ")}</p>
      </Link>
    </div>
  );
};