import React from "react";
import classes from "./DiagramItem.module.css";

const DiagramItem = ({ category,color }) => {

  return (
    <div className={classes.DiagramItem}>
      <div style={{background:color}}></div>
      <p>{category}</p>
    </div>
  );
};

export default DiagramItem;
