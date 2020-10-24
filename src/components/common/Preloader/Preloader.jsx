import React from "react";
import preloader from "../../../assets/img/infinity.svg";
import style from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div className={style.preloader}>
      <img src={preloader} alt="preloader" className={style.icon} />
    </div>
  );
};

export default Preloader;
