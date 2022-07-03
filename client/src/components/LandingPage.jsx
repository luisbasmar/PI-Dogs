import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import { getDogs, getTemperaments } from "../action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

  


export const LandingPage = () => {
  
  const dispatch = useDispatch();
  
  useSelector((state) => state.dogs);
  useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getDogs());
  },[dispatch]);

  return (
    <div className={style.compose}>
      <h1 className={style.h1Landing}>Welcome to The Dogs Library!</h1>
      <div>
      <Link to="/home">
        <button className={style.butLanding}>Home</button>
      </Link>
          
      </div>
    </div>
  );
};
