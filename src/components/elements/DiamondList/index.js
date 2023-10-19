import React from "react";
import * as style from "./index.module.css";

const DiamondList = ({ children }) => {
  return <ul className={style.diamondList}>{children}</ul>;
};

export default DiamondList;
