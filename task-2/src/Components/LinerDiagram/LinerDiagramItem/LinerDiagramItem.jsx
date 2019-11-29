import React from "react";
import classes from "./LinerDiagramItem.module.css";

const LinerDiagramItem = ({ name, color, list, total }) => {
  const countCat = list
    .filter(elem => elem.category === name)
    .reduce((sum, elem) => sum + Number(elem.price), 0);
  const procent = (countCat * 100) / total;
  const styles = {
    width: procent + "%",
    backgroundColor: color
  };

  return <div className={classes.LinerDiagramItem} style={styles}/>;
};

export default LinerDiagramItem;
